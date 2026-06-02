import type { Metadata } from "next";
import { Cinzel, Playfair_Display, EB_Garamond } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "../widgets/ScrollProgress";
import { CursorGlow } from "../widgets/CursorGlow";

// Google Fonts for Renaissance aesthetic
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Da Vinci Codex | A Renaissance Tribute",
  description: "Explore the life, art, and genius of Leonardo da Vinci through a beautifully illuminated digital manuscript. Discover his masterpieces, inventions, and enduring legacy.",
  keywords: ["Leonardo da Vinci", "Renaissance", "Art", "Inventions", "Vitruvian Man", "Mona Lisa", "History"],
  authors: [{ name: "Da Vinci Codex Team" }],
  openGraph: {
    title: "Da Vinci Codex | A Renaissance Tribute",
    description: "Explore the life, art, and genius of Leonardo da Vinci through a beautifully illuminated digital manuscript.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${playfair.variable} ${garamond.variable}`}>
      <body className={`${garamond.className} antialiased`}>
        <ScrollProgress />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}