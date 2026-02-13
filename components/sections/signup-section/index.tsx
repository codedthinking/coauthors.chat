"use client";

import { JoinRoomForm } from "./join-room-form";
import { BetaInfo } from "./beta-info";
import { CTASection } from "./cta-section";

export function SignupSection() {
  return (
    <section className="w-full bg-transparent py-16">
      <div className="max-w-[1440px] mx-auto px-[35px]">
        <div className="grid lg:grid-cols-2 gap-48 items-start mb-16">
          {/* Left side - Join room form */}
          <JoinRoomForm />

          {/* Right side - Closed beta info */}
          <BetaInfo />
        </div>

        {/* Bottom CTA section */}
        <CTASection />
      </div>
    </section>
  );
}
