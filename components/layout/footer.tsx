"use client";

import Link from "next/link";
import { BrandMark } from "@/components/ui/brand-mark";

export function Footer() {
  return (
    <footer className="w-full h-[141px] bg-[var(--footer-bg)] border-t border-gray-200">
      <div className="h-full px-8 flex items-center justify-between gap-2.5">
        {/* Left side - Logo and description */}
        <div className="flex items-start gap-16 text-[var(--footer-text)]">
          <BrandMark variant="footer" />
          <p className="text-sm max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, erat sit amet condimentum vulputate, ex libero placerat.
          </p>
        </div>

        {/* Right side - Links */}
        <div className="flex items-center gap-6 text-sm text-[var(--footer-text)]">
          <Link href="/privacy" className="hover:text-gray-900 transition-colors">
            Privacy policy
          </Link>
          <Link href="/legal" className="hover:text-gray-900 transition-colors">
            Legal disclaimer
          </Link>
          <Link href="/terms" className="hover:text-gray-900 transition-colors">
            Lorem ipsum
          </Link>
          <Link href="/about" className="hover:text-gray-900 transition-colors">
            Dolor sit amet
          </Link>
        </div>
      </div>
    </footer>
  );
}
