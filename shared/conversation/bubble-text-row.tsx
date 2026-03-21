/**
 * Conversation bubble text row + “typing” caret (pseudo-shared; aligns with room / marketing preview).
 */

/** Vertical caret after text in own (highlight) bubbles. */
export function BubbleTextCaret() {
  return (
    <svg
      aria-hidden
      className="inline-block h-[calc(1.4em_-_2px)] w-[2px] shrink-0"
      viewBox="0 0 2 20"
      preserveAspectRatio="none"
      overflow="visible"
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
};

/** Text + optional caret; flex centers the bar with the line box (matches leading-[140%]). */
export function BubbleTextRow({ text, showCaret }: BubbleTextRowProps) {
  return (
    <p className="font-work-sans text-sm leading-[140%] text-[#171717]">
      <span className="inline-flex max-w-full items-center gap-[6px]">
        <span className="min-w-0 break-words">{text}</span>
        {showCaret ? <BubbleTextCaret /> : null}
      </span>
    </p>
  );
}
