import type { Metadata } from "next";
import "../styles/globals.css";
import { LanguageGate } from "@/components/language-gate";

export const metadata: Metadata = {
  title: {
    default: "Ernie Ryan - Bilingual Web Developer & SEO Expert",
    template: "%s | Ernie Ryan",
  },
  description:
    "Bilingual web developer based in Tokyo specializing in Shopify development and multilingual SEO strategies. 7+ years experience in cross-border e-commerce.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.jpg", sizes: "32x32", type: "image/jpeg" },
    ],
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "web developer",
    "Shopify",
    "SEO",
    "bilingual",
    "Tokyo",
    "e-commerce",
    "multilingual",
    "cross-border",
  ],
  authors: [{ name: "Ernie Ryan" }],
  creator: "Ernie Ryan",
  publisher: "Ernie Ryan",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ernieryan.dev",
    title: "Ernie Ryan - Bilingual Web Developer & SEO Expert",
    description:
      "Bilingual web developer based in Tokyo specializing in Shopify development and multilingual SEO strategies. 7+ years experience in cross-border e-commerce.",
    siteName: "Ernie Ryan",
    images: [
      {
        url: "https://ernieryan.dev/images/ryan-main.jpg",
        width: 1200,
        height: 630,
        alt: "Ernie Ryan - Bilingual Web Developer & SEO Expert",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ernie Ryan - Bilingual Web Developer & SEO Expert",
    description:
      "Bilingual web developer based in Tokyo specializing in Shopify development and multilingual SEO strategies.",
    images: ["https://ernieryan.dev/images/ryan-main.jpg"],
    creator: "@ernieryan", // Add your actual Twitter handle
    site: "@ernieryan", // Add your actual Twitter handle
  },
  verification: {
    google: "your-google-verification-code", // Add your actual verification code
  },
  category: "technology",
  classification: "Web Development",
  other: {
    "theme-color": "#ec4899",
    "color-scheme": "light dark",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Ernie Ryan",
    "application-name": "Ernie Ryan",
    "msapplication-TileColor": "#ec4899",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LanguageGate />
      {children}
    </>
  );
}
