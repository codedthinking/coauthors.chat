import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { CommandsSection } from "@/components/sections/commands-section";
import { SignupSection } from "@/components/sections/signup-section";

export default function Home() {
  return (
    <>
      {/* Upper background only (stops after Hero) */}
      <div className="relative isolate rounded-[20px]">
        <div className="coauthors-hero-upper-bg rounded-[20px]" aria-hidden="true" />
        <Header />
        <Hero />
      </div>

      <main className="min-h-screen relative z-0 flex flex-col gap-12 sm:gap-20 lg:gap-48 pt-[180px]">
        <FeaturesSection />
        <CommandsSection />
        <SignupSection />
      </main>
      <Footer />
    </>
  );
}
