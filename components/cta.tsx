"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";

const ContactModal = dynamic(
  () => import("./contact-modal").then((mod) => mod.ContactModal),
  { ssr: false }
);

interface CTAProps {
  locale?: "en" | "jp";
}

const CTA = ({ locale = "en" }: CTAProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const content = {
    en: {
      subtitle: "Selling in Japan or improving a bilingual ecommerce store?",
      headingLine1: "LET'S TALK",
      headingLine2: "ABOUT YOUR NEXT STEP",
      body:
        "Tell me what you are building, improving, or trying to fix. I will review your store, market, or campaign and suggest the clearest next step.",
      button: "GET PROJECT ADVICE",
      supporting: "Based in Tokyo, supporting ecommerce brands in Japan and abroad.",
      inquiries: "Direct email",
      email: "mytokyowebdev@ernieryan.dev",
    },
    jp: {
      subtitle: "日本向けECやバイリンガルShopifyの改善を相談したい方へ",
      headingLine1: "まずは",
      headingLine2: "次の一手を相談",
      body:
        "構築したい内容、改善したい課題、現在つまずいている点を教えてください。ストア、対象市場、広告や導線を確認し、次に取るべき方向性を整理します。",
      button: "相談する",
      supporting: "東京を拠点に、日本国内・海外向けのECブランドを支援しています。",
      inquiries: "メールでのご連絡",
      email: "mytokyowebdev@ernieryan.dev",
    },
  };

  const t = content[locale] || content.en;

  return (
    <section
      id="cta"
      className="relative flex min-h-[calc(70vh-100px)] flex-col items-center justify-center overflow-hidden bg-background px-4 pb-12 pt-12 text-neutral-200 md:pb-24 lg:min-h-[calc(100vh-200px)] 2xl:min-h-[60vh]"
    >
      <span
        className="mb-2 text-center text-lg tracking-widest text-neutral-600 lg:mb-4"
        aria-label={t.subtitle}
      >
        {t.subtitle}
      </span>

      <h2 className="mb-6 text-center text-6xl font-bold leading-none text-foreground md:text-8xl lg:mb-8 lg:text-7xl xl:text-8xl">
        <span className="block">{t.headingLine1}</span>
        <span className="block">{t.headingLine2}</span>
      </h2>

      <p className="mx-auto mb-8 max-w-2xl text-center text-base leading-relaxed text-muted-foreground md:text-lg">
        {t.body}
      </p>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-2 flex items-center rounded-full bg-neutral-800 px-14 py-6 text-xl font-bold shadow-lg transition hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:ring-offset-2"
        tabIndex={0}
        aria-label={t.button}
      >
        {t.button}
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>

      <div className="mt-10 flex w-full flex-col items-center gap-4 text-center text-xs text-neutral-600 md:absolute md:inset-x-4 md:bottom-4 md:mt-0 md:w-auto md:flex-row md:items-end md:justify-between md:gap-6 md:text-left">
        <span className="max-w-xs md:max-w-sm">{t.supporting}</span>

        <div className="md:text-right">
          <span className="block">{t.inquiries}</span>
          <a
            href={`mailto:${t.email}`}
            className="underline underline-offset-2 transition hover:text-neutral-200"
            tabIndex={0}
            aria-label={`Email ${t.email}`}
          >
            {t.email}
          </a>
        </div>
      </div>

      {isModalOpen && (
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          locale={locale}
        />
      )}
    </section>
  );
};

export { CTA };
