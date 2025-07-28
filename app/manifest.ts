import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ernie Ryan - Bilingual Web Developer & SEO Expert",
    short_name: "Ernie Ryan",
    description:
      "Bilingual web developer based in Tokyo specializing in Shopify development and multilingual SEO strategies.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ec4899",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["business", "productivity", "utilities"],
    lang: "en",
    dir: "ltr",
    orientation: "portrait",
    scope: "/",
    prefer_related_applications: false,
  };
}
