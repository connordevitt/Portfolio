import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./blog.css";

// Editorial typefaces for long-form posts, loaded through next/font so they're
// self-hosted and preloaded rather than fetched from Google at render time.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${playfair.variable} ${sourceSerif.variable}`}>
      {children}
    </div>
  );
}
