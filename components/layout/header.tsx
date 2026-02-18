import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandMark } from "@/components/ui/brand-mark";

export function Header() {
  return (
    <header className="w-full h-20 border-b border-gray-200 bg-white">
      <div className="h-full px-8 flex items-center justify-between gap-2.5">
        {/* Logo */}
        <BrandMark />

        {/* Right side button */}
        <Link
          href="https://coautho.rs/"
          className="h-[42px] px-6 py-2.5 rounded-[1234px] bg-gradient-light-radial text-gray-800 font-semibold text-sm flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          Start chatting
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </header>
  );
}
