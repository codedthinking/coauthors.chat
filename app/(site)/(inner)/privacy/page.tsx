import type { Metadata } from "next";
import { PrivacyPolicyContent } from "@/components/legal/privacy-policy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How CoAuthors Chat collects, uses, and protects your information.",
  openGraph: {
    title: "Privacy Policy | CoAuthors Chat",
    description:
      "How CoAuthors Chat collects, uses, and protects your information.",
  },
};

export default function PrivacyPage() {
  return (
    <main className="relative z-0 pb-12 pt-8 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-16">
      <div className="mx-auto max-w-[1440px] px-[12px] sm:px-[52px]">
        <PrivacyPolicyContent />
      </div>
    </main>
  );
}
