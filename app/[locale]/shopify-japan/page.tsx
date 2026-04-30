import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Globe2,
  LineChart,
  MessageSquare,
  ShoppingBag,
  Sparkles,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { getProjectBySlug } from "@/content/projects";
import { ShopifyJapanCTAButton } from "@/components/shopify-japan-cta-button";
import { Testimonials } from "@/components/testimonials";

const baseUrl = "https://ernieryan.dev";

const metadataByLocale = {
  en: {
    title: "Shopify Japan — Bilingual Shopify Help in Tokyo (EN/JP)",
    description:
      "Bilingual Shopify support for brands selling in Japan or going cross-border — setup, localization, ads, and tracking. Talk to a Tokyo-based partner.",
    keywords: [
      "Shopify Japan",
      "Shopify Japan developer",
      "bilingual Shopify Tokyo",
      "Shopify localization Japan",
      "cross-border ecommerce Japan",
      "Japanese Shopify store",
    ],
  },
  jp: {
    title: "Shopify Japan | 日本市場向けShopify構築・運用支援",
    description:
      "日本国内向け、または日本から海外向けに展開するブランド向けのバイリンガルShopify支援。構築、ローカライズ、広告、計測まで東京拠点で対応。まずはご相談ください。",
    keywords: [
      "Shopify 日本",
      "Shopify構築 東京",
      "バイリンガル Shopify",
      "Shopify ローカライズ",
      "越境EC Shopify",
      "日本市場 Shopify",
    ],
  },
} as const;

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const meta = metadataByLocale[locale];

  return {
    title: meta.title,
    description: meta.description,
    keywords: [...meta.keywords],
    alternates: {
      canonical: `${baseUrl}/${locale}/shopify-japan`,
      languages: {
        en: `${baseUrl}/en/shopify-japan`,
        ja: `${baseUrl}/jp/shopify-japan`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "jp" ? "ja_JP" : "en_US",
      alternateLocale: locale === "jp" ? "en_US" : "ja_JP",
      url: `${baseUrl}/${locale}/shopify-japan`,
      siteName: "Ernie Ryan",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: `${baseUrl}/images/ernieryan-main-photo.png`,
          width: 1200,
          height: 630,
          alt: "Ernie Ryan — Bilingual Shopify partner in Tokyo",
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

const copy = {
  en: {
    hero: {
      eyebrow: "Shopify support for the Japan market",
      titleLine1: "Shopify Japan",
      titleLine2: "without the language gap.",
      description:
        "I help ecommerce brands run Shopify in Japan or from Japan to overseas — setup, localization, copy, market readiness, and the ads and tracking layer behind it. One bilingual partner in Tokyo, instead of three handoffs.",
      primaryCta: "Get Japan Shopify Advice",
      secondaryCta: "See work examples",
      proofPills: ["Tokyo-based", "EN / JP bilingual", "Shopify build + growth"],
      proofPanel: {
        title: "Tokyo-based bilingual partner",
        body: "Shopify setup, localization, ads, tracking, and creative support for Japan-market ecommerce.",
        points: [
          "English / Japanese communication",
          "Shopify build + market readiness",
          "Ads, tracking, and creative support",
          "One partner instead of scattered handoffs",
        ],
      },
    },
    audience: {
      title: "Who this is for",
      items: [
        {
          title: "Overseas brands selling into Japan",
          body: "You want a Japanese-language store that actually reads naturally to local shoppers — not a translated version of your global site.",
        },
        {
          title: "Japanese brands going outbound",
          body: "You need an English experience that helps overseas customers buy without losing the Japanese-market store you already trust.",
        },
        {
          title: "Founders without a JP-side partner",
          body: "You don't have someone bilingual on the team to brief, review, and own the Japanese side of your Shopify and growth work.",
        },
      ],
    },
    services: {
      title: "What I cover",
      subtitle: "One workflow for Japan-market Shopify growth.",
      groups: {
        foundation: "Store foundation",
        readiness: "Market readiness",
        growth: "Growth execution",
      },
      items: [
        {
          icon: ShoppingBag,
          group: "foundation" as const,
          title: "Shopify setup & localization",
          body: "Theme setup, navigation, product taxonomy, multi-currency, geolocation routing, and a JP-first storefront experience that doesn't feel translated.",
        },
        {
          icon: MessageSquare,
          group: "foundation" as const,
          title: "EN / JP communication",
          body: "Direct bilingual communication with you, your team, suppliers, agencies, and JP-side stakeholders so requirements don't get lost in translation.",
        },
        {
          icon: Sparkles,
          group: "readiness" as const,
          title: "Product & page copy support",
          body: "Product page copy, landing pages, and brand story sections written for the Japanese market — clear pricing logic, trust cues, and supplement-/regulation-safe wording where needed.",
        },
        {
          icon: Globe2,
          group: "readiness" as const,
          title: "Market readiness review",
          body: "Pre-launch and ongoing reviews of pricing presentation, payment options, shipping clarity, JP-side trust signals, and what local shoppers expect from a serious store.",
        },
        {
          icon: LineChart,
          group: "growth" as const,
          title: "Ads, tracking & creative support",
          body: "Meta and Google Ads setup, conversion tracking via GA4 and the Shopify pixel layer, and creative direction tied to actual funnel performance — not vanity metrics.",
        },
        {
          icon: Target,
          group: "growth" as const,
          title: "Continuous improvement",
          body: "Weekly funnel reviews from homepage to checkout, small UI/UX fixes, and reporting that turns into the next decision instead of sitting in a deck.",
        },
      ],
    },
    adhoc: {
      title: "Already running a Shopify store?",
      subtitle:
        "If you don't need a full build, I also handle one-off Shopify work. Send what you need and I'll come back with scope and a fair price — no minimum project size.",
      columns: [
        {
          title: "Add or fix functionality",
          items: [
            "Install and configure Shopify apps",
            "Custom Liquid sections and blocks",
            "Cart, checkout, and product page tweaks",
            "Discount logic, bundles, and upsells",
            "Speed and Core Web Vitals fixes",
          ],
        },
        {
          title: "Design and content",
          items: [
            "New section or landing page",
            "Theme refresh or partial redesign",
            "Mobile UX cleanup",
            "Product page copy and structure",
            "JP / EN bilingual content pass",
          ],
        },
        {
          title: "Tracking, ads, and ops",
          items: [
            "GA4, Meta, and TikTok pixel setup",
            "Conversion API and consent banner",
            "Email/SMS flows (Klaviyo, Shopify Email)",
            "Shipping, tax, and payment review",
            "Store migration to Shopify",
          ],
        },
      ],
      footnote:
        "Not sure if it fits? Send the request anyway — if it's outside my lane I'll tell you straight, not pretend.",
      cta: "Ask about your Shopify task",
    },
    process: {
      title: "How it usually starts",
      steps: [
        {
          step: "01",
          title: "Project fit check",
          body: "Tell me your store, market, and goal. I review the context and reply with the clearest next step — not a generic proposal.",
        },
        {
          step: "02",
          title: "Scope & sequence",
          body: "We agree on what to build, fix, or test first. Setup work and growth work are sequenced so spend doesn't run into a leaky funnel.",
        },
        {
          step: "03",
          title: "Build, ship, review",
          body: "I deliver the work, monitor the funnel weekly, and make the next move based on what the data is actually showing.",
        },
      ],
    },
    work: {
      title: "Recent Shopify Japan work",
      subtitle:
        "Selected projects where Japan was the primary or required market.",
      viewLive: "Live site",
      viewProject: "View project details",
      seeAll: "See all projects",
    },
    trust: {
      title: "Trusted by ecommerce clients on Upwork and direct projects.",
      body: "Clients usually come to me when they need Shopify execution plus English/Japanese communication, not generic web development.",
      quoteLabel: "Upwork client",
    },
    faq: {
      title: "Common questions",
      items: [
        {
          q: "Do you only work with Japanese-language stores?",
          a: "No. The page is called Shopify Japan because Japan is involved in some way — either you're selling into Japan, you're a Japanese brand going outbound, or you need someone bilingual to bridge both sides. English-only stores with a Japan link are still a fit.",
        },
        {
          q: "Can you handle paid ads as well as the build?",
          a: "Yes. Paid ads, tracking, and creative direction are part of the same workflow. They're often paused at the start so the storefront and tracking are ready before spend ramps up.",
        },
        {
          q: "Do you redesign the whole theme or work within Shopify settings?",
          a: "Both are possible. Most projects stay within standard Shopify and theme settings to keep ownership simple. Full custom theme work is scoped separately when it's actually needed.",
        },
        {
          q: "How do we communicate day to day?",
          a: "Usually WhatsApp or email for quick approvals, with a short weekly update covering what was done, what worked, and the next move.",
        },
      ],
    },
    cta: {
      eyebrow: "Ready when you are",
      titleLine1: "Let's get your Shopify",
      titleLine2: "ready for Japan.",
      body: "Send your store, market, and the main thing you're trying to fix or build. I'll come back with the clearest next step within a couple of business days.",
      button: "Get Japan Shopify Advice",
      supporting:
        "Based in Tokyo. Supporting brands selling in Japan and going cross-border.",
    },
  },
  jp: {
    hero: {
      eyebrow: "日本市場向けのShopify支援",
      titleLine1: "日本市場のShopifyを、",
      titleLine2: "言語の壁なしで。",
      description:
        "日本国内向け、もしくは日本から海外向けに展開するECブランドのShopifyを支援します。構築、ローカライズ、コピー、市場対応、広告と計測までを、東京拠点のバイリンガルパートナーが一気通貫で対応します。",
      primaryCta: "日本向けShopifyの相談をする",
      secondaryCta: "実績を見る",
      proofPills: ["東京拠点", "日英バイリンガル", "Shopify構築＋集客"],
      proofPanel: {
        title: "東京拠点のバイリンガルパートナー",
        body: "日本市場向けECのShopify構築、ローカライズ、広告、計測、クリエイティブ支援まで対応します。",
        points: [
          "日英コミュニケーション",
          "Shopify構築＋市場対応",
          "広告・計測・クリエイティブ支援",
          "複数の外注先に分けずに相談可能",
        ],
      },
    },
    audience: {
      title: "こんな方に向いています",
      items: [
        {
          title: "日本市場に参入したい海外ブランド",
          body: "翻訳ではなく、日本のユーザーに自然に読まれる日本語ストアを必要としているブランド向けです。",
        },
        {
          title: "海外展開したい日本のブランド",
          body: "既存の日本向けストアを保ちながら、海外ユーザーが購入しやすい英語体験を整えたい場合に対応します。",
        },
        {
          title: "日本側のパートナーがいない経営者・運営者",
          body: "社内に日英対応できる担当がおらず、Shopifyや集客の日本側を任せられる相手を探している方向けです。",
        },
      ],
    },
    services: {
      title: "対応範囲",
      subtitle: "日本市場向けShopify成長支援を、ひとつの流れで対応。",
      groups: {
        foundation: "ストア基盤",
        readiness: "市場対応",
        growth: "集客・改善",
      },
      items: [
        {
          icon: ShoppingBag,
          group: "foundation" as const,
          title: "Shopify構築・ローカライズ",
          body: "テーマ設定、ナビゲーション、商品分類、多通貨、地域別の出し分け、そして翻訳臭くない日本語前提のストア体験を整えます。",
        },
        {
          icon: MessageSquare,
          group: "foundation" as const,
          title: "日英コミュニケーション",
          body: "クライアント、チーム、サプライヤー、代理店、日本側の関係者と直接日英でやり取りし、要件が翻訳の途中で抜け落ちない体制を作ります。",
        },
        {
          icon: Sparkles,
          group: "readiness" as const,
          title: "商品・ページコピー支援",
          body: "商品ページ、LP、ブランドストーリーを日本市場向けに整えます。価格訴求、信頼要素、サプリ／規制対応に配慮した言い回しまで対応可能です。",
        },
        {
          icon: Globe2,
          group: "readiness" as const,
          title: "市場対応レビュー",
          body: "公開前と運用中に、価格表記、決済手段、配送情報、日本側の信頼要素、本気のストアとして求められる要件を点検します。",
        },
        {
          icon: LineChart,
          group: "growth" as const,
          title: "広告・計測・クリエイティブ支援",
          body: "Meta／Google広告、GA4とShopifyピクセルでのCV計測、ファネル実績に基づくクリエイティブ方針までを一体で対応します。",
        },
        {
          icon: Target,
          group: "growth" as const,
          title: "継続的な改善",
          body: "ホームから決済までのファネル週次レビュー、UI/UXの小さな改善、次の判断につながる形でのレポーティングを行います。",
        },
      ],
    },
    adhoc: {
      title: "すでにShopifyストアを運営中の方へ",
      subtitle:
        "新規構築でなくても、単発のShopify作業もお請けしています。やりたいことを送ってください。スコープと適正価格をすぐにお返しします。最小ロットの制限はありません。",
      columns: [
        {
          title: "機能追加・修正",
          items: [
            "Shopifyアプリの導入・設定",
            "Liquidカスタムセクション／ブロック",
            "カート・チェックアウト・商品ページ調整",
            "割引・バンドル・アップセル設定",
            "表示速度・Core Web Vitals改善",
          ],
        },
        {
          title: "デザイン・コンテンツ",
          items: [
            "新規セクション／LP制作",
            "テーマリフレッシュ／部分リデザイン",
            "モバイルUX改善",
            "商品ページコピー・構成",
            "日英バイリンガル校正",
          ],
        },
        {
          title: "計測・広告・運用",
          items: [
            "GA4・Meta・TikTokピクセル導入",
            "Conversion API・同意バナー設定",
            "メール／SMS配信（Klaviyo、Shopify Email）",
            "配送・税・決済の見直し",
            "他プラットフォームからのShopify移行",
          ],
        },
      ],
      footnote:
        "対応範囲外の場合も、無理に引き受けず正直にお伝えします。まずは内容を送ってください。",
      cta: "Shopify作業について相談する",
    },
    process: {
      title: "進め方",
      steps: [
        {
          step: "01",
          title: "案件のフィット確認",
          body: "ストア、対象市場、目的を共有してください。汎用的な提案ではなく、次に取るべき一手として返答します。",
        },
        {
          step: "02",
          title: "スコープと順序の整理",
          body: "何を先に作る／直す／検証するかを合意します。広告がリーキーなファネルに流れ込まないよう順序を組み立てます。",
        },
        {
          step: "03",
          title: "構築・公開・改善",
          body: "実装まで対応し、ファネルを週次で確認しながら、データに基づいて次の打ち手を進めます。",
        },
      ],
    },
    work: {
      title: "日本関連のShopify実績",
      subtitle: "日本市場が前提、または必須要件だった案件を抜粋しています。",
      viewLive: "公開サイト",
      viewProject: "案件の詳細を見る",
      seeAll: "実績一覧を見る",
    },
    trust: {
      title: "Upworkや直接案件でECクライアントを支援しています。",
      body: "単なるWeb制作ではなく、Shopify実行力と日英コミュニケーションの両方が必要な場面で相談いただくことが多いです。",
      quoteLabel: "Upworkクライアント",
    },
    faq: {
      title: "よくある質問",
      items: [
        {
          q: "日本語ストアしか対応していないのですか？",
          a: "いいえ。Shopify Japan という名前は「日本に何らかの形で関係している案件」を意味します。日本市場への参入、日本ブランドの海外展開、日英の橋渡しが必要なケースのいずれでも対応します。英語のみのストアでも日本要素があれば対象です。",
        },
        {
          q: "構築だけでなく広告運用まで一括で頼めますか？",
          a: "はい。広告、計測、クリエイティブまで同じワークフローに含まれます。多くの場合、ストアと計測が整うまでは広告を抑えて進めます。",
        },
        {
          q: "テーマを丸ごとカスタムするのか、Shopify標準の範囲で進めるのか、どちらですか？",
          a: "案件によります。多くはShopify標準とテーマ設定の範囲で進め、運用しやすさを優先します。本当に必要な場合のみ、カスタムテーマを別スコープとして見積もります。",
        },
        {
          q: "日々のやり取りはどのように行いますか？",
          a: "通常はWhatsAppやメールで素早く確認し、週次で「実施したこと・効いたこと・次の一手」を短くまとめて共有します。",
        },
      ],
    },
    cta: {
      eyebrow: "ご準備ができたタイミングで",
      titleLine1: "あなたのShopifyを、",
      titleLine2: "日本仕様に整えましょう。",
      body: "ストア、対象市場、改善したい点／作りたい内容を送ってください。数営業日以内に、次に取るべき一手をお返しします。",
      button: "日本向けShopifyの相談をする",
      supporting: "東京拠点。国内向けECと越境ECの両方を支援しています。",
    },
  },
} as const;

const featuredSlugs = ["mitozz-shopify-store", "episou-shopify-store"];

export default async function ShopifyJapanPage({ params }: PageProps) {
  const { locale } = await params;
  const t = copy[locale];
  const meta = metadataByLocale[locale];

  const projects = featuredSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${baseUrl}/${locale}/shopify-japan#service`,
        name: meta.title,
        description: meta.description,
        provider: { "@id": `${baseUrl}/#person` },
        areaServed: ["Japan", "Worldwide"],
        availableLanguage: ["English", "Japanese"],
        serviceType:
          "Shopify Development and Ecommerce Growth for the Japan Market",
        url: `${baseUrl}/${locale}/shopify-japan`,
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/${locale}/shopify-japan#faq`,
        mainEntity: t.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="shopify-japan-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary py-16 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground ring-1 ring-inset ring-border">
                <span className="relative mr-2 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                {t.hero.eyebrow}
              </div>

              <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                <span className="block">{t.hero.titleLine1}</span>
                <span className="block text-primary">{t.hero.titleLine2}</span>
              </h1>

              <p className="mb-8 max-w-3xl text-lg leading-relaxed text-foreground md:text-xl">
                {t.hero.description}
              </p>

              <div className="mb-8 flex flex-wrap gap-2">
                {t.hero.proofPills.map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-foreground"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <ShopifyJapanCTAButton label={t.hero.primaryCta} locale={locale} />
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-foreground/20 px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5 sm:w-auto"
                >
                  <Link href="#work">
                    {t.hero.secondaryCta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <aside aria-label={t.hero.proofPanel.title} className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7">
                <p className="mb-2 text-lg font-bold text-foreground">
                  {t.hero.proofPanel.title}
                </p>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {t.hero.proofPanel.body}
                </p>
                <ul className="space-y-3">
                  {t.hero.proofPanel.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-foreground sm:text-4xl">
            {t.audience.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {t.audience.items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              {t.services.title}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t.services.subtitle}
            </p>
          </div>

          {(["foundation", "readiness", "growth"] as const).map((groupKey) => {
            const groupItems = t.services.items.filter(
              (i) => i.group === groupKey
            );
            return (
              <div key={groupKey} className="mb-10 last:mb-0">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.services.groups[groupKey]}
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                  {groupItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.body}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="shopify-help" className="border-t border-border bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              {t.adhoc.title}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t.adhoc.subtitle}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {t.adhoc.columns.map((col) => (
              <div
                key={col.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="mb-4 text-lg font-bold text-foreground">
                  {col.title}
                </h3>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm text-muted-foreground">
              {t.adhoc.footnote}
            </p>
            <ShopifyJapanCTAButton label={t.adhoc.cta} locale={locale} />
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-foreground sm:text-4xl">
            {t.process.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {t.process.steps.map((step) => (
              <div key={step.step} className="relative">
                <div className="mb-4 text-5xl font-black leading-none text-muted-foreground/20">
                  {step.step}
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              {t.work.title}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t.work.subtitle}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.id}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src={project.mainImage}
                    alt={project.title[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {project.client}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {project.title[locale]}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {project.shortDescription[locale]}
                  </p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <Link
                      href={`/${locale}#projects`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                    >
                      {t.work.viewProject}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground hover:underline"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t.work.viewLive}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href={`/${locale}#projects`}>
                {t.work.seeAll}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-3xl font-bold text-foreground sm:text-4xl">
            {t.faq.title}
          </h2>
          <div className="space-y-4">
            {t.faq.items.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold text-foreground">
                  <span>{item.q}</span>
                  <ChevronDown className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
            {t.trust.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
            {t.trust.body}
          </p>
        </div>
      </section>

      <Testimonials locale={locale} />

      <section className="relative overflow-hidden bg-background px-4 py-20 text-foreground lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm uppercase tracking-widest text-muted-foreground">
            {t.cta.eyebrow}
          </span>
          <h2 className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="block">{t.cta.titleLine1}</span>
            <span className="block">{t.cta.titleLine2}</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.cta.body}
          </p>
          <div className="flex justify-center">
            <ShopifyJapanCTAButton label={t.cta.button} locale={locale} />
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            {t.cta.supporting}
          </p>
        </div>
      </section>
    </>
  );
}
