import { ArrowRight } from "lucide-react";
import { BrandMark } from "@/components/ui/brand-mark";
import { CtaLink } from "@/components/ui/cta-link";

export function Header() {
  return (
    <header className="w-full h-20 bg-transparent border-b-0">
      <div className="h-full px-8 flex items-center justify-between gap-2.5">
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
