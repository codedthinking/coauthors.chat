"use client";

import { ChatLayout } from "./chat-layout";
import { TranscriptInfo } from "./transcript-info";

export function FeaturesSection() {
  return (
    <section className="w-full bg-transparent pt-12 pb-8 sm:pt-1 sm:pb-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-[35px]">
        <div className="grid lg:grid-cols-2 gap-16 sm:gap-20 lg:gap-48 items-start justify-items-center lg:justify-items-start">
          {/* Left side - Chat layout */}
          <div className="ml-0 lg:ml-[49px] order-2 lg:order-1">
            <ChatLayout />
          </div>

          {/* Right side - Real-time transcript */}
          <div className="ml-0 lg:ml-[49px] order-1 lg:order-2">
            <TranscriptInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
