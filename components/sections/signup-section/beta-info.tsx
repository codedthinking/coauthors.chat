"use client";

import { Label } from "@/components/ui/label";

export function BetaInfo() {
  return (
    <div className="w-[476px] h-[209px] flex flex-col gap-6 items-start">
      {/* Label */}
      <Label>Label</Label>

      {/* Heading */}
      <h2 className="font-work-sans font-normal text-[36px] leading-[119%] tracking-[-0.05em] text-gray-900">
        Closed beta for <span className="italic">.edu</span> e-mail addresses
      </h2>

      {/* Description */}
      <p className="font-work-sans font-normal text-sm leading-[120%] tracking-[-0.02em] text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, erat sit amet condimentum vulputate, ex libero placerat.
      </p>
    </div>
  );
}
