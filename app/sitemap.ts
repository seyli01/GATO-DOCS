import { page_routes } from "@/lib/routes-config";
import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export default function sitemap(): MetadataRoute.Sitemap {
  return page_routes.map((route) => ({
    url: `${BASE_URL}${route.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));
}
