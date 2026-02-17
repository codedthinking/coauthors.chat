"use client";

import {
  TranscribeIcon,
  SummarizeIcon,
  ActionItemsIcon,
  ShareIcon,
  AddCustomIcon,
} from "@/components/sections/commands-section/icons";

const ACTIONS = [
  { id: "transcribe", label: "Transcribe", icon: TranscribeIcon },
  { id: "summarize", label: "Summarize", icon: SummarizeIcon },
  { id: "action-items", label: "Action items", icon: ActionItemsIcon },
  { id: "share", label: "Share", icon: ShareIcon },
  { id: "add-custom", label: "Add custom", icon: AddCustomIcon },
];

export function RoomPreviewControls() {
  return (
    <div className="border-t border-gray-200 bg-white px-6 pt-4 pb-3">
      <div className="flex items-center justify-center gap-10 flex-wrap">
        {/* Mute button (static, unmuted) */}
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-transparent bg-[#F79C7D] text-[#2C223B] cursor-default"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        </button>

        {/* Action buttons */}
        <div className="flex items-center gap-1 flex-wrap justify-center">
          {ACTIONS.map((action, index) => (
            <span key={action.id} className="flex items-center">
              <button
                type="button"
                className="room-action-button inline-flex items-center gap-1 px-1.5 py-1.5 text-sm font-medium cursor-default"
              >
                <span className="room-action-icon-box shrink-0">
                  <action.icon />
                </span>
                {action.id !== "add-custom" && (
                  <span className="shrink-0">{action.label}</span>
                )}
              </button>
              {index < ACTIONS.length - 1 && (
                <div className="room-control-separator mx-0.5" aria-hidden="true" />
              )}
            </span>
          ))}
        </div>

        {/* Leave button */}
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-[#FB923C] cursor-default"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

