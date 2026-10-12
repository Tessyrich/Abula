import type { Metadata, Viewport } from "next";
import { Fraunces, Geist } from "next/font/google";
import { business } from "@/lib/data";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://abulazone.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abula Zone Africa | Nigerian Restaurant in Woolwich, London",
    template: "%s | Abula Zone Africa",
  },
  description: business.description,
  keywords: ["abula Woolwich", "amala London", "Nigerian restaurant Woolwich", "gbegiri ewedu", "pepper soup SE18", "suya Woolwich"],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: business.name,
    title: "Abula Zone Africa | The best abula in Woolwich",
    description: business.description,
    url: siteUrl,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#faf4ea",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
