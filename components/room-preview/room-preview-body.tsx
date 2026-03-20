type ChatMessage =
  | { kind: "system"; text: string }
  | { kind: "user"; speaker: string; text: string; own?: boolean };

export function RoomPreviewBody({ messages }: { messages: ChatMessage[] }) {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto bg-white px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 lg:pt-6 pb-1 sm:pb-1.5 lg:pb-2">
      {messages.map((msg, idx) => {
        if (msg.kind === "system") {
          return (
            <p
              key={idx}
              className="conversation-system-msg mt-3 sm:mt-4 lg:mt-6 mb-3 sm:mb-4 lg:mb-6"
            >
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
  );
}

