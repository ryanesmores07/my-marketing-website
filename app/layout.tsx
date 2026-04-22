import type { Metadata } from "next";
import "../styles/globals.css";

const siteUrl = "https://ernieryan.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Ernie Ryan | Shopify Development & Performance Marketing for Ecommerce",
    template: "%s | Ernie Ryan",
  },
  description:
    "Bilingual freelance partner in Tokyo helping ecommerce brands improve Shopify storefronts, paid ads performance, and multilingual SEO across Japan and international markets.",
  applicationName: "Ernie Ryan",
  keywords: [
    "Shopify developer Japan",
    "Shopify development Tokyo",
    "paid ads freelancer Japan",
    "Google Ads ecommerce",
    "Meta Ads ecommerce",
    "multilingual SEO",
    "bilingual ecommerce marketing",
    "cross-border ecommerce",
    "Japan ecommerce consultant",
  ],
  authors: [{ name: "Ernie Ryan", url: siteUrl }],
  creator: "Ernie Ryan",
  publisher: "Ernie Ryan",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ernie Ryan",
    title:
      "Ernie Ryan | Shopify Development & Performance Marketing for Ecommerce",
    description:
      "Bilingual ecommerce growth support spanning Shopify development, paid ads management, and multilingual SEO for brands selling in Japan and beyond.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ernie Ryan | Shopify Development & Performance Marketing for Ecommerce",
    description:
      "Bilingual ecommerce growth support across Shopify, paid ads, and multilingual SEO.",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  category: "business",
  classification: "Ecommerce Web Development and Performance Marketing",
  other: {
    "theme-color": "#ec4899",
    "color-scheme": "light dark",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Ernie Ryan",
    "application-name": "Ernie Ryan",
    "msapplication-TileColor": "#ec4899",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
