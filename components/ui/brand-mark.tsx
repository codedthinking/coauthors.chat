import Link from "next/link";
import { CoauthorsWordmark } from "@/components/ui/coauthors-wordmark";

type BrandMarkProps = {
  variant?: "header" | "footer";
};

export function BrandMark({ variant = "header" }: BrandMarkProps) {
  return (
    <Link href="/" className="flex flex-col items-start">
      <span className="text-[32px] leading-[100%]">
        <CoauthorsWordmark variant={variant} />
      </span>
      <span
        className={[
          "font-work-sans font-normal text-xs leading-4 tracking-[-0.005em] self-end -mt-[2px]",
          "text-[var(--purple-80)]",
        ].join(" ")}
        style={{ fontFamily: "var(--font-work-sans), system-ui, sans-serif" }}
      >
        by Bantae
      </span>
    </Link>
  );
}

