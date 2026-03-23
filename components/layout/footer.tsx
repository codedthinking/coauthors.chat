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
    <footer className="w-full bg-white pt-[28px] sm:pt-[44px] pb-[12px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-[12px] sm:px-[52px]">
        <p className="mb-[12px] w-full px-3 text-center text-sm text-[var(--footer-text)] sm:mb-0 sm:hidden">
          Your anonymous chat transcripts help improve the app.
        </p>

        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex shrink-0 justify-start">
            <BrandMark variant="footer" className="origin-left scale-[0.82] sm:scale-[0.9]" />
          </div>

          <p className="hidden w-full flex-1 text-center text-sm text-[var(--footer-text)] sm:block">
            Your anonymous chat transcripts help improve the app.
          </p>

          <div className="flex shrink-0 flex-wrap justify-end gap-4 text-sm text-[var(--footer-text)] sm:gap-6">
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
      </div>
    </footer>
  );
}
