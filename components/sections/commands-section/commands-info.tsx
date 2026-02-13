"use client";

import { Label } from "@/components/ui/label";

export function CommandsInfo() {
  return (
    <div className="flex flex-col gap-6 items-start">
      {/* Label */}
      <Label>Label</Label>

      {/* Heading */}
      <h2 className="font-work-sans font-normal text-[36px] leading-[119%] tracking-[-0.05em] text-gray-900">
        Quick commands to process your transcript
      </h2>

      {/* Description */}
      <p className="font-work-sans font-normal text-sm leading-[120%] tracking-[-0.02em] text-gray-600 max-w-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, erat sit amet condimentum vulputate, ex libero placerat.
      </p>
    </div>
  );
}
