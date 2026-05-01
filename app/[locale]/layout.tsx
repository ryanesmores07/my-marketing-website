import type { Metadata } from "next";
import { Suspense } from "react";
import Script from "next/script";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LocaleProvider } from "@/components/locale-provider";
import { Toaster } from "@/components/ui/sonner";
import { ErrorBoundary } from "@/components/error-boundary";
import { GoogleAnalytics } from "@/components/google-analytics";
import { GoogleAnalyticsPageView } from "@/components/google-analytics-page-view";
import { i18n, type Locale } from "@/i18n-config";

const baseUrl = "https://ernieryan.dev";

const localizedMetadata = {
  en: {
    title:
      "Ernie Ryan | Shopify Development, Paid Ads & SEO for Ecommerce Brands",
    description:
      "Bilingual Tokyo-based freelance partner. Shopify development, paid ads, and multilingual SEO for ecommerce brands in Japan and abroad.",
  },
  jp: {
    title: "Ernie Ryan | Shopify構築・広告運用・SEO支援",
    description:
      "東京拠点のバイリンガルフリーランス。Shopify構築・広告運用・多言語SEOで、日本市場と海外向けECブランドの成長を支援します。",
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
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        ja: `${baseUrl}/jp`,
        "x-default": baseUrl,
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
      images: [
        {
          url: `${baseUrl}/images/ernieryan-main-photo.png`,
          width: 1200,
          height: 630,
          alt: "Ernie Ryan — Bilingual Shopify and ecommerce growth partner in Tokyo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/images/ernieryan-main-photo.png`],
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

  const faqByLocale = {
    en: [
      {
        q: "Can one partner handle both Shopify development and paid ads?",
        a: "Yes. I work across Shopify build, paid ads management (Meta and Google), and multilingual SEO so the storefront and traffic improve together without splitting the work across multiple teams.",
      },
      {
        q: "Do you work with brands selling into Japan or going cross-border from Japan?",
        a: "Both. I support brands launching into the Japanese market and Japanese brands selling overseas, with bilingual EN/JP delivery for store, ads, and SEO.",
      },
      {
        q: "What does bilingual ecommerce support actually cover?",
        a: "Shopify storefront work, localized content, paid ads management on Meta and Google, multilingual SEO, and weekly performance reporting — all delivered in English and Japanese.",
      },
    ],
    jp: [
      {
        q: "Shopify構築と広告運用を一人にまとめて任せられますか？",
        a: "はい。Shopify構築、Meta・Google広告運用、多言語SEOを横断して支援できるので、制作と集客を分断せずに進められます。",
      },
      {
        q: "日本国内向けと海外向け、どちらの案件にも対応していますか？",
        a: "両方に対応しています。日本市場へ参入するブランドと、日本から海外向けに展開するブランドの両方を、日英バイリンガルで支援しています。",
      },
      {
        q: "バイリンガルEC支援の具体的な範囲を教えてください。",
        a: "Shopifyストアの構築・改善、ローカライズ、Meta／Google広告運用、多言語SEO、週次レポーティングを、日本語と英語の両方で対応します。",
      },
    ],
  } as const;

  const faqEntries = faqByLocale[locale];

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
          "Shopify Japan",
          "Paid Ads Management",
          "Google Ads",
          "Meta Ads",
          "Multilingual SEO",
          "EN JP SEO",
          "Cross-border Ecommerce",
          "Tokyo Ecommerce",
          "Conversion Rate Optimization",
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
        areaServed: [
          { "@type": "Country", name: "Japan" },
          { "@type": "Place", name: "Worldwide" },
        ],
        availableLanguage: ["English", "Japanese"],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
          reviewCount: "3",
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Upwork Client" },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            reviewBody:
              "Ryan is a professional Shopify developer who adheres to agreed upon deadlines and budget without issue. Ryan delivered excellent work exactly to specification and communicated with us frequently over the course of the job. Highly recommended.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Upwork Client" },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            reviewBody:
              "Ernie Ryan is great with his communication. He responds in a timely manner and created a website that I was very pleased with. Great guy to work with.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Upwork Client" },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            reviewBody: "Absolutely amazing work, very happy with everything.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/${locale}#faq`,
        inLanguage: locale === "jp" ? "ja-JP" : "en-US",
        mainEntity: faqEntries.map((entry) => ({
          "@type": "Question",
          name: entry.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: entry.a,
          },
        })),
      },
    ],
  };

  return (
    <html lang={locale === "jp" ? "ja" : "en"} suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
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
        <Suspense fallback={null}>
          <GoogleAnalyticsPageView />
        </Suspense>
      </body>
    </html>
  );
}
