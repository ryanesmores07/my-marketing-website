export interface ProjectScreenshot {
  id: string;
  image: string;
  subtitle: {
    en: string;
    jp: string;
  };
  description: {
    en: string;
    jp: string;
  };
}

export interface ProjectProofStat {
  value: string;
  label: {
    en: string;
    jp: string;
  };
  note: {
    en: string;
    jp: string;
  };
}

export interface Project {
  id: string;
  slug: string;
  client: string;
  title: {
    en: string;
    jp: string;
  };
  shortDescription: {
    en: string;
    jp: string;
  };
  description: {
    en: string;
    jp: string;
  };
  mainImage: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  featuredRank?: number;
  completedAt: string;
  primaryMetric?: ProjectProofStat;
  proofStats?: ProjectProofStat[];
  screenshots: ProjectScreenshot[];
  features: {
    en: string[];
    jp: string[];
  };
  challenges: {
    en: string;
    jp: string;
  };
  solution: {
    en: string;
    jp: string;
  };
  results: {
    en: string[];
    jp: string[];
  };
}

export const projects: Project[] = [
  {
    id: "episou-paid-ads",
    client: "Episou",
    slug: "episou-paid-ads-management",
    title: {
      en: "Episou JP Paid Ads Management",
      jp: "Episou JP 広告運用",
    },
    shortDescription: {
      en: "Paid media support for Episou JP across Meta Ads and Google Ads, focused on conversion efficiency, funnel quality, and mobile-first performance.",
      jp: "Episou JP向けに、Meta広告とGoogle広告を横断しながら、CV効率、ファネルの質、モバイル前提の改善に取り組んだ広告運用案件です。",
    },
    description: {
      en: "Episou needed a paid media setup that could connect creative testing, search intent, weekly reporting, and conversion-focused optimization without wasting budget. I supported the account across Meta Ads and Google Ads, translated performance data into action, and focused spend on the parts of the funnel that were producing the clearest purchase signals. The strongest return came from Meta mid-funnel and bottom-funnel campaigns, while Google Search added efficient, intent-rich traffic that supported demand already building around the brand.",
      jp: "Episouでは、クリエイティブ検証、検索意図、週次レポート、CV改善を分断せずに回せる広告運用体制が必要でした。Meta広告とGoogle広告の両方を見ながら、数字を次の打ち手に落とし込み、購入につながるシグナルが強いファネルに予算を寄せていきました。成果が特に明確だったのはMetaのMOFとBOFで、Google Searchは意図の強い流入を効率よく補完する役割を果たしました。",
    },
    mainImage: "/project-images/episou-paid-ads/hero.svg",
    category: "paid media",
    technologies: [
      "Meta Ads",
      "Google Ads",
      "Performance Reporting",
      "Creative Testing",
      "GA4",
    ],
    featured: true,
    featuredRank: 1,
    completedAt: "2026-04-20",
    proofStats: [
      {
        value: "JPY 353,135",
        label: {
          en: "combined Meta + Google spend",
          jp: "Meta + Google 合計広告費",
        },
        note: {
          en: "Month 2, Apr 10-19, 2026",
          jp: "2026年4月10日〜19日（Month 2）",
        },
      },
      {
        value: "150",
        label: {
          en: "Google Search clicks",
          jp: "Google Search クリック数",
        },
        note: {
          en: "Average CPC approx. JPY 193",
          jp: "平均CPC 約193円",
        },
      },
      {
        value: "76%",
        label: {
          en: "mobile traffic share",
          jp: "モバイル流入比率",
        },
        note: {
          en: "The landing experience needed to stay mobile-first",
          jp: "遷移先体験はモバイル前提で考える必要がありました",
        },
      },
      {
        value: "61 / 29",
        label: {
          en: "trial add-to-carts / checkouts",
          jp: "テスト期間のATC / Checkout",
        },
        note: {
          en: "Lower-funnel movement was already visible before Month 2 optimization",
          jp: "Month 2の最適化前から下層ファネルの動きが見えていました",
        },
      },
    ],
    screenshots: [
      {
        id: "1",
        image: "/project-images/episou-paid-ads/spend-channel-breakdown-v2.svg",
        subtitle: {
          en: "Spend breakdown by channel",
          jp: "媒体別の広告費配分",
        },
        description: {
          en: "This view shows how budget was distributed across Instagram boosts, Meta sales campaigns, and Google Search during the first 10 days of Month 2.",
          jp: "Month 2の最初の10日間で、Instagramブースト、Metaのセールスキャンペーン、Google Searchにどう予算を配分していたかを整理した図です。",
        },
      },
      {
        id: "2",
        image: "/project-images/episou-paid-ads/funnel-performance.svg",
        subtitle: {
          en: "Funnel performance snapshot",
          jp: "ファネル別の成果整理",
        },
        description: {
          en: "The clearest purchase signals came from mid-funnel and bottom-funnel campaigns, while top-funnel activity kept supporting future demand.",
          jp: "購入シグナルが最も明確だったのはMOFとBOFで、TOFは将来の需要形成を支える役割を担っていました。",
        },
      },
      {
        id: "3",
        image: "/project-images/episou-paid-ads/search-device-insights-v2.svg",
        subtitle: {
          en: "Search intent and device mix",
          jp: "検索意図とデバイス比率",
        },
        description: {
          en: "Google Search remained efficient, and device data made it clear that the post-click experience had to stay mobile-first.",
          jp: "Google Searchは効率を維持しており、デバイス比率からも遷移後の体験をモバイル前提で整える必要があることが分かりました。",
        },
      },
    ],
    features: {
      en: [
        "Meta Ads and Google Ads support under one operating view",
        "Creative testing tied to actual funnel performance",
        "Weekly reporting turned into budget and campaign decisions",
        "Search keyword insights used to strengthen commercial intent",
        "Mobile-first review based on real traffic behavior",
        "Evidence-based optimization instead of vanity reporting",
      ],
      jp: [
        "Meta広告とGoogle広告を横断した一体運用",
        "ファネル実績とつながったクリエイティブ検証",
        "週次レポートをもとにした予算・配信判断",
        "検索キーワードから商談意図を補強",
        "実際の流入データに基づくモバイル前提の改善",
        "見栄えではなく根拠を重視した最適化",
      ],
    },
    challenges: {
      en: "The account needed stronger structure so budget could move toward the parts of the funnel actually producing efficient outcomes instead of being spread too broadly across awareness activity.",
      jp: "認知寄りの配信に広く予算を散らすのではなく、実際に効率よく成果が出ているファネルへ寄せていける運用体制が必要でした。",
    },
    solution: {
      en: "I used weekly reporting, funnel-level interpretation, and channel-by-channel comparisons to identify where the account was efficient, where spend was leaking, and what should be protected or rebalanced next.",
      jp: "週次レポート、ファネル単位の解釈、媒体別比較を組み合わせて、効率が出ている箇所、無駄が出ている箇所、次に守るべき予算と見直すべき配信を整理しました。",
    },
    results: {
      en: [
        "6 confirmed purchases during the first 10 days of Month 2",
        "Meta MOF and BOF returned ROAS 3.42 and 3.80 respectively",
        "Google Search delivered 150 clicks at an efficient approx. JPY 193 CPC",
        "Mobile represented 76% of total clicks",
      ],
      jp: [
        "Month 2の最初の10日間で購入6件を確認",
        "MetaのMOF / BOFでROAS 3.42 / 3.80を記録",
        "Google Searchで150クリック、平均CPCは約193円",
        "全クリックの76%がモバイル経由でした",
      ],
    },
  },
  {
    id: "episou-shopify-store",
    client: "Episou",
    slug: "episou-shopify-store",
    title: {
      en: "Episou Shopify Store",
      jp: "Episou Shopifyストア構築",
    },
    shortDescription: {
      en: "A bilingual, location-aware Shopify storefront built so Episou could serve Japan and overseas customers from one store.",
      jp: "日本向けと海外向けの両方に対応できるよう、ひとつのShopifyストアで運用できる体制を整えた案件です。",
    },
    description: {
      en: "Episou needed one ecommerce storefront that could support both Japanese and international customers without the operational burden of managing separate stores. I built a Shopify setup with geolocation-aware routing, localized content, and multi-currency support so the brand could present the right buying context while keeping operations simpler behind the scenes.",
      jp: "Episouでは、日本向けと海外向けでストアを分けずに運用しながら、それぞれに合った購入体験を届ける必要がありました。そこで、位置情報に応じた出し分け、ローカライズされたコンテンツ、多通貨対応を組み合わせ、フロントでは自然に見えつつ、運用側は複雑になりすぎないShopify構成を整えました。",
    },
    mainImage: "/project-images/episou/suitcase-project-hero-image.png",
    category: "ecommerce",
    technologies: [
      "Shopify",
      "Geolocation",
      "Multi-currency",
      "Localization",
    ],
    liveUrl: "https://www.episou.com/",
    featured: true,
    featuredRank: 2,
    completedAt: "2025-05-15",
    screenshots: [
      {
        id: "1",
        image: "/project-images/episou/product-detail-page.png",
        subtitle: {
          en: "Localized product page",
          jp: "ローカライズした商品ページ",
        },
        description: {
          en: "Product messaging and purchase context were adjusted for local shoppers without splitting the store into separate builds.",
          jp: "ストアを分けずに、地域ごとの見せ方や購入文脈を商品ページ上で自然に調整しました。",
        },
      },
      {
        id: "2",
        image: "/project-images/episou/brand-page.png",
        subtitle: {
          en: "Brand story page",
          jp: "ブランドストーリーページ",
        },
        description: {
          en: "The brand page helped explain the product line clearly while supporting trust for first-time visitors.",
          jp: "初回訪問でもブランド背景が伝わるよう、世界観と情報整理のバランスを意識して設計しました。",
        },
      },
      {
        id: "3",
        image: "/project-images/episou/product-list-page.png",
        subtitle: {
          en: "Product listing page",
          jp: "商品一覧ページ",
        },
        description: {
          en: "Browsing was designed to stay clear and easy across multiple product types and regions.",
          jp: "複数の商材や地域にまたがっても、商品を迷わず探せる一覧導線を意識しました。",
        },
      },
    ],
    features: {
      en: [
        "Single-store operation for JP and overseas customers",
        "Localization-aware content structure",
        "Geolocation-based experience adjustments",
        "Multi-currency purchase support",
        "Cleaner brand and product storytelling",
        "Operationally simpler Shopify setup",
      ],
      jp: [
        "日本向け・海外向けを一元運用できる設計",
        "ローカライズしやすいコンテンツ構成",
        "地域に応じた見せ方の切り替え",
        "多通貨での購入サポート",
        "ブランドと商品情報の整理",
        "運用負荷を抑えたShopify構成",
      ],
    },
    challenges: {
      en: "The brand needed to support customers in different markets without taking on the cost and complexity of running multiple Shopify stores.",
      jp: "複数市場に対応しながら、ストアを複数持つことによる運用負荷やコストは避けたいという前提がありました。",
    },
    solution: {
      en: "I designed a single Shopify architecture that handled localization, region-aware messaging, and purchasing context in one storefront.",
      jp: "ひとつのShopifyストアの中で、地域別の見せ方、言語、購入文脈を整理できる構成にしました。",
    },
    results: {
      en: [
        "Reduced operational complexity",
        "Created a clearer buying experience across regions",
        "Built a stronger foundation for cross-border ecommerce",
      ],
      jp: [
        "運用の複雑さを抑えられた",
        "地域ごとに分かりやすい購入体験を整えられた",
        "越境ECを進めやすい土台を作れた",
      ],
    },
  },
  {
    id: "mitozz-shopify-store",
    client: "Mitozz Japan",
    slug: "mitozz-shopify-store",
    title: {
      en: "Mitozz Japan Shopify Store",
      jp: "Mitozz Japan Shopifyストア",
    },
    shortDescription: {
      en: "A Japanese-language Shopify storefront for a premium mitochondrial supplement, designed around brand story, scientific clarity, and subscription conversion.",
      jp: "ミトコンドリア系プレミアムサプリ向けに、ブランドストーリー、科学的な分かりやすさ、定期購入への導線を意識して構築した日本語Shopifyストアです。",
    },
    description: {
      en: "Mitozz needed a storefront that felt premium, explained the science behind the product without overwhelming first-time visitors, and made the subscription option the natural path to purchase. I built the Shopify store end-to-end, structured the brand story and science education sections, set up the product page with subscribe-and-save, and shaped a content hub to support organic discovery and ongoing customer education.",
      jp: "Mitozzでは、プレミアム感を保ちながら、科学的な背景を初めて訪れた人にも分かりやすく伝え、定期購入を自然な購入導線として機能させるストアが必要でした。Shopifyストアを一から構築し、ブランドストーリーとサイエンス解説のセクションを設計、商品ページに定期購入オプションを組み込み、SEOと継続的な顧客教育を支えるブログ／コンテンツハブを整えました。",
    },
    mainImage: "/project-images/mitozz-shopify-store/brand-story-hero.png",
    category: "ecommerce",
    technologies: [
      "Shopify",
      "Subscriptions",
      "Localization",
      "Content Strategy",
      "SEO",
    ],
    liveUrl: "https://mitozzjp.myshopify.com/",
    featured: true,
    featuredRank: 3,
    completedAt: "2026-03-01",
    screenshots: [
      {
        id: "1",
        image: "/project-images/mitozz-shopify-store/product-detail.png",
        subtitle: {
          en: "Product page with subscribe-and-save",
          jp: "定期購入オプション付き商品ページ",
        },
        description: {
          en: "The product page was structured around clear pricing, benefit bullets, and a one-time vs. subscribe-and-save choice that nudges toward retention from the first purchase.",
          jp: "価格、ベネフィット、単品購入と定期購入の選択肢を整理し、初回購入の段階から継続利用につながりやすい商品ページにしました。",
        },
      },
      {
        id: "2",
        image: "/project-images/mitozz-shopify-store/brand-story-hero.png",
        subtitle: {
          en: "Brand story page",
          jp: "ブランドストーリーページ",
        },
        description: {
          en: "The About section sets the tone for the brand with editorial photography and a calm, premium layout that supports trust before the science explanation.",
          jp: "編集的なビジュアルと落ち着いたレイアウトで、サイエンス解説に入る前にブランドへの信頼感を作るAboutセクションです。",
        },
      },
      {
        id: "3",
        image: "/project-images/mitozz-shopify-store/science-education.png",
        subtitle: {
          en: "Science and how-it-works section",
          jp: "サイエンス・仕組み解説セクション",
        },
        description: {
          en: "Mitochondrial science was translated into a visual, easy-to-skim explanation so first-time visitors could understand the value proposition without medical jargon.",
          jp: "ミトコンドリアの科学的背景を、専門用語に頼らずビジュアル中心で読み解けるよう構成し、初回訪問でも価値が伝わる形に整えました。",
        },
      },
      {
        id: "4",
        image: "/project-images/mitozz-shopify-store/content-hub.png",
        subtitle: {
          en: "Blog and content hub",
          jp: "ブログ・コンテンツハブ",
        },
        description: {
          en: "A blog section was set up to support SEO, ongoing customer education, and longer-form content that builds category authority over time.",
          jp: "SEO、継続的な顧客教育、カテゴリ内での権威性を支えるための、ブログ・コンテンツハブを整備しました。",
        },
      },
    ],
    features: {
      en: [
        "End-to-end Shopify storefront build",
        "Subscribe-and-save product page setup",
        "Brand story and science education sections",
        "Editorial-style premium presentation",
        "Blog / content hub for SEO and education",
        "Japanese-first storefront experience",
      ],
      jp: [
        "Shopifyストアの一気通貫構築",
        "定期購入導線を組み込んだ商品ページ",
        "ブランドストーリーとサイエンス解説セクション",
        "プレミアム感を意識した編集的な見せ方",
        "SEOと顧客教育を支えるブログ／コンテンツハブ",
        "日本語前提のストア体験設計",
      ],
    },
    challenges: {
      en: "The brand needed to communicate a science-backed product without overwhelming new visitors, while making subscription the obvious purchase path on a premium-priced item.",
      jp: "科学的な根拠をしっかり伝えつつも、初訪問のユーザーが情報量で離脱しないようにし、価格帯の高い商品でも定期購入が自然な選択肢として機能する設計が必要でした。",
    },
    solution: {
      en: "I built the Shopify storefront with a clear brand-first hero, a simplified science explanation layer, a subscription-ready product page, and a content hub that supports both SEO and long-term retention.",
      jp: "ブランド前面のヒーロー、ハードルを下げたサイエンス解説、定期購入を組み込んだ商品ページ、そしてSEOとリテンションの両方を支えるコンテンツハブを軸にShopifyストアを構築しました。",
    },
    results: {
      en: [
        "Launched a premium Japanese Shopify storefront",
        "Made subscribe-and-save the default purchase path",
        "Built a content foundation for SEO and ongoing retention",
      ],
      jp: [
        "プレミアム感のある日本語Shopifyストアを公開",
        "定期購入を自然な購入導線として確立",
        "SEOとリテンションを支えるコンテンツ基盤を構築",
      ],
    },
  },
  {
    id: "mizu-japan-homeware",
    client: "Mizu Japan",
    slug: "japanese-homeware-shopify-store",
    title: {
      en: "Japanese Homeware and Ceramics Shopify Store",
      jp: "和食器・ホームウェアのShopifyストア",
    },
    shortDescription: {
      en: "A refined Shopify storefront for handmade ceramics and homeware, designed for clear browsing and a more editorial product presentation.",
      jp: "手仕事の器やホームウェアを扱うブランド向けに、見やすさと世界観の両立を意識して整えたShopifyストアです。",
    },
    description: {
      en: "This project focused on translating a handmade product line into a calm, easy-to-browse ecommerce experience. I supported the client from early planning through launch, shaping product presentation, content structure, and user flow so the storefront felt clear, trustworthy, and aligned with the brand.",
      jp: "この案件では、手仕事の商品ラインを、落ち着いた雰囲気のまま見やすいEC体験に落とし込むことを重視しました。企画段階から公開まで伴走しながら、商品ページ、情報設計、回遊導線を整え、ブランドらしさと使いやすさの両方が伝わるストアに仕上げました。",
    },
    mainImage: "/project-images/mizu-japan/japanese-homeware-about-page.png",
    category: "ecommerce",
    technologies: ["Shopify", "Online Consultation", "SEO"],
    liveUrl: "https://mizu-japan.com/",
    featured: true,
    featuredRank: 4,
    completedAt: "2024-02-14",
    screenshots: [
      {
        id: "1",
        image: "/project-images/mizu-japan/japanese-homeware-product-detail.png",
        subtitle: {
          en: "Elegant product detail page",
          jp: "商品詳細ページ",
        },
        description: {
          en: "The detail template was designed to support both storytelling and purchase clarity.",
          jp: "商品の背景を伝えつつ、購入判断に必要な情報も見やすく整理した詳細ページです。",
        },
      },
      {
        id: "2",
        image: "/project-images/mizu-japan/japanese-homeware-product-page.png",
        subtitle: {
          en: "Clean product showcase",
          jp: "商品訴求ページ",
        },
        description: {
          en: "The visual presentation stays calm while still making products easy to compare and explore.",
          jp: "落ち着いた見せ方を保ちながら、商品を比較しやすく、見て回りやすい構成にしました。",
        },
      },
      {
        id: "3",
        image: "/project-images/mizu-japan/japanese-homeware-product-filter.png",
        subtitle: {
          en: "User-friendly filters",
          jp: "絞り込み導線",
        },
        description: {
          en: "Filtering made it easier to navigate a wider product range without losing the brand feel.",
          jp: "点数の多い商品群でもブランドの雰囲気を崩さずに探しやすくするため、絞り込み導線を整理しました。",
        },
      },
    ],
    features: {
      en: [
        "Editorial-style product presentation",
        "Consultative launch support",
        "Shopify storefront build",
        "Search-friendly site structure",
        "Clear product filtering",
        "Simple browsing flow",
      ],
      jp: [
        "世界観を活かした商品訴求設計",
        "企画段階からの伴走支援",
        "Shopifyストア構築",
        "検索性を意識したサイト構成",
        "分かりやすい絞り込み導線",
        "迷いにくい回遊設計",
      ],
    },
    challenges: {
      en: "The client needed a polished online store but also needed hands-on guidance from concept to launch.",
      jp: "ストアをきれいに作るだけでなく、企画から公開まで伴走できる相手が必要でした。",
    },
    solution: {
      en: "I combined strategic guidance, product presentation planning, and Shopify execution into one delivery flow.",
      jp: "方向性の整理、商品の見せ方、Shopifyでの実装までをひとつの流れで進めました。",
    },
    results: {
      en: [
        "Created a clearer ecommerce presence",
        "Improved browsing across the catalog",
        "Gave the brand a stronger launch foundation",
      ],
      jp: [
        "ブランドの見え方がより明確になった",
        "商品一覧の見やすさが向上した",
        "公開後の運用を進めやすい土台ができた",
      ],
    },
  },
  {
    id: "lush-party-store",
    client: "Lush Party Studio",
    slug: "lush-party-shopify-store",
    title: {
      en: "Shopify Store for Premium Party Props and Event Goods",
      jp: "パーティーグッズ向けShopifyストア",
    },
    shortDescription: {
      en: "A conversion-minded Shopify store for party props with clearer product discovery and a smoother buying flow.",
      jp: "商品を探しやすく、購入まで進みやすい導線を意識して整えた、パーティーグッズ向けShopifyストアです。",
    },
    description: {
      en: "The category was visually busy, so the main goal was to make the shopping experience feel more organized and commercially clear. I simplified the information architecture, product presentation, and collection flow so shoppers could understand the offer faster and move toward purchase with less friction.",
      jp: "視覚情報が多くなりやすいカテゴリだったため、まずは買い物体験を整理して分かりやすくすることを優先しました。情報設計、商品ページ、コレクション導線を見直し、何を売っているのか、どこから見ればよいのかが伝わりやすい構成にしました。",
    },
    mainImage: "/project-images/lush-party/party-props-shopify-home-page.png",
    category: "ecommerce",
    technologies: ["Shopify", "SEO", "UX/UI Design"],
    liveUrl: "https://www.lushpartystudio.com/",
    featured: true,
    featuredRank: 5,
    completedAt: "2023-07-01",
    screenshots: [
      {
        id: "1",
        image: "/project-images/lush-party/party-props-shopify-product-list-page.png",
        subtitle: {
          en: "Organized product listings",
          jp: "整理された商品一覧",
        },
        description: {
          en: "The listing layout was cleaned up so visitors could compare options faster.",
          jp: "一覧レイアウトを整理し、複数の商品を見比べやすくしました。",
        },
      },
      {
        id: "2",
        image: "/project-images/lush-party/party-props-shopify-product-detail-page.png",
        subtitle: {
          en: "Conversion-focused product page",
          jp: "購入導線を意識した商品ページ",
        },
        description: {
          en: "The product page balances context, visuals, and a clearer path to purchase.",
          jp: "商品の魅力と必要な情報を両立しながら、購入までの導線を分かりやすく整理しました。",
        },
      },
      {
        id: "3",
        image: "/project-images/lush-party/party-props-shopify-collections-page.png",
        subtitle: {
          en: "Collection-led browsing",
          jp: "コレクション中心の回遊",
        },
        description: {
          en: "Collection structure helped simplify discovery across a broad product range.",
          jp: "幅広い商品群の中でも目的の商品にたどり着きやすいよう、コレクション導線を整理しました。",
        },
      },
    ],
    features: {
      en: [
        "Clearer product discovery",
        "Conversion-minded UX",
        "Responsive Shopify experience",
        "Search-friendly structure",
        "Better product presentation",
        "Merchant-friendly backend flow",
      ],
      jp: [
        "商品を探しやすい構成",
        "CVを意識したUX設計",
        "レスポンシブなShopify体験",
        "検索性を意識したサイト構成",
        "伝わりやすい商品訴求",
        "運用しやすい管理設計",
      ],
    },
    challenges: {
      en: "The catalog had to stay flexible while still feeling easy to browse and quicker to shop.",
      jp: "商品数や見せ方の自由度を保ちながらも、回遊しやすく、買いやすい体験に整える必要がありました。",
    },
    solution: {
      en: "I simplified the information architecture and purchasing flow so the store felt more organized and easier to use.",
      jp: "情報設計と購入導線を見直し、見た目の楽しさを残しながらも使いやすいストアに整えました。",
    },
    results: {
      en: [
        "Improved product clarity",
        "Made the store easier to browse",
        "Strengthened the path toward purchase",
      ],
      jp: [
        "商品の分かりやすさが向上した",
        "ストア全体の回遊がしやすくなった",
        "購入までの流れを整理できた",
      ],
    },
  },
  {
    id: "nisa-bakri-wordpress",
    client: "Nisa Bakri",
    slug: "gourmet-wordpress-landing-page",
    title: {
      en: "Malaysian Gourmet WordPress Landing Page",
      jp: "マレーシア食品ブランドのWordPress LP",
    },
    shortDescription: {
      en: "An SEO-friendly WordPress landing page built to support brand discovery, content publishing, and traffic handoff into Shopify.",
      jp: "ブランド認知、コンテンツ発信、Shopifyへの導線設計を目的に作成した、SEOを意識したWordPressランディングページです。",
    },
    description: {
      en: "This project used WordPress as a flexible content layer for recipes, brand storytelling, and product discovery, while Shopify remained the commercial destination. The site was built to attract organic traffic, explain the brand clearly, and move visitors into the ecommerce flow without making content operations too heavy.",
      jp: "この案件では、レシピ、ブランド紹介、商品理解を支えるコンテンツ基盤としてWordPressを使い、購入先はShopifyへつなぐ構成にしました。検索流入を取り込みつつ、ブランドの説明と商品導線を整理し、運用が重くなりすぎない形で回せるLPに仕上げています。",
    },
    mainImage: "/project-images/nisabakri/gourmet-wordpress-home-page.png",
    category: "landing page",
    technologies: ["WordPress", "Shopify Integration", "SEO"],
    liveUrl: "https://nisabakri.com/",
    featured: true,
    featuredRank: 6,
    completedAt: "2024-01-01",
    screenshots: [
      {
        id: "1",
        image:
          "/project-images/nisabakri/gourmet-wordpress-product-about-page.png",
        subtitle: {
          en: "Detailed brand story page",
          jp: "ブランドストーリーページ",
        },
        description: {
          en: "Long-form brand and product context helped the site work as both editorial content and a bridge into commerce.",
          jp: "ブランド背景と商品文脈を丁寧に伝えることで、読み物としても購入導線としても機能するページにしました。",
        },
      },
      {
        id: "2",
        image: "/project-images/nisabakri/gourmet-wordpress-products-page.png",
        subtitle: {
          en: "Product showcase page",
          jp: "商品紹介ページ",
        },
        description: {
          en: "Products were organized so visitors could understand the offer quickly and move toward Shopify at the right moment.",
          jp: "何を扱っているブランドなのかがすぐ伝わり、適切なタイミングでShopifyへ移動できるように設計しました。",
        },
      },
      {
        id: "3",
        image: "/project-images/nisabakri/gourmet-wordpress-recipes-page.png",
        subtitle: {
          en: "SEO recipe content page",
          jp: "SEO向けレシピページ",
        },
        description: {
          en: "Recipe content created a repeatable organic entry point while reinforcing the brand story.",
          jp: "レシピ記事を継続的な検索流入の入口として活用しながら、ブランド理解も深められるようにしました。",
        },
      },
    ],
    features: {
      en: [
        "SEO-friendly content layer",
        "Shopify traffic handoff",
        "Brand storytelling pages",
        "Recipe-led discovery strategy",
        "Flexible CMS workflow",
        "Clear CTA structure",
      ],
      jp: [
        "SEOを意識したコンテンツ基盤",
        "Shopifyへの自然な導線設計",
        "ブランド理解を深める紹介ページ",
        "レシピ起点の流入設計",
        "更新しやすいCMS運用",
        "分かりやすいCTA設計",
      ],
    },
    challenges: {
      en: "The client needed a content site that could attract organic traffic while still guiding visitors into ecommerce effectively.",
      jp: "検索流入を取り込みながら、EC導線にもきちんとつなげられるコンテンツサイトが必要でした。",
    },
    solution: {
      en: "I used WordPress as the content layer, then structured pages and CTAs so visitors could move into Shopify naturally.",
      jp: "WordPressを情報発信の土台にしつつ、ページ構成とCTA設計によってShopifyへ自然に移動できる流れを作りました。",
    },
    results: {
      en: [
        "Created an SEO-ready content platform",
        "Improved clarity around the brand offer",
        "Built a cleaner bridge into Shopify",
      ],
      jp: [
        "SEOを進めやすいコンテンツ基盤を作れた",
        "ブランドの訴求が明確になった",
        "Shopifyへの導線を整理できた",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => (a.featuredRank ?? 999) - (b.featuredRank ?? 999));
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(
    (project) => project.category.toLowerCase() === category.toLowerCase()
  );
}
