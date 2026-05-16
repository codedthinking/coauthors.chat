"use client";

import { useRoomPreviewAnimation } from "./animation";
import { RoomPreviewFrame } from "./room-preview-frame";

/** Connects animation state to the static room preview frame. */
export function RoomPreview() {
  const animation = useRoomPreviewAnimation();

  return (
    <RoomPreviewFrame
      participants={animation.participants}
      messages={animation.messages}
      micActive={animation.micActive}
      scrollRef={animation.scrollRef}
      activeBubbleRef={animation.activeBubbleRef}
      reserveTranscriptHeight={!animation.prefersReducedMotion}
    />
  );
}
