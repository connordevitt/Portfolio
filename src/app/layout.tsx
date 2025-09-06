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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --background: #ffffff;
              --foreground: #171717;
              --primary: #3b82f6;
              --primary-foreground: #ffffff;
              --secondary: #8b5cf6;
              --border: #e5e7eb;
            }
            @media (prefers-color-scheme: dark) {
              :root {
                --background: #0a0a0a;
                --foreground: #ededed;
                --primary: #60a5fa;
                --primary-foreground: #1e293b;
                --secondary: #a78bfa;
                --border: #374151;
              }
            }
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
