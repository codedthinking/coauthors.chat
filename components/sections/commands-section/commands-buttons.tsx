import type { ReactNode } from "react";
import {
  ActionItemsIcon,
  AddCustomIcon,
  ShareIcon,
  SummarizeIcon,
  TranscribeIcon,
} from "./icons";

type Command = {
  key: "transcribe" | "share" | "summarize" | "action-items" | "add-custom";
  label: string;
  icon: ReactNode;
};

const commands: Command[] = [
  { key: "transcribe", label: "Transcribe", icon: <TranscribeIcon /> },
  { key: "share", label: "Share", icon: <ShareIcon /> },
  { key: "summarize", label: "Summarize", icon: <SummarizeIcon /> },
  { key: "action-items", label: "Action items", icon: <ActionItemsIcon /> },
  { key: "add-custom", label: "Add custom", icon: <AddCustomIcon /> },
];

function CommandButton({
  label,
  icon,
  className,
}: {
  label: string;
  icon: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={[
        "inline-flex items-center gap-3 rounded-lg border border-[#D7E1EA] bg-white px-4 py-3",
        "shadow-[0_4px_8px_-2px_rgba(23,23,23,0.10),_0_2px_4px_-2px_rgba(23,23,23,0.06)]",
        "text-[21px] font-normal text-[#2C223B]",
        "transition-transform hover:-translate-y-[1px] active:translate-y-0",
        className ?? "",
      ].join(" ")}
    >
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#C5ADEB] via-[#FCCB85] to-[#F79C7D] text-[#2C223B]">
        {icon}
      </span>
      <span className="font-work-sans font-normal">{label}</span>
    </button>
  );
}

export function CommandsButtons() {
  return (
    <>
      {/* Mobile/tablet fallback */}
      <div className="grid grid-cols-2 gap-4 lg:hidden">
        {commands.map((c) => (
          <CommandButton key={c.key} label={c.label} icon={c.icon} />
        ))}
      </div>

      {/* Desktop layout - staggered positioning to match design */}
      <div className="relative hidden h-[200px] w-full max-w-[560px] lg:block">
        <CommandButton
          label="Transcribe"
          icon={<TranscribeIcon />}
          className="absolute left-0 top-0"
        />
        <CommandButton
          label="Share"
          icon={<ShareIcon />}
          className="absolute left-[296px]  top-0"
        />
        <CommandButton
          label="Summarize"
          icon={<SummarizeIcon />}
          className="absolute left-[96px] top-[70px]"
        />
        <CommandButton
          label="Action items"
          icon={<ActionItemsIcon />}
          className="absolute left-0 bottom-0"
        />
        <CommandButton
          label="Add custom"
          icon={<AddCustomIcon />}
          className="absolute left-[296px] bottom-4"
        />
      </div>
    </>
  );
}
