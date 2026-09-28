import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old WordPress URLs on theflexiifeet.com -> new routes
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/schools", destination: "/programs/dance-ed", permanent: true },
      { source: "/weddings-sangeet", destination: "/programs/weddings-shows", permanent: true },
      { source: "/events", destination: "/programs/weddings-shows", permanent: true },
    ];
  },
};

export default nextConfig;
