import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "CoAuthors Chat",
    template: "%s | CoAuthors Chat",
  },
  description: "Modern collaboration platform for co-authors",
  keywords: ["collaboration", "co-authors", "writing", "chat"],
  authors: [{ name: "CoAuthors" }],
  creator: "CoAuthors",
  metadataBase: new URL("https://coauthors.chat"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coauthors.chat",
    siteName: "CoAuthors Chat",
    title: "CoAuthors Chat",
    description: "Modern collaboration platform for co-authors",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoAuthors Chat",
    description: "Modern collaboration platform for co-authors",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} antialiased`}
      >
        <div className="p-0 sm:p-8">{children}</div>
      </body>
    </html>
  );
}
