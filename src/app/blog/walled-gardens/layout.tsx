import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "../../../config/site";

export const metadata: Metadata = {
  title: "Why Can't I Just Build One App?",
  description:
    "The walled gardens nobody talks about — why developers have to build the same app twice, and what it means for the future of software.",
  alternates: {
    canonical: "/blog/walled-gardens/",
  },
  openGraph: {
    title: "Why Can't I Just Build One App?",
    description:
      "The walled gardens nobody talks about — why developers have to build the same app twice.",
    url: "/blog/walled-gardens/",
    type: "article",
    authors: [SITE_NAME],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Can't I Just Build One App?",
    description:
      "The walled gardens nobody talks about — why developers have to build the same app twice.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Why Can't I Just Build One App?",
  description:
    "The walled gardens nobody talks about — why developers have to build the same app twice, and what it means for the future of software.",
  url: `${SITE_URL}/blog/walled-gardens/`,
  datePublished: "2026-03-01",
  inLanguage: "en-US",
  author: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: SITE_NAME,
    url: SITE_URL,
  },
  publisher: { "@id": `${SITE_URL}/#person` },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/blog/walled-gardens/`,
  },
};

export default function WalledGardensLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {children}
    </>
  );
}
