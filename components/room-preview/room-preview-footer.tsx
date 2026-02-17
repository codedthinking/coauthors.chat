"use client";

export function RoomPreviewFooter() {
  return (
    <div className="flex flex-col items-center gap-0.5 bg-white px-6 pt-4 pb-4">
      <p className="font-work-sans text-center text-sm font-normal leading-5 text-[var(--footer-text,#94A3B8)]">
        Your anonymized chat text helps improve the app
      </p>
      <a
        href="mailto:support@example.com?subject=BUG%20report"
        className="bug-report-link cursor-pointer hover:opacity-80"
      >
        Bug report
      </a>
    </div>
  );
}

