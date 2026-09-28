import type { MetadataRoute } from "next";
import { infoPages, site } from "@/lib/site";

// Information pages first; the root-level program URLs are the ad landing pages (still indexable).
const routes = [
  "",
  "/about",
  "/programs",
  ...infoPages.map((p) => p.href),
  "/dance-ed",
  "/annual-days",
  "/online-classes",
  "/offline-classes-indore",
  "/weddings-shows",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `${site.url}${r}` }));
}
