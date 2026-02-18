"use client";

import Link from "next/link";
import { BrandMark } from "@/components/ui/brand-mark";

export function Footer() {
  return (
    <footer className="w-full bg-[var(--footer-bg)] border-t border-gray-200">
      <div className="h-full flex items-center justify-between gap-2.5 min-h-[141px] mx-auto px-4 sm:px-8 py-8 sm:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-2.5">
        {/* Left side - Logo and description */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-16 text-[var(--footer-text)]">
          <BrandMark variant="footer" />
          <p className="text-sm max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, erat sit amet condimentum vulputate, ex libero placerat.
          </p>
        </div>

        {/* Right side - Links */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-[var(--footer-text)]">
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
