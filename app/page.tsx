import { GlobalBackground } from "@/components/layout/global-background";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { CommandsSection } from "@/components/sections/commands-section";
import { SignupSection } from "@/components/sections/signup-section";

export default function Home() {
  return (
    <>
      <GlobalBackground />
      <Header />
      <main className="min-h-screen relative z-0 flex flex-col gap-48">
        <Hero />
        <FeaturesSection />
        <CommandsSection />
        <SignupSection />
      </main>
      <Footer />
    </>
  );
}
