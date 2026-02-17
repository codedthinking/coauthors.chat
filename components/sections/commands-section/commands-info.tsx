"use client";

import { Label } from "@/components/ui/label";

export function CommandsInfo() {
  return (
    <div className="flex flex-col gap-6 items-start">
      {/* Label */}
      <Label>Label</Label>

      {/* Heading */}
      <h2 className="text-[36px] leading-[119%] tracking-[-1.8px] text-[#2C223B]">
        <span
          className="font-zodiak italic font-normal"
        >
          Quick commands
        </span>
        {" "}
        <span className="font-work-sans font-normal">
          to <br />process your transcript
        </span>
      </h2>

      {/* Description */}
      <p className="font-work-sans font-normal text-sm leading-[120%] tracking-[-0.02em] text-gray-600 max-w-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida,
        erat sit amet condimentum vulputate, ex libero placerat.
      </p>
    </div>
  );
}
