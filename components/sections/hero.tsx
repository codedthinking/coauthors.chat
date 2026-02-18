"use client";

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { RoomPreview } from "@/components/room-preview/room-preview";

export function Hero() {
  return (
    <section className="w-full bg-transparent relative overflow-hidden">
      <div className="mx-auto px-[35px] pt-16 pb-4 sm:pt-20 sm:pb-6 lg:pt-24 lg:pb-48">
        <div className="grid lg:grid-cols-2 gap-16 sm:gap-12 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-6 items-start lg:-translate-y-[30px]">
            {/* Launching closed beta badge */}
            <Label>Launching closed beta</Label>

            {/* Main headline */}
            <h1 className="font-work-sans font-normal text-[48px] leading-[119%] tracking-[-0.05em] text-gray-900 text-center sm:text-left">
              Just join the
              <br />
              conversation and{" "}
              <span 
                className="font-zodiak italic text-[48px] leading-[119%]"
                style={{ 
                  fontFamily: 'Zodiak, serif',
                  fontWeight: 540,
                  color: '#2C223B'
                }}
              >
                talk.
              </span>
            </h1>

            {/* Description */}
            <p className="font-work-sans font-normal text-xl leading-[140%] tracking-[-0.05em] text-gray-700 max-w-lg text-center sm:text-left">
              With coauthors.io there is no need for janky AI assistant, the conversation transcript is generated in real time.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4 self-center sm:self-start">
              <Link
                href="https://coautho.rs/"
                className="px-6 py-2.5 rounded-[1234px] bg-white text-gray-900 font-semibold text-sm flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
              >
                Start chatting
              </Link>
              <Link
                href="#more-info"
                className="px-6 py-2.5 rounded-[1234px] border border-white/30 bg-white/30 backdrop-blur-[2px] text-gray-900 font-semibold text-sm flex items-center justify-center gap-3 hover:bg-white/40 transition-colors"
              >
                More information
              </Link>
            </div>
          </div>

          {/* Right side - Room preview */}
          <div className="w-full max-w-none sm:max-w-[900px] -mx-[35px] sm:mx-auto lg:mx-0 justify-self-center lg:justify-self-start mb-0 lg:translate-y-12">
            <RoomPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
