import type { MetadataRoute } from "next";
import { infoPages, site } from "@/lib/site";

// Information pages first; the root-level program URLs are the ad landing pages (still indexable).
const routes = [
  "",
  "/about",
  "/offerings",
  ...infoPages.map((p) => p.href),
  "/offerings/annual-days",
  "/dance-ed",
  "/annual-days",
  "/online-classes",
  "/regular-classes",
  "/weddings-shows",
  "/gallery",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
  "/refund-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const uniqueRoutes = Array.from(new Set(routes));
  return uniqueRoutes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "" ? "daily" : "weekly",
    priority: r === "" ? 1 : 0.8,
  }));
}
