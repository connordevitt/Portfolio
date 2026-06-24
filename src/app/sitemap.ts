import type { MetadataRoute } from "next";
import { SITE_URL } from "../config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog/walled-gardens/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
