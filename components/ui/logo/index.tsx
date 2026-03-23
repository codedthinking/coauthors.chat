import Link from "next/link";
import { BantaeMarkSvg } from "./bantae-mark";
import { CoauthorsWordmark } from "./coauthors-wordmark";

type BrandMarkProps = {
  variant?: "header" | "footer";
};

export function BrandMark({ variant = "header" }: BrandMarkProps) {
  return (
    <Link href="/" className="flex flex-col items-start">
      <span className="text-[32px] leading-[100%]">
        <CoauthorsWordmark variant={variant} />
      </span>
      <BantaeMarkSvg className="self-end mt-[2px] h-3 w-[54px] shrink-0" />
    </Link>
  );
}
