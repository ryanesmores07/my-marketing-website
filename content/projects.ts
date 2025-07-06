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
    slug: "suitcase-shopify-store",
    title: {
      en: "Suitcase Shopify Store",
      jp: "スーツケースのShopifyストア",
    },
    shortDescription: {
      en: "A Shopify ecommerce solution tailored for seamless global sales with multi-language and multi-currency support.",
      jp: "多言語・多通貨対応のグローバルな販売を可能にしたShopifyオンラインストア。",
    },
    description: {
      en: "This client sells premium suitcases primarily in Japan but needed a seamless solution to expand to the US without the complexities and costs of managing two separate Shopify stores. We built a single, powerful Shopify store with geolocation-based subdirectories, allowing customers to be automatically directed to their localized version of the store. Integrated multi-currency checkout (JPY/USD) and robust SEO optimization ensured a strong market presence in both countries.",
      jp: "クライアントは主に日本市場向けに高級スーツケースを販売していますが、米国市場にも進出したいという要望がありました。2つのShopifyストアを別々に運用するコストや手間を避けるため、1つのShopifyストア内で位置情報に基づいたサブディレクトリを使用することを提案。顧客がアクセスする場所に応じて自動的に日本または米国向けのページにリダイレクトされます。多通貨決済（円/ドル）とSEO対策を徹底し、両国市場で強力なオンラインプレゼンスを確立しました。",
    },
    mainImage: "/project-images/episou/suitcase-project-hero-image.png",
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
        "Shopify App Integration",
        "Integrated Shopify Payments",
        "Comprehensive SEO optimization targeting both Japanese and US markets",
      ],
      jp: [
        "多言語オンラインストア（日英対応）",
        "多通貨決済（日本円・米ドル）",
        "位置情報に基づく自動リダイレクトによるシームレスな体験",
        "Shopifyアプリ統合",
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
  {
    id: "2",
    slug: "gourmet-wordpress-landing-page",
    client: "nisabakri",
    title: {
      en: "Malaysian Gourmet WordPress Landing Page",
      jp: "マレーシアのグルメのWordPressランディングページ",
    },
    shortDescription: {
      en: "A WordPress landing page designed for gourmet recipes, product showcases, and brand lead generation, redirecting visitors seamlessly to an external Shopify store.",
      jp: "グルメレシピ、商品紹介、ブランドリード獲得を目的としたWordPressランディングページ。外部Shopifyストアへシームレスに誘導します。",
    },
    description: {
      en: "An SEO-friendly WordPress landing page strategically created to showcase gourmet recipes, premium culinary products, and to enhance brand visibility. Acting as a powerful lead-generation tool, the site effectively redirects visitors to an external Shopify store through clearly positioned Call-To-Action buttons. This setup simplifies content management, strengthens the brand’s digital presence, and maximizes visitor conversion.",
      jp: "グルメレシピ、高級料理商品を紹介し、ブランド認知度を高めるため戦略的に構築されたSEOに強いWordPressのランディングページです。効果的なリード獲得ツールとして機能し、明確に配置されたCTAボタンを通じて訪問者を外部のShopifyストアへ誘導します。この仕組みにより、コンテンツ管理が簡素化され、ブランドのデジタルプレゼンスと訪問者のコンバージョンを最大化しています。",
    },
    mainImage: "/project-images/nisabakri/gourmet-wordpress-home-page.png",
    category: "landing page",
    technologies: ["WordPress", "Shopify Integration", "SEO"],
    liveUrl: "https://nisabakri.com/",
    featured: true,
    completedAt: "2024-01-01",
    screenshots: [
      {
        id: "1",
        image:
          "/project-images/nisabakri/gourmet-wordpress-product-about-page.png",
        subtitle: {
          en: "Detailed Product and Brand Story Page",
          jp: "詳細な商品とブランドストーリーページ",
        },
        description: {
          en: "An informative page highlighting gourmet product details, ingredients, and the unique story behind the Nisa Bakri brand, optimized for search engines and audience engagement.",
          jp: "グルメ製品の詳細、原材料、Nisa Bakriブランドの背景にあるユニークなストーリーを紹介するSEO最適化された情報ページです。",
        },
      },
      {
        id: "2",
        image: "/project-images/nisabakri/gourmet-wordpress-products-page.png",
        subtitle: {
          en: "Showcase of Gourmet Products",
          jp: "グルメ商品のショーケース",
        },
        description: {
          en: "A visually rich product showcase designed to attract customers, presenting gourmet selections clearly with easy navigation to the online store.",
          jp: "顧客の目を引く視覚的に豊かな商品ショーケースで、オンラインストアへのナビゲーションも簡単に行えます。",
        },
      },
      {
        id: "3",
        image: "/project-images/nisabakri/gourmet-wordpress-recipes-page.png",
        subtitle: {
          en: "Inspirational Recipe Collection",
          jp: "インスピレーションを与えるレシピコレクション",
        },
        description: {
          en: "SEO-friendly recipes page offering a diverse collection of gourmet recipes to inspire visitors and encourage repeat visits.",
          jp: "訪問者にインスピレーションを与え、再訪を促す、多様なグルメレシピを揃えたSEOフレンドリーなページです。",
        },
      },
    ],
    features: {
      en: [
        "Strategically placed CTAs redirecting visitors seamlessly to an external Shopify store",
        "SEO-focused landing pages designed to boost organic traffic",
        "Responsive, visually appealing design optimized for all devices",
        "Clear and engaging content structure to enhance user experience",
        "Streamlined content management for easy updates",
        "WordPress plugin integration",
      ],
      jp: [
        "外部のShopifyストアへシームレスに誘導する戦略的なCTA配置",
        "オーガニックトラフィックを促進するSEO中心のランディングページ",
        "すべてのデバイス向けに最適化されたレスポンシブで魅力的なデザイン",
        "ユーザー体験を向上させる明確で魅力的なコンテンツ構造",
        "簡単に更新できる効率化されたコンテンツ管理",
        "WordPressプラグイン統合",
      ],
    },
    challenges: {
      en: "The client required a centralized WordPress platform to showcase gourmet recipes, brand storytelling, and products, efficiently redirecting visitors to their external Shopify store.",
      jp: "クライアントは、グルメレシピ、ブランドストーリー、商品を紹介するWordPressプラットフォームを必要とし、訪問者を効率的に外部Shopifyストアに誘導したいと考えていました。",
    },
    solution: {
      en: "Created an SEO-friendly WordPress landing page featuring strategically placed CTAs that seamlessly redirect visitors to the external Shopify store, effectively simplifying management and enhancing user experience.",
      jp: "SEOに強いWordPressランディングページを構築し、訪問者を外部Shopifyストアへシームレスに誘導する戦略的なCTAを配置しました。これにより管理が簡素化され、ユーザー体験も向上しました。",
    },
    results: {
      en: [
        "Improved organic search rankings and increased site traffic",
        "Higher user engagement and successful redirection to Shopify store",
        "Simplified website and product management processes",
      ],
      jp: [
        "検索ランキング向上とサイトトラフィックの増加",
        "ユーザーのエンゲージメント向上とShopifyストアへの効果的な誘導",
        "ウェブサイトおよび製品管理プロセスの効率化",
      ],
    },
  },
  {
    id: "3",
    slug: "japanese-homeware-shopify-store",
    client: "Mizu Japan",
    title: {
      en: "Japanese Homeware and Ceramics Shopify Store",
      jp: "洗練された日本のホームウェアと陶器のShopifyストア",
    },
    shortDescription: {
      en: "A Shopify store showcasing handmade Japanese ceramics and homeware with an elegant, easy-to-navigate design.",
      jp: "手作りの日本製陶器やホームウェアを洗練されたデザインで紹介する、ナビゲーションが容易なShopifyストアです。",
    },
    description: {
      en: "An elegant Shopify-based online store designed to showcase and sell beautiful, handmade Japanese ceramics and homeware. Founded by a Turkish-Japanese couple passionate about artisanal goods, the store combines refined aesthetics with user-friendly navigation, making shopping enjoyable for all visitors. We offered free online consultations to guide these first-time business owners through their web development journey, from initial ideas and inspirations to a fully realized online store.",
      jp: "美しい手作りの日本製陶器やホームウェアを販売するための洗練されたShopifyオンラインストアです。トルコ人と日本人のご夫婦が情熱を注ぐ職人技の商品を紹介しており、洗練された美学と使いやすいナビゲーションを組み合わせることで、どなたでも快適にお買い物いただけます。初めてオンラインショップを始める方にも、無料オンライン相談でご要望やインスピレーションを丁寧にヒアリングし、それを実現するまで手厚くサポートしました。",
    },
    mainImage: "/project-images/mizu-japan/japanese-homeware-about-page.png",
    category: "ecommerce",
    technologies: ["Shopify", "Online Consultation", "SEO"],
    liveUrl: "https://mizu-japan.com/",
    featured: true,
    completedAt: "2024-02-14",
    screenshots: [
      {
        id: "1",
        image:
          "/project-images/mizu-japan/japanese-homeware-product-detail.png",
        subtitle: {
          en: "Elegant Product Detail Page",
          jp: "洗練された商品詳細ページ",
        },
        description: {
          en: "Clearly displayed product details with beautifully presented images and descriptions, designed for maximum engagement and conversions.",
          jp: "美しく提示された画像と説明で商品詳細を明確に表示し、最大限のエンゲージメントとコンバージョンを実現します。",
        },
      },
      {
        id: "2",
        image: "/project-images/mizu-japan/japanese-homeware-product-page.png",
        subtitle: {
          en: "Clean Product Showcase Page",
          jp: "クリーンな商品一覧ページ",
        },
        description: {
          en: "An organized, visually appealing showcase page allowing visitors to browse handmade Japanese ceramics effortlessly.",
          jp: "手作りの日本製陶器を手軽に閲覧できる、整理され視覚的に魅力的な商品一覧ページです。",
        },
      },
      {
        id: "3",
        image:
          "/project-images/mizu-japan/japanese-homeware-product-filter.png",
        subtitle: {
          en: "User-Friendly Product Filters",
          jp: "ユーザーフレンドリーな商品フィルター",
        },
        description: {
          en: "Easy-to-use filters help visitors quickly find products according to their preferences, enhancing overall user experience and sales potential.",
          jp: "使いやすいフィルター機能により、訪問者が希望する商品を素早く見つけられ、ユーザー体験と売上向上に貢献します。",
        },
      },
    ],
    features: {
      en: [
        "Elegant, minimalistic design appealing to visitors and easy to navigate",
        "Shopify-powered store optimized for seamless transactions",
        "Free online consultations for startups and non-technical business owners",
        "Effective product filters enhancing shopping experience",
        "SEO best practices applied to maximize visibility",
        "Shopify App Integration",
      ],
      jp: [
        "訪問者を魅了しナビゲーションが容易な、洗練されたミニマリストデザイン",
        "シームレスな取引が可能なShopifyストア",
        "スタートアップや技術に詳しくない経営者向けの無料オンライン相談",
        "快適なショッピング体験を提供する効果的な商品フィルター",
        "視認性を最大化するためのSEOベストプラクティスの適用",
        "Shopifyアプリ統合",
      ],
    },
    challenges: {
      en: "The client, a couple passionate about handmade Japanese ceramics, needed an elegant online store but lacked technical experience. They required guidance from initial concepts to final execution.",
      jp: "手作りの日本製陶器に情熱を注ぐクライアントは、洗練されたオンラインストアを求めていましたが、技術的経験がありませんでした。そのため、初期コンセプトから最終実行までの丁寧なガイダンスが必要でした。",
    },
    solution: {
      en: "Provided comprehensive support with free online consultations, gathering inspirations, clarifying client needs, and delivering a beautifully designed Shopify store that reflects their brand’s elegance.",
      jp: "無料オンライン相談で包括的なサポートを提供し、インスピレーション収集、ニーズ明確化を経て、ブランドの洗練されたイメージを反映した美しいShopifyストアを構築しました。",
    },
    results: {
      en: [
        "A visually attractive, user-friendly e-commerce site encouraging purchases",
        "Empowered non-technical clients with confidence in their online presence",
        "Increased online visibility through effective SEO practices",
      ],
      jp: [
        "視覚的に魅力的でユーザーフレンドリーなeコマースサイトが購入を促進",
        "技術に詳しくないクライアントにもオンラインでの自信を提供",
        "効果的なSEO施策によりオンラインでの認知度が向上",
      ],
    },
  },
  {
    id: "4",
    slug: "lush-party-shopify-store",
    client: "Lush Party Studio",
    title: {
      en: "Shopify Store for Premium Party Props and Event Goods",
      jp: "プレミアムパーティープロップス・イベント用品のためのShopifyストア",
    },
    shortDescription: {
      en: "An engaging Shopify store offering custom and ready-made party props designed for easy browsing and seamless purchasing experiences.",
      jp: "カスタムおよび既製のパーティープロップスを提供する、簡単に閲覧できシームレスな購入体験を可能にしたShopifyストアです。",
    },
    description: {
      en: "We developed a user-friendly Shopify e-commerce platform tailored specifically for a US-based business selling premium party props and event accessories. This store features intuitive navigation, attractive product showcases, and clear pathways to customized props, making shopping effortless. Whether businesses are seeking unique, personalized props or themed sets, our Shopify solution makes it easy to explore options and complete transactions smoothly. Designed to captivate both experienced shoppers and first-time visitors alike, the website emphasizes clarity, user experience, and effective conversions.",
      jp: "米国を拠点とする企業向けに、高品質のパーティープロップスやイベント用品を販売するユーザーフレンドリーなShopifyストアを構築しました。このストアは直感的なナビゲーション、美しい商品紹介、カスタマイズプロップスへの明確な動線を備え、購入が簡単です。カスタムプロップスやテーマ別のセットを求める企業にとって、選択肢の閲覧と円滑な購入が可能なプラットフォームとなっています。オンラインストアの利用に慣れている方にも初めての訪問者にも魅力的で、わかりやすさ、ユーザー体験、コンバージョンを重視したデザインになっています。",
    },
    mainImage: "/project-images/lush-party/party-props-shopify-home-page.png",
    category: "ecommerce",
    technologies: ["Shopify", "SEO", "UX/UI Design"],
    liveUrl: "https://www.lushpartystudio.com/",
    featured: true,
    completedAt: "2023-07-01",
    screenshots: [
      {
        id: "1",
        image:
          "/project-images/lush-party/party-props-shopify-product-list-page.png",
        subtitle: {
          en: "Clear and Organized Product Listings",
          jp: "見やすく整理された商品一覧ページ",
        },
        description: {
          en: "Products displayed clearly with filtering options, allowing visitors to quickly find and select the ideal party props for any occasion.",
          jp: "フィルター機能付きで商品を分かりやすく表示し、あらゆるイベントに最適なパーティープロップスを素早く見つけられます。",
        },
      },
      {
        id: "2",
        image:
          "/project-images/lush-party/party-props-shopify-product-detail-page.png",
        subtitle: {
          en: "Detailed Product Pages Optimized for Conversion",
          jp: "コンバージョン最適化された詳細な商品ページ",
        },
        description: {
          en: "Each product page offers detailed descriptions, vibrant images, and straightforward purchasing steps designed to boost conversions.",
          jp: "各商品ページは、詳細な説明、鮮やかな画像、わかりやすい購入ステップを提供し、コンバージョンを促進します。",
        },
      },
      {
        id: "3",
        image:
          "/project-images/lush-party/party-props-shopify-collections-page.png",
        subtitle: {
          en: "Easy Navigation with Organized Collections",
          jp: "整理されたコレクションによる簡単なナビゲーション",
        },
        description: {
          en: "Product collections are neatly categorized, making it simple for customers to find exactly what they need quickly.",
          jp: "商品コレクションがきちんと分類されており、お客様が必要な商品を素早く見つけられます。",
        },
      },
    ],
    features: {
      en: [
        "User-friendly Shopify store designed for optimal conversions",
        "Clear navigation and intuitive product organization",
        "Customizable prop options tailored to business needs",
        "SEO-friendly design for increased visibility",
        "Responsive and mobile-friendly experience",
        "Shopify App Integration",
      ],
      jp: [
        "コンバージョン最適化されたユーザーフレンドリーなShopifyストア",
        "明確なナビゲーションと直感的な商品整理",
        "ビジネスニーズに応じたカスタマイズ可能なプロップス",
        "視認性を向上させるSEO対応のデザイン",
        "レスポンシブかつモバイルフレンドリーなユーザー体験",
        "Shopifyアプリ統合",
      ],
    },
    challenges: {
      en: "The client needed an e-commerce store capable of clearly presenting diverse party props and customized options, optimized for businesses and event planners seeking quick and easy ordering.",
      jp: "多様なパーティープロップスやカスタマイズオプションを明確に提示し、企業やイベントプランナーが迅速かつ容易に注文できるeコマースストアを必要としていました。",
    },
    solution: {
      en: "Delivered an engaging Shopify website, strategically designed for effortless browsing and clear communication of both ready-made and custom products, resulting in higher customer satisfaction and increased sales.",
      jp: "既製品とカスタム製品の両方を簡単に閲覧でき、明確に伝えるよう戦略的にデザインされた魅力的なShopifyウェブサイトを提供し、顧客満足度と売上向上につなげました。",
    },
    results: {
      en: [
        "Streamlined shopping experience resulting in increased conversions",
        "Improved visibility and engagement through SEO optimization",
        "Efficient management and ordering of custom products for businesses",
      ],
      jp: [
        "ショッピング体験の合理化によりコンバージョン率が向上",
        "SEO最適化により視認性とエンゲージメントが向上",
        "企業向けのカスタム製品管理・注文プロセスの効率化",
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
