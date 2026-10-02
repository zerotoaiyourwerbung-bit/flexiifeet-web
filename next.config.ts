import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
