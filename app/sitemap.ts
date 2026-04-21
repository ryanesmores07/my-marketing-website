import { MetadataRoute } from "next";
import { i18n } from "@/i18n-config";

const baseUrl = "https://ernieryan.dev";
const lastModified = new Date("2026-04-20T00:00:00+09:00");

export default function sitemap(): MetadataRoute.Sitemap {
  return i18n.locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: locale === "en" ? 1 : 0.95,
  }));
}
