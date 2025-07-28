import { i18n, type Locale } from "@/i18n-config";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LocaleProvider } from "@/components/locale-provider";
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
      "https://www.upwork.com/freelancers/~01...", // Add your actual Upwork profile URL
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
    image: "https://ernieryan.dev/images/ryan-main.jpg",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
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

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LocaleProvider locale={locale}>
          <Navigation locale={locale} />
          <main className="min-h-screen">{children}</main>
          <Footer locale={locale} />
        </LocaleProvider>
      </body>
    </html>
  );
}
