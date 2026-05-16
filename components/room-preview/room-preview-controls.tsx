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

export function RoomPreviewControls({ micActive = false }: { micActive?: boolean }) {
  return (
    <div className="bg-white rounded-t-[20px] px-4 sm:px-5 lg:px-6 pt-6 sm:pt-4 lg:pt-4 pb-6 sm:pb-3 lg:pb-3">
      <div className="flex items-center justify-center gap-10 flex-wrap">
        {/* Mute button */}
        <label
          className={`group relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-transparent bg-[#F79C7D] text-[#2C223B] transition-transform hover:scale-[1.02] active:scale-[0.98] ${micActive ? "room-preview-mic-live" : ""}`}
        >
          <input type="checkbox" className="peer sr-only" aria-label="Toggle microphone mute" />
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
          <span
            className="pointer-events-none absolute left-1/2 top-1/2 h-[24px] w-[2px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-[#2C223B] opacity-0 shadow-[0_0_0_1px_rgba(247,156,125,0.45)] transition-opacity duration-150 peer-checked:opacity-100"
            aria-hidden="true"
          />
        </label>

        {/* Action buttons - Desktop */}
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

        {/* Mobile: first three icons + overflow menu */}
        <div className="flex lg:hidden items-center">
          {ACTIONS.slice(0, 3).map((action) => (
            <span key={action.id} className="flex items-center">
              <button
                type="button"
                className="room-action-button inline-flex items-center px-1.5 py-1.5 cursor-default"
                aria-label={action.label}
              >
                <span className="room-action-icon-box shrink-0">
                  <action.icon />
                </span>
              </button>
              <div className="room-control-separator mx-0.5" aria-hidden="true" />
            </span>
          ))}

          <details className="relative">
            <summary className="room-action-button inline-flex list-none cursor-pointer items-center px-1.5 py-1.5 [&::-webkit-details-marker]:hidden">
              <span className="room-action-icon-box shrink-0">
                <span className="block text-center text-base leading-none text-[#2C223B]">...</span>
              </span>
            </summary>
            <div className="absolute bottom-full left-1/2 z-10 mb-2 min-w-[200px] -translate-x-1/2 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
              {ACTIONS.slice(3).map((action) => (
                <button
                  key={action.id}
                  type="button"
                  className="room-action-button flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-medium hover:bg-gray-50"
                >
                  <span className="room-action-icon-box shrink-0">
                    <action.icon />
                  </span>
                  <span className="font-work-sans">{action.label}</span>
                </button>
              ))}
            </div>
          </details>
        </div>

        {/* Leave button */}
        <a
          href="https://coautho.rs/"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-[#FB923C]"
          aria-label="Leave room"
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
        </a>
      </div>
    </div>
  );
}
