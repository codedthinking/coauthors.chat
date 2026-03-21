import type { RoomPreviewChatMessage } from "@/shared/conversation";
import {
  BubbleTextRow,
  isSameSpeakerAsPrevious,
  needsBlockGapAbove,
} from "@/shared/conversation";

export function RoomPreviewBody({
  messages,
}: {
  messages: RoomPreviewChatMessage[];
}) {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto bg-white px-[135px] py-[120px]">
      {messages.map((msg, idx) => {
        if (msg.kind === "system") {
          return (
            <p
              key={idx}
              className={`conversation-system-msg mb-6 ${needsBlockGapAbove(messages, idx) ? "mt-6" : ""}`}
            >
              {msg.text}
            </p>
          );
        }

        const bubbleClass = msg.own
          ? "conversation-bubble"
          : "conversation-bubble-other";

        const nameClass =
          "text-xs sm:text-sm font-medium text-[#171717] truncate max-w-full";

        const showSpeakerName = !isSameSpeakerAsPrevious(messages, idx);
        const gapBefore = needsBlockGapAbove(messages, idx) ? "mt-6" : "";
        /* Tight stack within one speaker group (coauthors-dev: mb-1) */
        const stackSpacing = "mb-1";

        if (msg.rightAlign) {
          return (
            <div
              key={idx}
              className={`${gapBefore} ${stackSpacing} flex flex-col items-end text-right`}
            >
              {showSpeakerName && (
                <div className="mb-0.5 sm:mb-1 w-full flex justify-end min-w-0">
                  <span className={nameClass}>{msg.speaker}</span>
                </div>
              )}
              <div className="w-full flex justify-end">
                <div
                  className={`${bubbleClass} inline-block px-4 py-2 max-w-full sm:max-w-[560px] break-words`}
                >
                  <BubbleTextRow text={msg.text} showCaret={!!msg.own} />
                </div>
              </div>
            </div>
          );
        }

        return (
          <div key={idx} className={`${gapBefore} ${stackSpacing}`}>
            {showSpeakerName && (
              <div className="mb-0.5 sm:mb-1">
                <span className={nameClass}>{msg.speaker}</span>
              </div>
            )}
            <div
              className={`${bubbleClass} inline-block px-4 py-2 max-w-full sm:max-w-[560px] break-words`}
            >
              <BubbleTextRow text={msg.text} showCaret={!!msg.own} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
