import type { MetadataRoute } from "next";
import { SITE_URL } from "../config/site";
import { POSTS, postUrl } from "../content/posts";

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
    ...POSTS.map((post) => ({
      url: `${SITE_URL}${postUrl(post)}`,
      lastModified: new Date(post.publishedTime),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
