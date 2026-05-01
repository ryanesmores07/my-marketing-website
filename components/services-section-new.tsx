import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Languages, ShoppingBag, CreditCard } from "lucide-react";
import { services } from "@/content/services";
import { ServicesCTAButton } from "@/components/services-cta-button";

const ShinyText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block animate-shine text-foreground shiny-text dark:text-[#b5b5b5a4]">
    {children}
  </span>
);

interface ServicesSectionProps {
  locale?: "en" | "jp";
}

export const ServicesSection = ({ locale = "en" }: ServicesSectionProps) => {
  const copy = {
    en: {
      badge: "Services",
      title: "How I Help Ecommerce Brands Grow",
      description:
        "I combine web development, paid media, and multilingual growth support so you can launch faster, market smarter, and improve with fewer handoffs.",
      ctaTitle: "Need a stronger store, sharper traffic, or both?",
      ctaBody:
        "Whether you are building from scratch, improving conversion paths, or trying to make paid spend work harder, I can help connect strategy, execution, and reporting in one workflow.",
      ctaImageAlt: "Abstract globe representing connected ecommerce operations",
      japanCalloutEyebrow: "Selling in Japan?",
      japanCalloutTitle: "Bilingual Shopify support for the Japan market",
      japanCalloutBody:
        "Setup, localization, ads, and tracking — for brands selling into Japan or going cross-border from Japan.",
      japanCalloutLink: "See the Shopify Japan page",
      japanCalloutProofPoints: [
        {
          icon: "languages",
          title: "Bilingual EN / JP",
          body: "Native-quality Japanese copy and EN/JP storefront from day one.",
        },
        {
          icon: "shopping-bag",
          title: "Shopify Markets",
          body: "Cross-border setup, currency, shipping, and tax handled cleanly.",
        },
        {
          icon: "credit-card",
          title: "JP payments & checkout",
          body: "Konbini, JCB, and local payment options buyers actually trust.",
        },
      ],
    },
    jp: {
      badge: "サービス",
      title: "ECブランドの成長を、構築と集客の両面から支援します",
      description:
        "Shopify構築、広告運用、多言語SEOを横断して、立ち上げから改善まで一気通貫で対応します。",
      ctaTitle: "サイト改善も集客改善も、まとめて進めたい方へ",
      ctaBody:
        "新規構築、CV導線の見直し、広告運用の立て直しまで、分断しやすい作業をひとつの流れで支援します。",
      ctaImageAlt: "連携したEC運用を表現した抽象的なグラフィック",
      japanCalloutEyebrow: "日本市場向け",
      japanCalloutTitle: "日本市場向けShopify支援はこちら",
      japanCalloutBody:
        "構築、ローカライズ、広告、計測まで。日本国内向け／日本から海外向けに展開するブランドを支援します。",
      japanCalloutLink: "Shopify Japanページを見る",
      japanCalloutProofPoints: [
        {
          icon: "languages",
          title: "日英バイリンガル対応",
          body: "ネイティブ品質の日本語コピーと、日英対応のストアフロントを最初から構築。",
        },
        {
          icon: "shopping-bag",
          title: "Shopify Markets",
          body: "越境EC、通貨、配送、税金の設定までまとめて整えます。",
        },
        {
          icon: "credit-card",
          title: "国内決済・チェックアウト",
          body: "コンビニ決済、JCB、日本のユーザーが安心して使える決済を導入。",
        },
      ],
    },
  }[locale];

  return (
    <section id="services" className="bg-background pt-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground ring-1 ring-inset ring-border">
            <span className="relative mr-2 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {copy.badge}
          </div>

          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            {copy.title}
          </h2>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground">
            {copy.description}
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="border-b border-border pb-16 last:border-b-0 last:pb-0"
            >
              <div className="grid items-start gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    <div className="text-6xl font-black leading-none text-muted-foreground/20 lg:text-8xl">
                      ({service.number})
                    </div>

                    <div className="flex-1 pt-2">
                      <h3 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
                        {service.title[locale]}
                      </h3>

                      <p className="text-lg leading-relaxed text-muted-foreground">
                        {service.description[locale]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {service.subServices.map((subService) => (
                    <div
                      key={`${service.id}-${subService.number}`}
                      className="group grid min-h-[72px] grid-cols-[2.25rem_1fr] items-center gap-4 rounded-lg border border-border p-4 transition-all duration-300"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">
                        {subService.number}
                      </div>

                      <h4 className="text-lg font-semibold leading-snug">
                        <ShinyText>{subService.title[locale]}</ShinyText>
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
            />

            <div className="relative grid items-start gap-10 lg:grid-cols-[1.1fr,1fr]">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  <span aria-hidden="true" role="img" className="text-sm leading-none">
                    {"🇯🇵"}
                  </span>
                  {copy.japanCalloutEyebrow}
                </div>

                <h3 className="mb-4 text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
                  {copy.japanCalloutTitle}
                </h3>

                <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {copy.japanCalloutBody}
                </p>

                <div className="mt-8">
                  <Link
                    href={`/${locale}/shopify-japan`}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    {copy.japanCalloutLink}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              <ul className="grid gap-4 sm:grid-cols-1">
                {copy.japanCalloutProofPoints.map((point) => {
                  const Icon =
                    point.icon === "languages"
                      ? Languages
                      : point.icon === "shopping-bag"
                        ? ShoppingBag
                        : CreditCard;
                  return (
                    <li
                      key={point.title}
                      className="flex items-start gap-4 rounded-xl border border-border/70 bg-background/50 p-4 transition-colors hover:border-primary/30"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {point.title}
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {point.body}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden pb-20 pt-10 lg:pt-32">
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg,
                  transparent 0%,
                  transparent 15%,
                  rgba(0, 0, 0, 0.3) 30%,
                  rgba(0, 0, 0, 0.8) 60%,
                  rgba(0, 0, 0, 0.95) 100%
                ),
                linear-gradient(45deg,
                  hsl(var(--background)) 0%,
                  transparent 25%,
                  transparent 75%,
                  hsl(var(--background)) 100%
                )
              `,
            }}
          />

          <div
            className="absolute left-0 right-0 top-0 h-32"
            style={{
              background: `linear-gradient(to bottom,
                hsl(var(--background)) 0%,
                hsl(var(--background) / 0.8) 20%,
                transparent 100%
              )`,
            }}
          />

          <div
            className="absolute inset-y-0 left-0 w-32"
            style={{
              background: `linear-gradient(to right,
                hsl(var(--background)) 0%,
                hsl(var(--background) / 0.6) 40%,
                transparent 100%
              )`,
            }}
          />
          <div
            className="absolute inset-y-0 right-0 w-32"
            style={{
              background: `linear-gradient(to left,
                hsl(var(--background)) 0%,
                hsl(var(--background) / 0.6) 40%,
                transparent 100%
              )`,
            }}
          />

          <div className="absolute inset-0 opacity-3">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="relative mx-auto flex min-h-[400px] max-w-6xl items-center justify-between px-4">
            <div className="max-w-2xl flex-1 space-y-8">
              <h3 className="text-4xl font-bold leading-tight text-foreground lg:text-5xl">
                {copy.ctaTitle}
              </h3>

              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                {copy.ctaBody}
              </p>

              <ServicesCTAButton locale={locale} />
            </div>

            <div className="relative ml-12 hidden shrink-0 lg:block">
              <div className="relative flex h-96 w-96 items-center justify-center">
                <div className="absolute inset-0 animate-pulse rounded-full bg-blue-500/10 blur-xl" />
                <div className="absolute inset-0 animate-pulse rounded-full bg-blue-400/5 blur-2xl" />

                <Image
                  src="/images/cta-section-image.png"
                  alt={copy.ctaImageAlt}
                  width={320}
                  height={320}
                  className="relative z-10 h-80 w-80 object-contain drop-shadow-2xl"
                  loading="lazy"
                  sizes="320px"
                />

                <div className="absolute left-1/4 top-1/4 h-2 w-2 animate-ping rounded-full bg-blue-400 opacity-60" />
                <div className="absolute right-1/4 top-3/4 h-1 w-1 animate-pulse rounded-full bg-blue-300 opacity-80" />
                <div className="absolute left-1/6 top-1/2 h-1.5 w-1.5 animate-ping rounded-full bg-blue-500 opacity-40" />
                <div className="absolute bottom-1/4 right-1/3 h-1 w-1 animate-pulse rounded-full bg-blue-400 opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
