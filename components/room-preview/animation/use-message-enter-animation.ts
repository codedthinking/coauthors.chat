"use client";

import { useEffect, useRef, useState } from "react";
import { MESSAGE_ENTER_ANIMATION_MS } from "./constants";

/**
 * Tracks which message indices should play the one-shot enter animation (client-only).
 * @param messageIndicesKey Stable comma-separated ids, e.g. `"0,1,2"` (not a fresh array each render).
 */
export function useMessageEnterAnimation(
  messageIndicesKey: string,
  enabled: boolean
) {
  const seenIndicesRef = useRef(new Set<number>());
  const [enteringIndices, setEnteringIndices] = useState<ReadonlySet<number>>(
    () => new Set()
  );

  useEffect(() => {
    if (!enabled) return;

    if (messageIndicesKey === "") {
      seenIndicesRef.current.clear();
      setEnteringIndices((prev) => (prev.size === 0 ? prev : new Set()));
      return;
    }

    const indices = messageIndicesKey.split(",").map(Number);
    const newlySeen: number[] = [];
    for (const index of indices) {
      if (!seenIndicesRef.current.has(index)) {
        seenIndicesRef.current.add(index);
        newlySeen.push(index);
      }
    }

    if (newlySeen.length === 0) return;

    setEnteringIndices((prev) => {
      const next = new Set(prev);
      for (const index of newlySeen) next.add(index);
      return next;
    });

    const timeoutId = window.setTimeout(() => {
      setEnteringIndices((prev) => {
        const next = new Set(prev);
        for (const index of newlySeen) next.delete(index);
        return next;
      });
    }, MESSAGE_ENTER_ANIMATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [messageIndicesKey, enabled]);

  return enteringIndices;
}
