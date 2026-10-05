import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Dance Education, Weddings & Shows`, template: `%s | ${site.name}` },
  description:
    "The FlexiiFeet by choreographer Ayush Lokre: NEP-aligned DanceED school curriculum, annual day choreography, online & offline dance classes in Indore, and wedding & stage show choreography.",
  openGraph: { siteName: site.name, type: "website", images: ["/live/g1.webp"] },
  icons: { icon: "/images/favicon/favicon-32x32.png", apple: "/images/favicon/apple-touch-icon.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        {/* Template theme served as-is from /public/css (Bootstrap 4 + Jixic style.css) */}
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </head>
      <body>
        <div className="boxed_wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <ScrollTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
