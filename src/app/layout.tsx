import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Connor Devitt - Portfolio",
  description:
    "Full-stack developer and software engineer portfolio showcasing projects and skills",
  keywords: [
    "portfolio",
    "developer",
    "software engineer",
    "web development",
    "react",
    "nextjs",
  ],
  authors: [{ name: "Connor Devitt" }],
  openGraph: {
    title: "Connor Devitt - Portfolio",
    description: "Full-stack developer and software engineer portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
