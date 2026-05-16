"use client";

import type { RefObject } from "react";
import { ROOM_PREVIEW_FULL_LAYOUT_MESSAGES } from "./build-static-display";
import { TRANSCRIPT_PADDING } from "./constants";
import { AnimatedTranscriptMessages } from "./animated-transcript-messages";
import type { RoomPreviewDisplayedMessage } from "./types";

export function AnimatedTranscript({
  messages,
  scrollRef,
  activeBubbleRef,
  reserveFullHeight = true,
}: {
  messages: RoomPreviewDisplayedMessage[];
  scrollRef: RefObject<HTMLDivElement | null>;
  activeBubbleRef: RefObject<HTMLDivElement | null>;
  reserveFullHeight?: boolean;
}) {
  if (!reserveFullHeight) {
    return (
      <div
        ref={scrollRef}
        className={`flex-1 min-h-0 overflow-y-auto bg-white ${TRANSCRIPT_PADDING}`}
      >
        <AnimatedTranscriptMessages
          messages={messages}
          activeBubbleRef={activeBubbleRef}
          enableEnterAnimation={false}
        />
      </div>
    );
  }

  return (
    <div className="relative flex-1 min-h-0 bg-white">
      <div
        className={`invisible pointer-events-none select-none ${TRANSCRIPT_PADDING}`}
        aria-hidden
      >
        <AnimatedTranscriptMessages
          messages={ROOM_PREVIEW_FULL_LAYOUT_MESSAGES}
          enableEnterAnimation={false}
        />
      </div>
      <div
        ref={scrollRef}
        className={`absolute inset-0 overflow-y-auto overflow-x-hidden ${TRANSCRIPT_PADDING}`}
      >
        <AnimatedTranscriptMessages
          messages={messages}
          activeBubbleRef={activeBubbleRef}
        />
      </div>
    </div>
  );
}
