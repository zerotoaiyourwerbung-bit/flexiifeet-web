import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Name, icon and colour used when the site is added to a phone's home screen.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "FlexiiFeet",
    description: "Dance education, classes and choreography by Ayush Lokre.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ff6b1a",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
