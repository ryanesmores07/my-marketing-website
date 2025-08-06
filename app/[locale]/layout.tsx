import { i18n, type Locale } from "@/i18n-config";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LocaleProvider } from "@/components/locale-provider";
import { Toaster } from "@/components/ui/sonner";
import { ErrorBoundary } from "@/components/error-boundary";
import type { Metadata } from "next";
import Script from "next/script";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const baseUrl = "https://ernieryan.dev";

  return {
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        ja: `${baseUrl}/jp`,
      },
    },
    // Add hreflang tags for better multilingual SEO
    other: {
      "hreflang-en": `${baseUrl}/en`,
      "hreflang-ja": `${baseUrl}/jp`,
      "hreflang-x-default": `${baseUrl}/en`,
    },
    openGraph: {
      locale: locale === "jp" ? "ja_JP" : "en_US",
      alternateLocale: locale === "jp" ? "en_US" : "ja_JP",
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ernie Ryan",
    jobTitle: "Bilingual Web Developer & SEO Expert",
    url: "https://ernieryan.dev",
    sameAs: [
      "https://www.linkedin.com/in/ryanesmores/",
      "https://github.com/ryanesmores07",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tokyo",
      addressCountry: "JP",
    },
    knowsLanguage: ["en", "ja"],
    description:
      locale === "jp"
        ? "東京を拠点にShopifyと多言語SEOを専門とするバイリンガルのフリーランスWebデベロッパー"
        : "Bilingual web developer based in Tokyo specializing in Shopify and multilingual SEO strategies",
    image: "https://ernieryan.dev/images/ernieryan-main-photo.jpg",
    worksFor: {
      "@type": "Organization",
      name: "Ernie Ryan Web Development",
    },
    knowsAbout: [
      "Shopify Development",
      "Multilingual SEO",
      "E-commerce Strategy",
      "Cross-border Commerce",
      "Web Design",
      "User Experience",
    ],
    availableLanguage: ["English", "Japanese"],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ernie Ryan Web Development",
    url: "https://ernieryan.dev",
    logo: "https://ernieryan.dev/images/ernieryan-main-photo.jpg",
    sameAs: [
      "https://www.linkedin.com/in/ryanesmores/",
      "https://github.com/ryanesmores07",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tokyo",
      addressCountry: "JP",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Japanese"],
    },
    description:
      locale === "jp"
        ? "東京を拠点にShopifyと多言語SEOを専門とするWeb開発サービス"
        : "Web development services specializing in Shopify and multilingual SEO based in Tokyo",
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="organization-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body>
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded z-50"
        >
          {locale === "jp"
            ? "メインコンテンツにスキップ"
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
