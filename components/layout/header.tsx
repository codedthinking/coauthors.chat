"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Header() {
  return (
    <header className="w-full h-20 border-b border-gray-200 bg-white">
      <div className="h-full px-8 flex items-center justify-between gap-2.5">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start">
          <span 
            className="font-zodiak font-normal text-[32px] leading-[100%] tracking-[-0.02em] text-gray-800"
            style={{ fontFamily: 'Zodiak, serif' }}
          >
            coauthors
          </span>
          <span 
            className="font-work-sans font-normal text-xs leading-4 tracking-[-0.005em] text-gray-500"
            style={{ fontFamily: 'var(--font-work-sans), system-ui, sans-serif' }}
          >
            by Bantae
          </span>
        </Link>

        {/* Right side button */}
        <Link
          href="/chat"
          className="h-[42px] px-6 py-2.5 rounded-[1234px] bg-gradient-light-radial text-gray-800 font-semibold text-sm flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          Start chatting
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </header>
  );
}
