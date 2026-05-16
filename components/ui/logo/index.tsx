import Link from "next/link";
import { BantaeMarkSvg } from "./bantae-mark";
import { CoauthorsWordmark } from "./coauthors-wordmark";

type BrandMarkProps = {
  variant?: "header" | "footer";
  className?: string;
};

export function BrandMark({ variant = "header", className }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className={["flex flex-col items-start", className].filter(Boolean).join(" ")}
    >
      <span className="text-[32px] leading-[100%]">
        <CoauthorsWordmark variant={variant} />
      </span>
      <BantaeMarkSvg className="self-end mt-[2px] h-[10px] w-[45px] shrink-0 sm:h-3 sm:w-[54px]" />
    </Link>
  );
}
