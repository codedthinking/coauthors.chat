"use client";

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

export function RoomPreview() {
  return (
    <div className="w-full">
      <div className="w-full mx-auto max-w-[900px] rounded-none sm:rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden flex flex-col">
        {/* Header bar */}
        <div className="flex h-14 w-full items-center justify-between border-b border-gray-200 bg-white px-6">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-[#22C55E]" />
            <div
              className="px-2 py-1"
              style={{
                borderRadius: 1234,
                background: "var(--Light-Radial, #FDE7DA)",
              }}
            >
              <span className="text-xs font-normal uppercase leading-4 text-[#2C223B]">
                BANTAE-UI
              </span>
            </div>
            <span className="text-sm font-medium text-[#171717]">
              Miklós, Dia, Anna, Enikő
            </span>
          </div>
        </div>

        {/* Conversation body */}
        <div className="flex-1 min-h-0 overflow-y-auto bg-white px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 lg:pt-6 pb-1 sm:pb-1.5 lg:pb-2">
          {MESSAGES.map((msg, idx) => {
            if (msg.kind === "system") {
              return (
                <p key={idx} className="conversation-system-msg mt-3 sm:mt-4 lg:mt-6 mb-3 sm:mb-4 lg:mb-6">
                  {msg.text}
                </p>
              );
            }

            const bubbleClass = msg.own
              ? "conversation-bubble"
              : "conversation-bubble-other";

            return (
              <div key={idx} className="mb-2 sm:mb-3 lg:mb-4">
                <div className="mb-0.5 sm:mb-1">
                  <span className="text-sm font-semibold text-[#171717]">
                    {msg.speaker}
                  </span>
                </div>
                <div
                  className={`${bubbleClass} inline-block px-4 py-2 max-w-full sm:max-w-[560px] break-words`}
                >
                  <p className="font-work-sans text-sm leading-[140%] text-[#171717]">
                    {msg.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls row */}
        <RoomPreviewControls />

        {/* Room footer */}
        <RoomPreviewFooter />
      </div>
    </div>
  );
}

