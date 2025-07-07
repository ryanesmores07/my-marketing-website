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
    id: "web-development",
    number: "01",
    title: {
      en: "Web Development",
      jp: "ウェブ開発",
    },
    description: {
      en: "Build powerful, scalable websites and web applications with modern technologies. From simple landing pages to complex e-commerce platforms, I create digital solutions that drive results.",
      jp: "最新技術を駆使して、強力でスケーラブルなウェブサイトやウェブアプリケーションを構築します。シンプルなランディングページから複雑なEコマースプラットフォームまで、結果を生み出すデジタルソリューションを作成します。",
    },
    subServices: [
      {
        number: "01",
        title: {
          en: "Shopify Development",
          jp: "Shopify開発",
        },
      },
      {
        number: "02",
        title: {
          en: "Custom Web Apps",
          jp: "カスタムウェブアプリ",
        },
      },
      {
        number: "03",
        title: {
          en: "E-commerce Solutions",
          jp: "Eコマースソリューション",
        },
      },
    ],
  },
  {
    id: "web-design",
    number: "02",
    title: {
      en: "Web Design",
      jp: "ウェブデザイン",
    },
    description: {
      en: "Amplify your online presence with a website that truly connects with your audience's feelings and desires. I design stunning, high-converting sites that align with your business goals, helping you stand out and scale effectively.",
      jp: "オーディエンスの感情や欲求に真につながるウェブサイトで、オンラインプレゼンスを向上させます。ビジネス目標に合致した美しく高コンバージョンのサイトをデザインし、目立って効果的にスケールするお手伝いをします。",
    },
    subServices: [
      {
        number: "01",
        title: {
          en: "Responsive Design",
          jp: "レスポンシブデザイン",
        },
      },
      {
        number: "02",
        title: {
          en: "Wireframing",
          jp: "ワイヤーフレーム作成",
        },
      },
      {
        number: "03",
        title: {
          en: "UX Writing",
          jp: "UXライティング",
        },
      },
    ],
  },
  {
    id: "seo",
    number: "03",
    title: {
      en: "SEO",
      jp: "SEO対策",
    },
    description: {
      en: "Your website deserves to be seen. I optimize your online presence to elevate your visibility in search results, helping your business attract the right audience and stand out in the digital landscape.",
      jp: "あなたのウェブサイトは見られるべきです。検索結果での可視性を高めるためにオンラインプレゼンスを最適化し、適切なオーディエンスを引き付け、デジタル環境で目立つお手伝いをします。",
    },
    subServices: [
      {
        number: "01",
        title: {
          en: "Technical SEO",
          jp: "テクニカルSEO",
        },
      },
      {
        number: "02",
        title: {
          en: "On-Page Optimization",
          jp: "オンページ最適化",
        },
      },
      {
        number: "03",
        title: {
          en: "SEO Audits & Analysis",
          jp: "SEO監査・分析",
        },
      },
    ],
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};
