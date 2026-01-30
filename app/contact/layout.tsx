import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Toycycle for Brands",
  description:
    "Get in touch about inventory recovery, B-stock drop ship, returns management, or resale-as-a-service. Talk to the Toycycle team.",
  openGraph: {
    title: "Contact | Toycycle for Brands",
    description:
      "Get in touch about inventory recovery and resale solutions for toy brands.",
    url: `${siteUrl}/contact`,
  },
  alternates: { canonical: `${siteUrl}/contact` },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
