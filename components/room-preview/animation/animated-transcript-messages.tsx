"use client";

import { useMemo, type RefObject } from "react";
import {
  BubbleTextRow,
  isSameSpeakerAsPrevious,
  needsBlockGapAbove,
} from "@/shared/conversation";
import { useMessageEnterAnimation } from "./use-message-enter-animation";
import type { RoomPreviewDisplayedMessage } from "./types";

export function AnimatedTranscriptMessages({
  messages,
  activeBubbleRef,
  enableEnterAnimation = true,
}: {
  messages: RoomPreviewDisplayedMessage[];
  activeBubbleRef?: RefObject<HTMLDivElement | null>;
  enableEnterAnimation?: boolean;
}) {
  const messageIndicesKey = useMemo(
    () => messages.map((m) => m.messageIndex).join(","),
    [messages]
  );

  const enteringIndices = useMessageEnterAnimation(
    messageIndicesKey,
    enableEnterAnimation
  );

  return (
    <>
      {messages.map((msg, idx) => {
        const enterClass =
          enableEnterAnimation && enteringIndices.has(msg.messageIndex)
            ? "room-preview-message-enter"
            : "";

        if (msg.kind === "system") {
          return (
            <p
              key={msg.messageIndex}
              className={`conversation-system-msg ${enterClass} mb-6 ${needsBlockGapAbove(messages, idx) ? "mt-6" : ""}`}
            >
              {msg.displayText}
            </p>
          );
        }

        const bubbleClass = msg.isActive
          ? "conversation-bubble"
          : "conversation-bubble-other";

        const nameClass =
          "text-xs sm:text-sm font-medium text-[#171717] truncate max-w-full";

        const showSpeakerName = !isSameSpeakerAsPrevious(messages, idx);
        const gapBefore = needsBlockGapAbove(messages, idx) ? "mt-6" : "";
        const stackSpacing = "mb-1";

        const bubble = (
          <div
            ref={msg.isActive ? activeBubbleRef : undefined}
            className={`${bubbleClass} inline-block px-4 py-2 max-w-full sm:max-w-[560px] break-words transition-[background-color] duration-300 ease-out`}
          >
            <BubbleTextRow
              text={msg.displayText}
              showCaret={msg.isActive}
              caretBlink={msg.isActive}
            />
          </div>
        );

        if (msg.rightAlign) {
          return (
            <div
              key={msg.messageIndex}
              className={`${enterClass} ${gapBefore} ${stackSpacing} flex flex-col items-end text-right`}
            >
              {showSpeakerName && (
                <div className="mb-0.5 sm:mb-1 w-full flex justify-end min-w-0">
                  <span className={nameClass}>{msg.speaker}</span>
                </div>
              )}
              <div className="w-full flex justify-end">{bubble}</div>
            </div>
          );
        }

        return (
          <div
            key={msg.messageIndex}
            className={`${enterClass} ${gapBefore} ${stackSpacing}`}
          >
            {showSpeakerName && (
              <div className="mb-0.5 sm:mb-1">
                <span className={nameClass}>{msg.speaker}</span>
              </div>
            )}
            {bubble}
          </div>
        );
      })}
    </>
  );
}
