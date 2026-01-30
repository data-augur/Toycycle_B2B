import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteUrl, defaultOgImage } from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Toycycle for Brands | Inventory Recovery & Resale",
    template: "%s | Toycycle for Brands",
  },
  description:
    "Turn B-stock, returns, and excess inventory into cash. Inventory recovery and resale solutions for toy brands—no liquidation or grey market risk.",
  keywords: [
    "toy brands",
    "inventory recovery",
    "B-stock",
    "returns management",
    "resale",
    "Toycycle",
    "B2B",
  ],
  authors: [{ name: "Toycycle", url: siteUrl }],
  creator: "Toycycle",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Toycycle for Brands",
    title: "Toycycle for Brands | Inventory Recovery & Resale",
    description:
      "Turn B-stock, returns, and excess inventory into cash. Solutions for toy brands—no liquidation or grey market risk.",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Toycycle for Brands - Inventory Recovery for Toy Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toycycle for Brands | Inventory Recovery & Resale",
    description:
      "Turn B-stock, returns, and excess inventory into cash. Solutions for toy brands.",
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/images/partners/toycycle_logo.webp",
    shortcut: "/images/partners/toycycle_logo.webp",
    apple: "/images/partners/toycycle_logo.webp",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
