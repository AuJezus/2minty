import type { Metadata } from "next";
import { Bree_Serif, Quicksand } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";

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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${breeSerif.variable} ${quicksand.variable} font-quicksand antialiased`}
      >
        <header>
          <Navbar />
        </header>

        <main>{children}</main>

        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
