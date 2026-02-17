import Link from "next/link";

type BrandMarkProps = {
  variant?: "header" | "footer";
};

export function BrandMark({ variant = "header" }: BrandMarkProps) {
  return (
    <Link href="/" className="flex flex-col items-start">
      <span
        className={[
          "font-zodiak font-normal text-[32px] leading-[100%] tracking-[-0.02em]",
          variant === "footer" ? "text-[var(--footer-text)]" : "text-gray-800",
        ].join(" ")}
        style={{ fontFamily: "Zodiak, serif" }}
      >
        coauthors
      </span>
      <span
        className={[
          "font-work-sans font-normal text-xs leading-4 tracking-[-0.005em]",
          variant === "footer" ? "text-[var(--footer-text)]" : "text-gray-500",
        ].join(" ")}
        style={{ fontFamily: "var(--font-work-sans), system-ui, sans-serif" }}
      >
        by Bantae
      </span>
    </Link>
  );
}

