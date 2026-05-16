"use client";

import { useEffect, useRef, useState } from "react";
import { buildStaticRoomPreviewDisplay } from "./build-static-display";
import { ROOM_PREVIEW_TRANSCRIPT } from "./transcript";
import { ROOM_PREVIEW_INITIAL_PARTICIPANTS } from "./participants";
import {
  ROOM_PREVIEW_TIMELINE,
  ROOM_PREVIEW_TIMING,
  typewriterCharDelay,
} from "./timeline";
import type { RoomPreviewDisplayedMessage } from "./types";

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function useRoomPreviewAnimation() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [cycle, setCycle] = useState(0);
  const [participants, setParticipants] = useState<string[]>([
    ...ROOM_PREVIEW_INITIAL_PARTICIPANTS,
  ]);
  const [messages, setMessages] = useState<RoomPreviewDisplayedMessage[]>([]);
  const [micActive, setMicActive] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeBubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      const staticState = buildStaticRoomPreviewDisplay();
      setParticipants(staticState.participants);
      setMessages(staticState.messages);
      setMicActive(false);
      return;
    }

    let cancelled = false;
    const timeouts = new Set<ReturnType<typeof setTimeout>>();

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = setTimeout(() => {
          timeouts.delete(id);
          if (!cancelled) resolve();
        }, ms);
        timeouts.add(id);
      });

    const resetScroll = () => {
      const el = scrollRef.current;
      if (el) el.scrollTop = 0;
    };

    const scrollActiveIntoView = () => {
      requestAnimationFrame(() => {
        const el = scrollRef.current;
        const bubble = activeBubbleRef.current;
        if (!el || !bubble) return;

        const elRect = el.getBoundingClientRect();
        const bubbleRect = bubble.getBoundingClientRect();
        const overflow = bubbleRect.bottom - elRect.bottom + 8;
        if (overflow > 0) el.scrollTop += overflow;
      });
    };

    async function typewriteMessage(messageIndex: number) {
      const source = ROOM_PREVIEW_TRANSCRIPT[messageIndex];
      if (source.kind !== "user") return;

      setMicActive(true);
      setMessages((prev) => [
        ...prev,
        {
          ...source,
          messageIndex,
          displayText: "",
          isActive: true,
        },
      ]);
      scrollActiveIntoView();

      for (let i = 1; i <= source.text.length; i += 1) {
        if (cancelled) return;
        const slice = source.text.slice(0, i);
        const char = source.text[i - 1] ?? "";
        setMessages((prev) =>
          prev.map((m) =>
            m.messageIndex === messageIndex
              ? { ...m, displayText: slice }
              : m
          )
        );
        if (i % 8 === 0) scrollActiveIntoView();
        await wait(typewriterCharDelay(char));
      }

      setMessages((prev) =>
        prev.map((m) =>
          m.messageIndex === messageIndex ? { ...m, isActive: false } : m
        )
      );
      setMicActive(false);
      await wait(ROOM_PREVIEW_TIMING.pauseAfterMessageMs);
    }

    async function runCycle() {
      resetScroll();
      setParticipants([...ROOM_PREVIEW_INITIAL_PARTICIPANTS]);
      setMessages([]);
      setMicActive(false);
      await wait(ROOM_PREVIEW_TIMING.pauseBeforeLoopMs);

      for (const step of ROOM_PREVIEW_TIMELINE) {
        if (cancelled) return;

        switch (step.kind) {
          case "join":
            setParticipants((prev) =>
              prev.includes(step.participant)
                ? prev
                : [...prev, step.participant]
            );
            await wait(ROOM_PREVIEW_TIMING.pauseAfterJoinMs);
            break;

          case "system": {
            const source = ROOM_PREVIEW_TRANSCRIPT[step.messageIndex];
            setMessages((prev) => [
              ...prev,
              {
                ...source,
                messageIndex: step.messageIndex,
                displayText: source.text,
                isActive: false,
              },
            ]);
            await wait(ROOM_PREVIEW_TIMING.pauseAfterSystemMs);
            break;
          }

          case "typewrite":
            await typewriteMessage(step.messageIndex);
            break;

          case "hold":
            await wait(step.durationMs);
            break;

          case "reset":
            break;
        }
      }

      if (!cancelled) {
        resetScroll();
        setCycle((c) => c + 1);
      }
    }

    runCycle();

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [cycle, prefersReducedMotion]);

  return {
    participants,
    messages,
    micActive: prefersReducedMotion ? false : micActive,
    scrollRef,
    activeBubbleRef,
    prefersReducedMotion,
  };
}
