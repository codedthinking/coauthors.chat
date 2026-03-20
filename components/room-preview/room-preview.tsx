type ChatMessage =
  | { kind: "system"; text: string }
  | { kind: "user"; speaker: string; text: string; own?: boolean };

const MESSAGES: ChatMessage[] = [
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
  },
  {
    kind: "user",
    speaker: "Anna",
    text: "Ut labore et dolore magn",
    own: true,
  },
];

import { RoomPreviewFooter } from "./room-preview-footer";
import { RoomPreviewControls } from "./room-preview-controls";
import { RoomPreviewHeader } from "./room-preview-header";
import { RoomPreviewBody } from "./room-preview-body";

export function RoomPreview() {
  const cardStyle = {
    borderRadius: 20,
    background: "var(--webapp-gray-gray-0-white, #FFF)",
    boxShadow:
      "0 2.456px 4.913px -1.228px rgba(23, 23, 23, 0.10), 0 1.228px 2.456px -1.228px rgba(23, 23, 23, 0.06)",
  };

  return (
    <div className="w-full mx-auto max-w-[900px] flex flex-col gap-4">

      {/* Bottom card: controls + room footer */}
      <div className="overflow-hidden flex flex-col" style={cardStyle}>
        <RoomPreviewControls />
        <RoomPreviewFooter />
      </div>
      {/* Top card: header + conversation body */}
      <div className="overflow-hidden flex flex-col" style={cardStyle}>
        <RoomPreviewHeader />
        <RoomPreviewBody messages={MESSAGES} />
      </div>

    </div>
  );
}

