import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScroll from "@/components/SmoothScroll";
import { site } from "@/lib/site";
import { Fraunces } from "next/font/google";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--ff-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Dance Education, Weddings & Shows`,
    template: `%s | ${site.name}`,
  },
  description:
    "Dance education by choreographer Ayush Lokre: DanceED for schools, online and Indore dance classes, and wedding & stage show choreography.",
  // "./" resolves to each page's own URL, so every page gets a self-referencing canonical unless it sets its own.
  alternates: { canonical: "./" },
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/live/hero-stage.webp", width: 1548, height: 870, alt: "The FlexiiFeet dancers performing on stage" }],
  },
  twitter: { card: "summary_large_image" },
};

// Structured data for search engines: who the business is, where it is and how to reach it. Only facts that appear
// on the site are listed (no opening hours or map coordinates until they are confirmed).
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#business`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/live/logo-flexiifeet.jpg`,
      image: `${site.url}/live/hero-stage.webp`,
      description: "Dance education, classes and choreography for schools, families and celebrations.",
      telephone: site.phone,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Patrakar Square 5, near SBI, Joy Builder Colony, Saket Nagar",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        postalCode: "452018",
        addressCountry: "IN",
      },
      areaServed: ["Indore", "India", "United States"],
      founder: { "@type": "Person", name: "Ayush Lokre", jobTitle: "Choreographer and dance educator", sameAs: [site.founderInstagram] },
      sameAs: [site.instagram],
    },
    { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, publisher: { "@id": `${site.url}/#business` } },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={serif.variable}>
      <head>
        {/* Template theme served as-is from /public/css (Bootstrap 4 + Jixic style.css) */}
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <div className="boxed_wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <SmoothScroll />
        <ScrollTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
