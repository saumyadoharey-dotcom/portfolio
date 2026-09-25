import type { Metadata } from "next";
import "./globals.css";
import "./archive.css";
import PortfolioMotion from "@/components/portfolio-motion";

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
      <body className="antialiased"><PortfolioMotion>{children}</PortfolioMotion></body>
    </html>
  );
}
