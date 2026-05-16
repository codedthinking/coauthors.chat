import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

/** Shared site chrome — static-export safe (no middleware / headers). */
export default function SiteRouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
