import { Hero } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { CommandsSection } from "@/components/sections/commands-section";
import { SignupSection } from "@/components/sections/signup-section";

export default function Home() {
  return (
    <>
      {/* Gradient extends behind the layout header (negative margin overlap). */}
      <div className="relative isolate -mt-[104px] rounded-[20px] pt-[104px]">
        <div
          className="coauthors-hero-upper-bg rounded-[20px]"
          aria-hidden="true"
        />
        <Hero />
      </div>

      <main className="relative z-0 flex min-h-screen flex-col gap-12 pt-[96px] sm:gap-20 sm:pt-[120px] lg:gap-48 lg:pt-[168px]">
        <FeaturesSection />
        <CommandsSection />
        <SignupSection />
      </main>
    </>
  );
}
