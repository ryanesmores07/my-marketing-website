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
  completedAt: string; // ISO date string
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
    id: "1",
    client: "episou",
    slug: "episou-suitcase",
    title: {
      en: "Episou Suitcase Ecommerce Store",
      jp: "Episou スーツケースオンラインストア",
    },
    shortDescription: {
      en: "A Shopify ecommerce solution tailored for seamless global sales with multi-language and multi-currency support.",
      jp: "多言語・多通貨対応のグローバルな販売を可能にしたShopifyオンラインストア。",
    },
    description: {
      en: "Episou sells premium suitcases primarily in Japan but needed a seamless solution to expand to the US without the complexities and costs of managing two separate Shopify stores. We built a single, powerful Shopify store with geolocation-based subdirectories, allowing customers to be automatically directed to their localized version of the store. Integrated multi-currency checkout (JPY/USD) and robust SEO optimization ensured a strong market presence in both countries.",
      jp: "Episouは主に日本市場向けに高級スーツケースを販売していますが、米国市場にも進出したいという要望がありました。2つのShopifyストアを別々に運用するコストや手間を避けるため、1つのShopifyストア内で位置情報に基づいたサブディレクトリを使用することを提案。顧客がアクセスする場所に応じて自動的に日本または米国向けのページにリダイレクトされます。多通貨決済（円/ドル）とSEO対策を徹底し、両国市場で強力なオンラインプレゼンスを確立しました。",
    },
    mainImage: "/project-images/episou/episou-main.png",
    category: "ecommerce",
    technologies: [
      "Shopify",
      "Geolocation",
      "Multi-currency",
      "SEO Optimization",
    ],
    liveUrl: "https://www.episou.com/",
    featured: true,
    completedAt: "2025-05-15",
    screenshots: [
      {
        id: "1",
        image: "/project-images/episou/product-detail-page.png",
        subtitle: {
          en: "Localized Product Page",
          jp: "ローカライズされた商品ページ",
        },
        description: {
          en: "Clean, responsive product pages designed to appeal to both Japanese and American audiences with automatic language and currency adjustment.",
          jp: "日本とアメリカの両市場に対応するために、言語と通貨が自動調整されるレスポンシブでクリーンな商品ページデザイン。",
        },
      },
      {
        id: "2",
        image: "/project-images/episou/brand-page.png",
        subtitle: {
          en: "Brand Story Page",
          jp: "ブランドストーリーページ",
        },
        description: {
          en: "Compelling brand narrative page showcasing the artisan heritage and craftsmanship behind Episou suitcases with elegant visual storytelling.",
          jp: "Episouスーツケースの職人の伝統と技術を美しいビジュアルストーリーテリングで紹介する魅力的なブランドナラティブページ。",
        },
      },
      {
        id: "3",
        image: "/project-images/episou/product-list-page.png",
        subtitle: {
          en: "Product Listing Page",
          jp: "商品一覧ページ",
        },
        description: {
          en: "Clean and organized product catalog with filtering options, showcasing the complete range of premium suitcases with intuitive navigation.",
          jp: "フィルタリング機能付きの整理されたプレミアムスーツケースの商品カタログで、直感的なナビゲーションを提供。",
        },
      },
    ],
    features: {
      en: [
        "Multi-language store (Japanese, English)",
        "Multi-currency checkout (JPY, USD)",
        "Automatic geolocation detection for seamless user experience",
        "Integrated Shopify Payments",
        "Comprehensive SEO optimization targeting both Japanese and US markets",
      ],
      jp: [
        "多言語オンラインストア（日英対応）",
        "多通貨決済（日本円・米ドル）",
        "位置情報に基づく自動リダイレクトによるシームレスな体験",
        "Shopifyペイメント統合",
        "日本市場・米国市場向けの徹底したSEO対策",
      ],
    },
    challenges: {
      en: "The client faced complexity, high costs, and inefficient management by maintaining separate Shopify stores for Japan and the US markets.",
      jp: "日本市場と米国市場向けに別々のShopifyストアを運用することによる複雑さ、コスト高、管理非効率化が課題でした。",
    },
    solution: {
      en: "Created a unified Shopify store leveraging geolocation-based subdirectories, multi-currency checkout, and targeted SEO strategies to streamline operations and reduce costs significantly.",
      jp: "位置情報ベースのサブディレクトリ、多通貨決済、ターゲットに合わせたSEO戦略を活用し、統一されたShopifyストアを構築。運営効率の向上と大幅なコスト削減を実現しました。",
    },
    results: {
      en: [
        "Dramatic reduction in operational complexity and costs",
        "Improved customer experience with automatic localization",
        "Increased visibility and sales growth through targeted SEO",
      ],
      jp: [
        "運営の複雑さとコストを劇的に削減",
        "自動ローカライゼーションによる顧客体験の向上",
        "ターゲットを絞ったSEO対策による認知度向上と売上成長",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(
    (project) => project.category.toLowerCase() === category.toLowerCase()
  );
}
