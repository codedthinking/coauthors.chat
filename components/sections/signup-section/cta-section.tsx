"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { FormInput } from "@/components/ui/form-input";

export function CTASection() {
  const [email, setEmail] = useState("");

  return (
    <div className="w-full min-h-[452px] px-[135px] py-[120px] flex flex-col items-center gap-[178px]">
      <div className="flex w-full max-w-[540px] flex-col items-center gap-6 text-center">
        {/* Heading */}
        <h2 className="font-work-sans font-normal text-[36px] leading-[119%] tracking-[-0.05em] text-gray-900">
          Interested? <span className="font-zodiak italic">Start talking!</span>
        </h2>

        {/* Description */}
        <p className="font-work-sans font-normal text-sm leading-[120%] tracking-[-0.02em] text-gray-600 max-w-[544px] text-center">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus.
        </p>

        {/* Email input and button */}
        <div className="flex w-full flex-col gap-4 items-center mt-4">
          <FormInput
            type="email"
            placeholder="Your e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Link href="https://coautho.rs/">
            <PrimaryButton type="button" className="w-auto px-8 gap-3">
              Try coauthors now
              <ArrowRight className="w-4 h-4" />
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
