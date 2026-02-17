"use client";

import { ChatLayout } from "./chat-layout";
import { TranscriptInfo } from "./transcript-info";

export function FeaturesSection() {
  return (
    <section className="w-full bg-transparent py-16">
      <div className="max-w-[1440px] mx-auto px-[35px]">
        <div className="grid lg:grid-cols-2 gap-48 items-start">
          {/* Left side - Chat layout */}
          <div className="ml-[49px]">
            <ChatLayout />
          </div>

          {/* Right side - Real-time transcript */}
          <div className="ml-[49px]">
            <TranscriptInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
