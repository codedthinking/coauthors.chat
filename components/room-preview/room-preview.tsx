import type { RoomPreviewChatMessage } from "@/shared/conversation";
import { RoomPreviewBody } from "./room-preview-body";
import { RoomPreviewControls } from "./room-preview-controls";
import { RoomPreviewFooter } from "./room-preview-footer";
import { RoomPreviewHeader } from "./room-preview-header";

const MESSAGES: RoomPreviewChatMessage[] = [
  {
    kind: "user",
    speaker: "Miklós",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    kind: "system",
    text: "Enikő entered the chat",
  },
  {
    kind: "user",
    speaker: "Anna",
    text: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    kind: "user",
    speaker: "Anna",
    text: "Lorem ipsum",
  },
  {
    kind: "user",
    speaker: "Dia",
    text: "Adipiscing elit, sed do eiusmod",
    rightAlign: true,
  },
  {
    kind: "user",
    speaker: "Anna",
    text: "Ut labore et dolore magn",
    own: true,
  },
];

export function RoomPreview() {
  const topCardStyle = {
    borderRadius: 20,
    background: "var(--webapp-gray-gray-0-white, #FFF)",
    boxShadow:
      "0 2.456px 4.913px -1.228px rgba(23, 23, 23, 0.10), 0 1.228px 2.456px -1.228px rgba(23, 23, 23, 0.06)",
  };

  const bottomCardStyle = {
    borderRadius: 20,
    background: "var(--webapp-gray-gray-0-white, #FFF)",
  };

  return (
    <div className="w-full mx-auto max-w-[900px] flex flex-col gap-[20px]">

      {/* Bottom card: controls + room footer */}
      <div className="overflow-hidden flex flex-col" style={bottomCardStyle}>
        <RoomPreviewControls />
        <RoomPreviewFooter />
      </div>
      {/* Top card: header + conversation body */}
      <div className="overflow-hidden flex flex-col" style={topCardStyle}>
        <RoomPreviewHeader />
        <RoomPreviewBody messages={MESSAGES} />
      </div>

    </div>
  );
}

