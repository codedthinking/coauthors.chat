import { ArrowRight } from "lucide-react";
import { BrandMark } from "@/components/ui/logo";
import { CtaLink } from "@/components/ui/cta-link";

export function Header() {
  return (
    <header className="w-full bg-transparent border-b-0 pt-[24px]">
      <div className="min-h-20 px-4 sm:px-8 flex items-center justify-between gap-2.5">
        {/* Logo */}
        <BrandMark />

        {/* Right side button */}
        <CtaLink href="https://coautho.rs/" variant="primary">
          Start talking
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </CtaLink>
      </div>
    </header>
  );
}
