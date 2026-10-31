import type { Metadata } from "next";
import "./globals.css";
import "./archive.css";
import PortfolioMotion from "@/components/portfolio-motion";
import TypewriterIntro from "@/components/typewriter-intro";

export const metadata: Metadata = {
  title: "Saumya — In the making",
  description: "Film, creative strategy and design. Selected work by Saumya Doharey.",

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TypewriterIntro />
        <PortfolioMotion>{children}</PortfolioMotion>
      </body>
    </html>
  );
}
