/**
 * Conversation bubble text row + “typing” caret (pseudo-shared; aligns with room / marketing preview).
 */

/** Vertical caret inline after text — follows the last line when copy wraps. */
export function BubbleTextCaret({
  blink = false,
  className = "",
}: {
  blink?: boolean;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      className={`inline-block h-[1em] w-[2px] shrink-0 align-text-bottom ${blink ? "bubble-caret-blink" : ""} ${className}`}
      viewBox="0 0 2 20"
      preserveAspectRatio="none"
    >
      <line
        x1="1"
        y1="0"
        x2="1"
        y2="20"
        stroke="var(--Webapp-Purple-Purple-60, #4C3B65)"
        strokeWidth="0.614"
        vectorEffect="nonScalingStroke"
      />
    </svg>
  );
}

export type BubbleTextRowProps = {
  text: string;
  showCaret: boolean;
  caretBlink?: boolean;
};

/**
 * Text + optional caret in normal inline flow so the caret stays at the
 * typewriter end on every wrapped line (not vertically centered on the block).
 */
export function BubbleTextRow({ text, showCaret, caretBlink = false }: BubbleTextRowProps) {
  return (
    <p className="font-work-sans text-sm leading-[140%] text-[#171717] [overflow-wrap:anywhere]">
      {text}
      {showCaret ? <BubbleTextCaret blink={caretBlink} className="ml-[6px]" /> : null}
    </p>
  );
}
