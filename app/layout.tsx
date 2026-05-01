import type { Metadata, Viewport } from "next";
import "../styles/globals.css";

const siteUrl = "https://ernieryan.dev";

export const viewport: Viewport = {
  themeColor: "#ec4899",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Ernie Ryan | Shopify Development & Performance Marketing for Ecommerce",
    template: "%s | Ernie Ryan",
  },
  description:
    "Bilingual Tokyo-based freelance partner. Shopify development, paid ads, and multilingual SEO for ecommerce brands in Japan and abroad.",
  applicationName: "Ernie Ryan",
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
    canonical: "/",
    languages: {
      en: "/en",
      ja: "/jp",
      "x-default": "/",
    },
  },
  keywords: [
    "Shopify developer Tokyo",
    "Shopify Japan",
    "bilingual Shopify expert",
    "Japan ecommerce developer",
    "paid ads management Japan",
    "Meta Ads",
    "Google Ads",
    "multilingual SEO",
    "EN JP SEO",
    "cross-border ecommerce",
    "Tokyo freelance web developer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ernie Ryan",
    title:
      "Ernie Ryan | Shopify Development & Performance Marketing for Ecommerce",
    description:
      "Bilingual Tokyo-based freelance partner. Shopify development, paid ads, and multilingual SEO for ecommerce brands in Japan and abroad.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ernie Ryan | Shopify Development & Performance Marketing for Ecommerce",
    description:
      "Bilingual ecommerce growth support across Shopify, paid ads, and multilingual SEO.",
    images: ["/images/ernieryan-main-photo.png"],
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
  appleWebApp: {
    capable: true,
    title: "Ernie Ryan",
    statusBarStyle: "default",
  },
  category: "business",
  classification: "Ecommerce Web Development and Performance Marketing",
  other: {
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
