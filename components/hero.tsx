"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCTAButton } from "@/components/hero-cta-button";

const ShinyText: React.FC<{ children: React.ReactNode }> = React.memo(
  ({ children }) => (
    <span className="inline-block animate-shine text-foreground shiny-text dark:text-[#b5b5b5a4]">
      {children}
    </span>
  )
);

ShinyText.displayName = "ShinyText";

interface HeroProps {
  heroData: {
    en: {
      questions: string[];
      description: string;
      ctaText: string;
    };
    jp: {
      questions: string[];
      description: string;
      ctaText: string;
    };
  };
  locale?: string;
}

const statsByLocale = {
  en: [
    { value: "7+", label: "Years in Japan" },
    { value: "EN/JP", label: "Bilingual Support" },
    { value: "Shopify", label: "Build + Growth" },
    { value: "Tokyo", label: "Based in Japan" },
  ],
  jp: [
    { value: "7+", label: "日本在住" },
    { value: "日英", label: "バイリンガル対応" },
    { value: "Shopify", label: "構築 + 集客" },
    { value: "Tokyo", label: "東京拠点" },
  ],
} as const;

export const Hero = React.memo(({ heroData, locale = "en" }: HeroProps) => {
  const currentContent =
    heroData[locale as keyof typeof heroData] || heroData.en;
  const stats = statsByLocale[locale as "en" | "jp"] || statsByLocale.en;

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-background to-secondary py-8 lg:pb-24 lg:pt-12"
    >
      <div className="absolute inset-0 -z-10 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      <div className="relative mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex w-full justify-center lg:mb-20">
          <h1 className="min-h-[4rem] max-w-full whitespace-nowrap text-center text-[clamp(2rem,14vw,24rem)] font-black leading-none tracking-tighter text-foreground lg:min-h-[6rem]">
            ERNIE RYAN
          </h1>
        </div>

        <div className="mx-auto mb-16 max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative flex items-center justify-center lg:order-2 lg:justify-end">
              <div className="relative z-10 h-80 w-80 lg:h-96 lg:w-96">
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-75 motion-safe:animate-spin will-change-transform"
                  style={{ animationDuration: "8s" }}
                  aria-hidden="true"
                >
                  <div className="m-1 h-full w-full rounded-full bg-background" />
                </div>

                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-primary/50 to-accent/50 shadow-2xl shadow-primary/25">
                  <div className="m-1 h-full w-full rounded-full bg-background" />
                </div>

                <div className="absolute inset-4 overflow-hidden rounded-full border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 shadow-2xl backdrop-blur-sm">
                  <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
                  </div>

                  <div className="relative h-full w-full">
                    <Image
                      src="/images/ernieryan-main-photo.png"
                      alt="Ernie Ryan - Shopify development and performance marketing partner"
                      width={400}
                      height={400}
                      className="h-full w-full object-cover object-[50%_22%]"
                      priority
                      sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 400px"
                      fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/20 mix-blend-overlay" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:order-1">
              {currentContent.questions.map((question, index) => (
                <div key={question} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <p className="text-lg font-semibold leading-relaxed text-foreground md:text-xl">
                    {question}
                  </p>
                </div>
              ))}

              <div className="pt-6">
                <p className="text-base leading-relaxed text-foreground md:text-lg">
                  {currentContent.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-8 sm:flex-row">
                <HeroCTAButton
                  ctaText={currentContent.ctaText}
                  locale={locale as "en" | "jp"}
                />
                <Link href="#projects">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-foreground/20 px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5 sm:w-auto"
                  >
                    {locale === "jp" ? "実績を見る" : "View my work"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={`${stat.value}-${stat.label}`} className="text-center">
              <div className="mb-2 text-3xl font-black text-primary lg:text-4xl">
                <ShinyText>{stat.value}</ShinyText>
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
