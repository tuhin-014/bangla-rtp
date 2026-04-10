import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "BanglaRTP – Bangladeshi Community in the Triangle",
    template: "%s | BanglaRTP",
  },
  description:
    "Free community resource for Bangladeshis in Raleigh, Durham, Cary, Morrisville & Chapel Hill. Halal food, masjids, events, newcomer guide, and community directory.",
  keywords: [
    "Bangladeshi",
    "RTP",
    "Research Triangle",
    "Raleigh",
    "Durham",
    "Cary",
    "Morrisville",
    "halal",
    "masjid",
    "Bengali community",
    "TBSNC",
    "BANC",
  ],
  openGraph: {
    title: "BanglaRTP – Bangladeshi Community in the Triangle",
    description:
      "Everything a Bangladeshi family needs in the Research Triangle — halal food, masjids, events, and newcomer resources.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
