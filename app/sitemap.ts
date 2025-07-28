import { MetadataRoute } from "next";
import { i18n } from "@/i18n-config";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ernieryan.dev";

  // Base routes for each locale
  const baseRoutes = i18n.locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }));

  // Projects listing pages
  const projectListingRoutes = i18n.locales.map((locale) => ({
    url: `${baseUrl}/${locale}/projects`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Individual project pages
  const projectRoutes = projects.flatMap((project) =>
    i18n.locales.map((locale) => ({
      url: `${baseUrl}/${locale}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...baseRoutes, ...projectListingRoutes, ...projectRoutes];
}
