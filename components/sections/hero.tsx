"use client";

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { RoomPreview } from "@/components/room-preview/room-preview";

export function Hero() {
  return (
    <section className="w-full bg-transparent relative overflow-hidden">
      <div className="mx-auto px-[35px] py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-48 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-6 items-start">
            {/* Launching closed beta badge */}
            <Label>Launching closed beta</Label>

            {/* Main headline */}
            <h1 className="font-work-sans font-normal text-[48px] leading-[119%] tracking-[-0.05em] text-gray-900">
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
            <p className="font-work-sans font-normal text-xl leading-[140%] tracking-[-0.05em] text-gray-700 max-w-lg">
              With coauthors.io there is no need for janky AI assistant, the conversation transcript is generated in real time.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
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
          <div className="w-full max-w-[900px] mx-auto lg:mx-0">
            <RoomPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
