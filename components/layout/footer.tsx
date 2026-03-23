import Link from "next/link";
import { BrandMark } from "@/components/ui/logo";

type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

const FOOTER_LINKS: FooterLink[] = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "https://bantae.com", label: "Bantae", external: true },
];

export function Footer() {
  return (
    <footer className="w-full bg-white pt-[44px] pb-[12px]">
      <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex shrink-0 justify-center sm:justify-start">
          <BrandMark variant="footer" />
        </div>

        <p className="order-first w-full flex-1 text-center text-sm text-[var(--footer-text)] sm:order-none">
          Your anonymous chat transcripts help improve the app.
        </p>

        <div className="flex shrink-0 flex-wrap justify-center gap-4 sm:justify-end sm:gap-6 text-sm text-[var(--footer-text)]">
          {FOOTER_LINKS.map(({ href, label, external }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-gray-900 transition-colors"
              {...(external
                ? { target: "_blank" as const, rel: "noopener noreferrer" }
                : {})}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
