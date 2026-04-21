export interface Service {
  id: string;
  number: string;
  title: {
    en: string;
    jp: string;
  };
  description: {
    en: string;
    jp: string;
  };
  subServices: {
    number: string;
    title: {
      en: string;
      jp: string;
    };
  }[];
}

export const services: Service[] = [
  {
    id: "paid-ads-management",
    number: "01",
    title: {
      en: "Paid Ads Management & Performance Marketing",
      jp: "広告運用・パフォーマンスマーケティング",
    },
    description: {
      en: "Meta Ads and Google Ads support focused on efficient spend, stronger conversion paths, and reporting you can actually use to make decisions.",
      jp: "Meta広告とGoogle広告の運用を通じて、無駄の少ない予算配分、改善しやすい導線設計、意思決定につながるレポーティングを支援します。",
    },
    subServices: [
      {
        number: "01",
        title: {
          en: "Account Setup & Campaign Structure",
          jp: "アカウント設計と配信構成の整理",
        },
      },
      {
        number: "02",
        title: {
          en: "Creative Testing & Optimization",
          jp: "クリエイティブ検証と改善運用",
        },
      },
      {
        number: "03",
        title: {
          en: "Weekly Reporting & Performance Insights",
          jp: "週次レポートと改善インサイト整理",
        },
      },
    ],
  },
  {
    id: "shopify-development",
    number: "02",
    title: {
      en: "Shopify Store Development",
      jp: "Shopifyストア構築",
    },
    description: {
      en: "Shopify storefronts built for clearer messaging, smoother shopping flows, and easier day-to-day operations.",
      jp: "伝わりやすい見せ方、買いやすい導線、運用しやすさを意識したShopifyストアを構築します。",
    },
    subServices: [
      {
        number: "01",
        title: {
          en: "Custom Themes & App Setup",
          jp: "テーマ調整とアプリ導入",
        },
      },
      {
        number: "02",
        title: {
          en: "Store Migration",
          jp: "既存サイトからの移行対応",
        },
      },
      {
        number: "03",
        title: {
          en: "Localization & Geo-Targeting",
          jp: "多言語対応と地域別の出し分け",
        },
      },
    ],
  },
  {
    id: "seo-services",
    number: "03",
    title: {
      en: "SEO for Ecommerce & Multilingual Sites",
      jp: "ECサイト・多言語サイトのSEO",
    },
    description: {
      en: "Technical, on-page, and multilingual SEO support designed to improve search visibility without disconnecting from conversion goals.",
      jp: "テクニカルSEO、コンテンツ改善、多言語対応を含めて、検索流入とCVの両方を見ながらSEOを整えます。",
    },
    subServices: [
      {
        number: "01",
        title: {
          en: "Technical SEO Audits",
          jp: "テクニカルSEO監査",
        },
      },
      {
        number: "02",
        title: {
          en: "On-Page SEO Optimization",
          jp: "ページ単位のSEO改善",
        },
      },
      {
        number: "03",
        title: {
          en: "Keyword Research & Content Direction",
          jp: "キーワード調査とコンテンツ方針",
        },
      },
    ],
  },
  {
    id: "web-design-and-development",
    number: "04",
    title: {
      en: "Custom Web Design & Development",
      jp: "Webデザイン・Web開発",
    },
    description: {
      en: "Custom websites created for clear positioning, strong user experience, and a clean foundation for future marketing.",
      jp: "伝わるメッセージ設計、使いやすい体験設計、その後の集客にもつなげやすい土台づくりを意識して制作します。",
    },
    subServices: [
      {
        number: "01",
        title: {
          en: "Responsive & Mobile-First Design",
          jp: "レスポンシブ・モバイルファースト設計",
        },
      },
      {
        number: "02",
        title: {
          en: "Wireframes & Prototypes",
          jp: "ワイヤーフレームとプロトタイプ作成",
        },
      },
      {
        number: "03",
        title: {
          en: "Conversion-Focused UX",
          jp: "CVを意識したUX改善",
        },
      },
    ],
  },
  {
    id: "multilingual-content",
    number: "05",
    title: {
      en: "Multilingual Content Writing",
      jp: "多言語コンテンツ制作",
    },
    description: {
      en: "English and Japanese content support for product pages, landing pages, and brand messaging that needs to feel natural in both markets.",
      jp: "商品ページ、LP、ブランド紹介などを対象に、日本語でも英語でも自然に伝わるコンテンツ制作を支援します。",
    },
    subServices: [
      {
        number: "01",
        title: {
          en: "Localization & Translation",
          jp: "ローカライズと翻訳調整",
        },
      },
      {
        number: "02",
        title: {
          en: "SEO Copywriting",
          jp: "SEOコピーライティング",
        },
      },
      {
        number: "03",
        title: {
          en: "Content Strategy",
          jp: "コンテンツ方針設計",
        },
      },
    ],
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};
