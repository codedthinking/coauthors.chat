import { Label } from "@/components/ui/label";
import { CtaLink } from "@/components/ui/cta-link";
import { RoomPreview } from "@/components/room-preview/room-preview";

export function Hero() {
  return (
    <section className="w-full bg-transparent relative overflow-hidden">
      <div className="mx-auto px-[12px] sm:px-[52px] pt-10 sm:pt-8 lg:pt-12 pb-0 lg:pb-[8px]">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-12 lg:gap-24 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-6 items-start lg:-translate-y-[30px]">
            {/* Launching closed beta badge */}
            <Label variant="primary">Launching closed beta</Label>

            {/* Main headline */}
            <h1 className="font-work-sans font-normal text-[34px] sm:text-[48px] leading-[119%] tracking-[-0.05em] text-gray-900 text-left">
              Make ideas happen <br />
              <span className="whitespace-nowrap">
                through{" "}
                <span
                  className="font-zodiak italic text-[34px] sm:text-[48px] leading-[119%]"
                  style={{
                    fontFamily: "Zodiak, serif",
                    fontWeight: 540,
                    color: "#2C223B",
                  }}
                >
                  conversation
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="font-work-sans font-normal text-[17px] sm:text-xl leading-[140%] tracking-[-0.05em] text-gray-700 max-w-lg lg:max-w-[680px] text-left">
              The magic of discovery is best channeled through discussion,<br /> 
              <span className="font-work-sans text-[17px] sm:text-[20px] italic font-normal leading-[140%] tracking-[-0.85px] sm:tracking-[-1px] text-[var(--Webapp-Purple-Purple-80,#2C223B)]">
                coauthors
              </span>{" "}
              captures and remembers that.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-4 self-center sm:self-start">
              <CtaLink href="https://coautho.rs/" variant="white">
                Start talking
              </CtaLink>
              <CtaLink href="#more-info" variant="transparent">
                More information
              </CtaLink>
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
