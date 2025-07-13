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
    id: "shopify-development",
    number: "01",
    title: {
      en: "Shopify Store Development",
      jp: "Shopifyストア構築",
    },
    description: {
      en: "Customized Shopify stores designed for optimal conversions.",
      jp: "最適なコンバージョンを目指したカスタムShopifyストア。",
    },
    subServices: [
      {
        number: "01",
        title: {
          en: "Custom Themes & Apps",
          jp: "カスタムテーマ＆アプリ開発",
        },
      },
      {
        number: "02",
        title: {
          en: "Store Migration",
          jp: "ストア移行",
        },
      },
      {
        number: "03",
        title: {
          en: "Localization and Geo-targeting",
          jp: "ローカライゼーション＆ジオターゲティング",
        },
      },
    ],
  },
  {
    id: "seo-services",
    number: "02",
    title: {
      en: "SEO Services",
      jp: "SEO対策",
    },
    description: {
      en: "Comprehensive multilingual SEO—technical, On-Page, and strategy-focused.",
      jp: "テクニカル・ページ内SEO・多言語SEOを包括的にサポート。",
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
          jp: "オンページSEO最適化",
        },
      },
      {
        number: "03",
        title: {
          en: "Keyword Research & Strategy",
          jp: "キーワード調査＆戦略策定",
        },
      },
    ],
  },
  {
    id: "web-design-and-development",
    number: "03",
    title: {
      en: "Custom Web Design & Development",
      jp: "カスタムウェブデザイン＆開発",
    },
    description: {
      en: "Beautiful, intuitive designs crafted specifically for Japan and international markets.",
      jp: "日本市場と海外市場向けに直感的で魅力的なデザインを提供。",
    },
    subServices: [
      {
        number: "01",
        title: {
          en: "Responsive and Mobile-Friendly Design",
          jp: "レスポンシブ＆モバイルフレンドリーなデザイン",
        },
      },
      {
        number: "02",
        title: {
          en: "Wireframing & Prototyping",
          jp: "ワイヤーフレーム＆プロトタイプ作成",
        },
      },
      {
        number: "03",
        title: {
          en: "User-Centered UX Design and Development",
          jp: "ユーザー中心のUXデザイン＆開発",
        },
      },
    ],
  },
  {
    id: "multilingual-content",
    number: "04",
    title: {
      en: "Multilingual Content Writing",
      jp: "多言語コンテンツライティング",
    },
    description: {
      en: "Engaging, SEO-rich content creation in Japanese and English.",
      jp: "SEOを意識した魅力的な日英コンテンツ制作。",
    },
    subServices: [
      {
        number: "01",
        title: {
          en: "Localized Content and Translation",
          jp: "ローカライズドコンテンツ＆翻訳",
        },
      },
      {
        number: "02",
        title: {
          en: "SEO-Optimized Copywriting",
          jp: "SEO最適化コピーライティング",
        },
      },
      {
        number: "03",
        title: {
          en: "Content Marketing Strategy and Execution",
          jp: "コンテンツマーケティング戦略＆実行",
        },
      },
    ],
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};
