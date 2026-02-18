"use client";

import { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMicClicked, setIsMicClicked] = useState(false);

  return (
    <div className="border-t border-gray-200 bg-white px-4 sm:px-5 lg:px-6 pt-6 sm:pt-4 lg:pt-4 pb-6 sm:pb-3 lg:pb-3">
      <div className="flex items-center justify-center gap-10 flex-wrap">
        {/* Mute button (static, unmuted) */}
        <button
          type="button"
          onClick={() => setIsMicClicked(!isMicClicked)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-transparent bg-[#F79C7D] text-[#2C223B] cursor-pointer relative"
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
          {/* Diagonal strikethrough on click */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className={`w-full h-0.5 bg-[#2C223B] transform -rotate-45 transition-transform duration-200 ${isMicClicked ? 'scale-110' : 'scale-0'}`}></div>
          </div>
        </button>

        {/* Action buttons - Desktop: always visible, Mobile: collapse to menu */}
        <div className="hidden lg:flex items-center gap-1 flex-wrap justify-center">
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

        {/* Mobile: Collapsed menu button */}
        <div className="lg:hidden relative">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-transparent bg-[#FDE7DA] text-[#2C223B] cursor-pointer"
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>

          {/* Mobile dropdown menu */}
          {isMenuOpen && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[200px] z-10">
              {ACTIONS.map((action) => (
                <button
                  key={action.id}
                  type="button"
                  className="room-action-button w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="room-action-icon-box shrink-0">
                    <action.icon />
                  </span>
                  <span className="font-work-sans">{action.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Leave button */}
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-[#FB923C] cursor-pointer"
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

