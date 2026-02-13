"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full h-[141px] bg-transparent border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto h-full px-[35px] py-11 flex items-center justify-between gap-3">
        {/* Left side - Logo and description */}
        <div className="flex items-start gap-4">
          <div className="flex flex-col">
            <div className="text-lg font-bold text-gray-900">coauthors</div>
            <div className="text-xs text-gray-500">by Bantae</div>
          </div>
          <p className="text-sm text-gray-600 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, erat sit amet condimentum vulputate, ex libero placerat.
          </p>
        </div>

        {/* Right side - Links */}
        <div className="flex items-center gap-6 text-sm text-gray-600">
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
