import type { Metadata } from "next";
import { Bree_Serif, Quicksand } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";
import { NavHeader } from "../components/layout/nav-header";

const breeSerif = Bree_Serif({
  weight: "400",
  variable: "--font-bree-serif",
  subsets: ["latin", "latin-ext"],
});

const quicksand = Quicksand({
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "2minty korepetitoriai",
  description: "2minty korepetitoriai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lg:scroll-smooth">
      <body
        className={`${breeSerif.variable} ${quicksand.variable} font-quicksand antialiased`}
      >
        <NavHeader />

        <main>{children}</main>

        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
