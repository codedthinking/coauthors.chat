import Link from "next/link";
import type { ReactNode } from "react";

export type CtaLinkVariant = "primary" | "white" | "transparent";

export function CtaLink({
  href,
  variant,
  children,
  className,
}: {
  href: string;
  variant: CtaLinkVariant;
  children: ReactNode;
  className?: string;
}) {
  const commonTypeClass =
    "font-work-sans font-medium text-base leading-[22px] tracking-[-0.112px]";
  const commonBaseClass = "flex items-center justify-center text-[#171717]";

  const primaryClass = `cta-link-primary h-[46px] px-6 ${commonTypeClass} ${commonBaseClass} gap-2 sm:gap-3`;

  const heroBaseClass = `h-[46px] px-6 rounded-[1234px] ${commonTypeClass} ${commonBaseClass} gap-3`;

  const whiteClass = `${heroBaseClass} bg-white hover:opacity-90 transition-opacity`;
  const transparentClass = `${heroBaseClass} border border-white/30 bg-white/30 backdrop-blur-[2px] hover:bg-white/40 transition-colors`;

  const variantClass =
    variant === "primary"
      ? primaryClass
      : variant === "transparent"
        ? transparentClass
        : whiteClass;

  return (
    <Link href={href} className={[variantClass, className ?? ""].join(" ").trim()}>
      {children}
    </Link>
  );
}

