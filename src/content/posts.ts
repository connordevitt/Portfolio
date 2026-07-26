// Single source of truth for blog post metadata.
//
// Only metadata lives here — post bodies stay in their own route folder so the
// homepage and index don't pull every article's text into their bundle.
// Anything that needs to list posts (blog index, homepage section, sitemap,
// structured data) reads from POSTS.

import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "../config/site";

/**
 * A block of post content. `text` fields support two inline markers:
 * `**bold**` and `` `code` `` — see components/blog/richText.tsx.
 */
export type Block =
  | { type: "intro"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; attribution: string }
  | { type: "callout"; text: string }
  | { type: "note"; text: string }
  | { type: "code"; code: string; label?: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      width?: number;
      height?: number;
    };

export interface PostMeta {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  date: string;
  publishedTime: string;
  readTime: string;
  excerpt: string;
  description: string;
  image?: string;
}

const posts: PostMeta[] = [
  {
    slug: "splunk-botsv1",
    title: "Reconstructing a Web-Application Intrusion in Splunk",
    subtitle: "A BOTSv1 Walkthrough",
    category: "Security",
    date: "July 2026",
    publishedTime: "2026-07-25",
    readTime: "6 min read",
    excerpt:
      "Hands-on SOC practice: using SPL to trace a Joomla compromise from the first scanner request through to the web shell.",
    description:
      "Working through the Splunk BOTSv1 training dataset — using SPL to reconstruct a web-application intrusion from raw HTTP logs, from automated scanning to a brute-forced admin login and an uploaded web shell.",
    image: "/images/blog/splunk-botsv1/01-top-talkers.png",
  },
  {
    slug: "walled-gardens",
    title: "Why Can’t I Just Build One App?",
    subtitle: "The Walled Gardens Nobody Talks About",
    category: "Technology",
    date: "March 2026",
    publishedTime: "2026-03-01",
    readTime: "5 min read",
    excerpt:
      "The hidden cost of Apple and Google’s walled gardens, and why developers still have to build the same app twice.",
    description:
      "The walled gardens nobody talks about — why developers have to build the same app twice, and what it means for the future of software.",
  },
];

/** All posts, newest first. */
export const POSTS: PostMeta[] = [...posts].sort((a, b) =>
  b.publishedTime.localeCompare(a.publishedTime)
);

export function getPost(slug: string): PostMeta {
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) throw new Error(`No post registered for slug "${slug}"`);
  return post;
}

export function postUrl(post: PostMeta): string {
  // trailingSlash is enabled in next.config.ts, so canonical URLs end in "/".
  return `/blog/${post.slug}/`;
}

/** Page metadata for a post's route layout. */
export function buildPostMetadata(post: PostMeta): Metadata {
  const url = postUrl(post);

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.publishedTime,
      authors: [SITE_NAME],
      ...(post.image && { images: [post.image] }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      ...(post.image && { images: [post.image] }),
    },
  };
}

/** Schema.org BlogPosting for a post's route layout. */
export function buildArticleJsonLd(post: PostMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}${postUrl(post)}`,
    datePublished: post.publishedTime,
    dateModified: post.publishedTime,
    inLanguage: "en-US",
    ...(post.image && { image: `${SITE_URL}${post.image}` }),
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: { "@id": `${SITE_URL}/#person` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${postUrl(post)}`,
    },
  };
}
