import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Can't I Just Build One App? | Connor Devitt",
  description:
    "The walled gardens nobody talks about — why developers have to build the same app twice, and what it means for the future of software.",
  openGraph: {
    title: "Why Can't I Just Build One App?",
    description:
      "The walled gardens nobody talks about — why developers have to build the same app twice.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Can't I Just Build One App?",
    description:
      "The walled gardens nobody talks about — why developers have to build the same app twice.",
  },
};

export default function WalledGardensLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
