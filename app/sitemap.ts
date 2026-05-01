import { MetadataRoute } from "next";
import { i18n } from "@/i18n-config";

const baseUrl = "https://ernieryan.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const localeAlternates = {
    en: `${baseUrl}/en`,
    ja: `${baseUrl}/jp`,
  };

  const home = i18n.locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: locale === "en" ? 1 : 0.95,
    alternates: { languages: localeAlternates },
  }));

  const shopifyJapanAlternates = {
    en: `${baseUrl}/en/shopify-japan`,
    ja: `${baseUrl}/jp/shopify-japan`,
  };

  const shopifyJapan = i18n.locales.map((locale) => ({
    url: `${baseUrl}/${locale}/shopify-japan`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: locale === "en" ? 0.9 : 0.85,
    alternates: { languages: shopifyJapanAlternates },
  }));

  return [...home, ...shopifyJapan];
}
