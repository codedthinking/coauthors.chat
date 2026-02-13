"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const [email, setEmail] = useState("");

  return (
    <div className="w-full min-h-[452px] px-[135px] py-[120px] flex flex-col items-center gap-[178px]">
      <div className="flex flex-col items-center gap-6 text-center">
        {/* Heading */}
        <h2 className="font-work-sans font-normal text-[36px] leading-[119%] tracking-[-0.05em] text-gray-900">
          Interested? <span className="font-zodiak italic">Start talking!</span>
        </h2>

        {/* Description */}
        <p className="font-work-sans font-normal text-sm leading-[120%] tracking-[-0.02em] text-gray-600 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus.
        </p>

        {/* Email input and button */}
        <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
          <input
            type="email"
            placeholder="Your e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[544px] h-[46px] px-6 py-3 rounded-full border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-[224px] h-[42px] px-6 py-2.5 rounded-[1234px] bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm flex items-center justify-center gap-3 hover:from-purple-600 hover:to-pink-600 transition-colors">
            Try coauthors now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
