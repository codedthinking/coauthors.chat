import type { RefObject } from "react";
import type { RoomPreviewDisplayedMessage } from "./animation";
import { RoomPreviewBody } from "./room-preview-body";
import { RoomPreviewControls } from "./room-preview-controls";
import { RoomPreviewFooter } from "./room-preview-footer";
import { RoomPreviewHeader } from "./room-preview-header";

const ROOM_PREVIEW_DESKTOP_SCALE = 1;

const topCardStyle = {
  background: "var(--webapp-gray-gray-0-white, #FFF)",
  boxShadow:
    "0 2.456px 4.913px -1.228px rgba(23, 23, 23, 0.10), 0 1.228px 2.456px -1.228px rgba(23, 23, 23, 0.06)",
};

const bottomCardStyle = {
  borderRadius: 20,
  background: "var(--webapp-gray-gray-0-white, #FFF)",
};

/** Static layout shell (controls, header, transcript area) — no animation logic. */
export function RoomPreviewFrame({
  participants,
  messages,
  micActive,
  scrollRef,
  activeBubbleRef,
  reserveTranscriptHeight = true,
}: {
  participants: string[];
  messages: RoomPreviewDisplayedMessage[];
  micActive: boolean;
  scrollRef: RefObject<HTMLDivElement | null>;
  activeBubbleRef: RefObject<HTMLDivElement | null>;
  reserveTranscriptHeight?: boolean;
}) {
  return (
    <div
      className="mx-auto flex w-full max-w-[900px] origin-top flex-col gap-[20px] lg:[transform:scale(var(--room-preview-desktop-scale))]"
      style={
        {
          "--room-preview-desktop-scale": ROOM_PREVIEW_DESKTOP_SCALE,
          marginRight: 21,
        } as React.CSSProperties
      }
    >
      <div className="flex flex-col overflow-visible lg:overflow-hidden" style={bottomCardStyle}>
        <RoomPreviewControls micActive={micActive} />
        <RoomPreviewFooter />
      </div>
      <div
        className="flex min-h-0 flex-col overflow-hidden rounded-[20px] sm:rounded-t-[20px] sm:rounded-b-none lg:min-h-[592px]"
        style={topCardStyle}
      >
        <RoomPreviewHeader participants={participants} />
        <RoomPreviewBody
          messages={messages}
          scrollRef={scrollRef}
          activeBubbleRef={activeBubbleRef}
          reserveFullHeight={reserveTranscriptHeight}
        />
      </div>
    </div>
  );
}
