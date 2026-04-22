import type { Metadata } from "next";
import Script from "next/script";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LocaleProvider } from "@/components/locale-provider";
import { Toaster } from "@/components/ui/sonner";
import { ErrorBoundary } from "@/components/error-boundary";
import { i18n, type Locale } from "@/i18n-config";

const baseUrl = "https://ernieryan.dev";

const localizedMetadata = {
  en: {
    title:
      "Ernie Ryan | Shopify Development, Paid Ads & SEO for Ecommerce Brands",
    description:
      "Bilingual freelance partner in Tokyo helping ecommerce brands improve Shopify storefronts, paid ads performance, and multilingual SEO across Japan and international markets.",
    keywords: [
      "Shopify developer Japan",
      "paid ads freelancer Tokyo",
      "Google Ads ecommerce",
      "Meta Ads ecommerce",
      "multilingual SEO",
      "cross-border ecommerce",
    ],
  },
  jp: {
    title: "Ernie Ryan | Shopify構築・広告運用・SEO支援",
    description:
      "東京を拠点に、Shopify構築、広告運用、日英対応SEOを通じて、日本市場と海外市場の両方でECブランドの成長を支援するバイリンガルのフリーランスパートナーです。",
    keywords: [
      "Shopify構築",
      "EC広告運用",
      "Google広告運用",
      "Meta広告運用",
      "多言語SEO",
      "越境EC支援",
      "東京 フリーランス マーケティング",
    ],
  },
} as const;

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = localizedMetadata[locale];

  return {
    title: meta.title,
    description: meta.description,
    keywords: [...meta.keywords],
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        ja: `${baseUrl}/jp`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "jp" ? "ja_JP" : "en_US",
      alternateLocale: locale === "jp" ? "en_US" : "ja_JP",
      url: `${baseUrl}/${locale}`,
      siteName: "Ernie Ryan",
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const description = localizedMetadata[locale].description;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Ernie Ryan",
        description,
        inLanguage: locale === "jp" ? "ja-JP" : "en-US",
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "Ernie Ryan",
        url: baseUrl,
        image: `${baseUrl}/images/ernieryan-main-photo.png`,
        sameAs: [
          "https://www.linkedin.com/in/ryanesmores/",
          "https://github.com/ryanesmores07",
        ],
        jobTitle:
          locale === "jp"
            ? "Shopify構築と広告運用を支援するバイリンガルパートナー"
            : "Bilingual Shopify Development and Performance Marketing Partner",
        description,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tokyo",
          addressCountry: "JP",
        },
        knowsLanguage: ["English", "Japanese"],
        knowsAbout: [
          "Shopify Development",
          "Paid Ads Management",
          "Google Ads",
          "Meta Ads",
          "Multilingual SEO",
          "Cross-border Ecommerce",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#service`,
        name: "Ernie Ryan",
        url: baseUrl,
        image: `${baseUrl}/images/ernieryan-main-photo.png`,
        description,
        founder: {
          "@id": `${baseUrl}/#person`,
        },
        sameAs: [
          "https://www.linkedin.com/in/ryanesmores/",
          "https://github.com/ryanesmores07",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tokyo",
          addressCountry: "JP",
        },
        serviceType: [
          "Shopify Development",
          "Paid Ads Management",
          "Multilingual SEO",
          "Bilingual Ecommerce Support",
        ],
        availableLanguage: ["English", "Japanese"],
      },
    ],
  };

  return (
    <html lang={locale === "jp" ? "ja" : "en"} suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only z-50 rounded bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        >
          {locale === "jp"
            ? "メインコンテンツへ移動"
            : "Skip to main content"}
        </a>
        <LocaleProvider locale={locale}>
          <ErrorBoundary locale={locale}>
            <Navigation locale={locale} />
            <main id="main-content" className="min-h-screen">
              {children}
            </main>
            <Footer locale={locale} />
            <Toaster />
          </ErrorBoundary>
        </LocaleProvider>
      </body>
    </html>
  );
}
