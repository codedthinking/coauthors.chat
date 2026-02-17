"use client";

import { JoinRoomForm } from "./join-room-form";
import { BetaInfo } from "./beta-info";
import { CTASection } from "./cta-section";

export function SignupSection() {
  return (
    <section className="w-full bg-transparent pt-16 pb-4">
      <div className="max-w-[1440px] mx-auto px-[35px]">
        <div className="grid lg:grid-cols-2 gap-48 items-start mb-48">
          {/* Left side - Join room form */}
          <div className="ml-[49px]">
            <JoinRoomForm />
          </div>

          {/* Right side - Closed beta info */}
          <div className="ml-[49px]">
            <BetaInfo />
          </div>
        </div>

        {/* Bottom CTA section */}
        <CTASection />
      </div>
    </section>
  );
}
