import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Baseline security headers on every response
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  // Old WordPress URLs on theflexiifeet.com -> new routes
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/what-we-offer/:path*", destination: "/offerings/:path*", permanent: true },
      { source: "/offline-classes-indore", destination: "/regular-classes", permanent: true },
      { source: "/offerings/offline-classes-indore", destination: "/offerings/regular-classes", permanent: true },
      { source: "/programs/:path*", destination: "/offerings/:path*", permanent: true },
      { source: "/programs", destination: "/offerings", permanent: true },
      { source: "/schools", destination: "/offerings/dance-ed", permanent: true },
      { source: "/weddings-sangeet", destination: "/offerings/weddings-shows", permanent: true },
      { source: "/events", destination: "/offerings/weddings-shows", permanent: true },
    ];
  },
};

export default nextConfig;
