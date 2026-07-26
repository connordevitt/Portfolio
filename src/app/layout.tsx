import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { BASE_PATH } from "../config/basePath";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  JOB_TITLES,
  SOCIAL_LINKS,
} from "../config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Connor Devitt — Software Engineer & Security Professional",
    template: "%s | Connor Devitt",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Connor Devitt Portfolio",
  keywords: [
    "Connor Devitt",
    "Connor Devitt software engineer",
    "Connor Devitt security",
    "Connor Devitt developer",
    "Connor Devitt Florida",
    "software engineer",
    "technical support engineer",
    "security professional",
    "full-stack developer",
    "react",
    "next.js",
    "TypeScript",
    "portfolio",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: `${BASE_PATH}/favicon.ico`,
    shortcut: `${BASE_PATH}/favicon.ico`,
    apple: `${BASE_PATH}/favicon.ico`,
  },
  openGraph: {
    title: "Connor Devitt — Software Engineer & Security Professional",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${BASE_PATH}/images/ME.jpg`,
        width: 1200,
        height: 630,
        alt: "Connor Devitt — Software Engineer & Security Professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connor Devitt — Software Engineer & Security Professional",
    description: SITE_DESCRIPTION,
    creator: "@Connordevitt_2",
    images: [`${BASE_PATH}/images/ME.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

// Schema.org structured data — builds Connor Devitt's entity in Google's
// Knowledge Graph and disambiguates him from others with the same name.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/images/ME.jpg`,
  jobTitle: JOB_TITLES,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Florida",
    addressCountry: "US",
  },
  knowsAbout: [
    "Software Engineering",
    "Web Development",
    "Cybersecurity",
    "Technical Support Engineering",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "AWS",
    "SQL",
  ],
  sameAs: [
    SOCIAL_LINKS.github,
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.twitter,
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: "en-US",
  publisher: { "@id": `${SITE_URL}/#person` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
