import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["", "/about", "/dance-ed", "/annual-days", "/online-classes", "/offline-classes-indore", "/weddings-shows", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `${site.url}${r}` }));
}
