"use client";

import { JoinRoomForm } from "./join-room-form";
import { BetaInfo } from "./beta-info";
import { CTASection } from "./cta-section";

export function SignupSection() {
  return (
    <section className="w-full bg-transparent pt-16 pb-4">
      <div className="max-w-[1440px] mx-auto px-[35px]">
        <div className="grid lg:grid-cols-2 gap-16 sm:gap-20 lg:gap-48 items-start mb-16 sm:mb-20 lg:mb-48 justify-items-center lg:justify-items-start">
          {/* Left side - Join room form */}
          <div className="ml-0 lg:ml-[49px] order-2 lg:order-1 w-full lg:w-auto flex justify-center lg:justify-start">
            <JoinRoomForm />
          </div>

          {/* Right side - Closed beta info */}
          <div className="ml-0 lg:ml-[49px] order-1 lg:order-2">
            <BetaInfo />
          </div>
        </div>

        {/* Bottom CTA section */}
        <CTASection />
      </div>
    </section>
  );
}
