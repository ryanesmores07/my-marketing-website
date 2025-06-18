import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Type definition based on Contentful structure
export interface Service {
  serviceTitle: string;
  slug: string;
  svgIcon: string; // SVG as string or icon name
  teaser: string;
  detailedDescription: string;
  sortOrder: number;
}

// Dummy data based on your services
const dummyServices: Service[] = [
  {
    serviceTitle: "Web Design",
    slug: "web-design",
    svgIcon: "🎨", // Using emoji for now, will be replaced with actual SVG
    teaser:
      "Beautiful, responsive websites that convert visitors into customers",
    detailedDescription:
      "Custom web design solutions focusing on user experience, mobile responsiveness, and conversion optimization. Perfect for Japanese businesses expanding internationally or international companies entering the Japanese market.",
    sortOrder: 1,
  },
  {
    serviceTitle: "On-page & Technical SEO",
    slug: "seo-optimization",
    svgIcon: "🔍",
    teaser: "Boost your search rankings with comprehensive SEO strategies",
    detailedDescription:
      "Complete SEO optimization including technical audits, on-page optimization, and international SEO strategies. Specialized in helping businesses rank in both Japanese and international markets.",
    sortOrder: 2,
  },
  {
    serviceTitle: "Content Writing",
    slug: "content-writing",
    svgIcon: "✍️",
    teaser: "Engaging content that speaks to your global audience",
    detailedDescription:
      "Professional content creation in English and Japanese, including website copy, blog posts, and marketing materials. Expert in cross-cultural communication and localization.",
    sortOrder: 3,
  },
  {
    serviceTitle: "E-commerce Solutions",
    slug: "ecommerce-solutions",
    svgIcon: "🛒",
    teaser: "Shopify & WordPress stores optimized for international sales",
    detailedDescription:
      "Complete e-commerce development and optimization for Shopify and WordPress platforms. Specialized in multi-currency, multi-language setups for Japan-international business expansion.",
    sortOrder: 4,
  },
  {
    serviceTitle: "Landing Pages",
    slug: "landing-pages",
    svgIcon: "🎯",
    teaser: "High-converting landing pages that drive results",
    detailedDescription:
      "Custom landing page design and development focused on conversion optimization. Perfect for market entry campaigns and targeted marketing initiatives in Japan and international markets.",
    sortOrder: 5,
  },
];

interface ServicesGridProps {
  items?: Service[];
  locale?: string;
}

export const ServicesGrid = ({
  items = dummyServices,
  locale = "en",
}: ServicesGridProps) => {
  // Sort services by sortOrder
  const sortedServices = [...items].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {locale === "ja" ? "サービス" : "Our Services"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {locale === "ja"
              ? "日本企業の海外展開と、海外企業の日本市場参入を専門にサポートします"
              : "Specialized solutions for Japanese businesses expanding globally and international companies entering Japan"}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedServices.map((service) => (
            <Card
              key={service.slug}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 bg-card"
            >
              <CardHeader className="text-center pb-4">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 text-4xl flex items-center justify-center bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  {service.svgIcon}
                </div>

                <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {service.serviceTitle}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-4 text-center">
                  {service.teaser}
                </CardDescription>

                <div className="text-sm text-muted-foreground leading-relaxed">
                  {service.detailedDescription}
                </div>

                {/* CTA Link */}
                <div className="mt-6 text-center">
                  <a
                    href={`/${locale}/services/${service.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    {locale === "ja" ? "詳細を見る" : "Learn More"}
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            {locale === "ja"
              ? "プロジェクトについてご相談ください"
              : "Ready to discuss your project?"}
          </p>
          <a
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            {locale === "ja" ? "お問い合わせ" : "Get In Touch"}
          </a>
        </div>
      </div>
    </section>
  );
};
