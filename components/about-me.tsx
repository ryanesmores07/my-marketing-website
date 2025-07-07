import Image from "next/image";

interface AboutMeProps {
  locale?: "en" | "jp";
}

export const AboutMe = ({ locale = "en" }: AboutMeProps) => {
  const content = {
    en: {
      badge: "About Me",
      title: ["DESIGNER,", "DEVELOPER,", "CREATOR/"],
      description:
        "With 7+ years based in Tokyo, I specialize in building localized Shopify stores and bilingual (English/Japanese) landing pages that drive results. As a Shopify expert proficient in On-Page and Technical SEO, I excel at keyword research and crafting SEO-optimized content tailored for both English and Japanese markets.",
      approach:
        "My approach blends Japan's renowned customer-first philosophy with technical excellence—I treat your goals as my own, ensuring success.",
      personal:
        "When not creating or optimizing websites, you'll find me at the gym or snowboarding in Japan's mountains.",
    },
    jp: {
      badge: "私について",
      title: ["デザイナー・", "開発者・", "クリエイター"],
      description:
        "東京を拠点に7年以上、Shopifyを活用した多言語（日英）対応のECサイトやランディングページ制作を得意としています。Shopify構築に関する幅広い知識を持ち、オンページSEO・テクニカルSEOを駆使したキーワードリサーチやSEOライティングにも精通しています。",
      approach:
        "日本の「おもてなし」の心を大切にし、お客様の目標を自分ごととして捉え、結果にこだわり抜きます。",
      personal:
        "仕事を離れると、ジムでトレーニングをしたり、日本の山々でスノーボードを楽しんでいます。",
    },
  };

  const currentContent = content[locale];

  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-muted rounded-3xl p-6 shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl bg-card">
                <Image
                  src="/images/ryan-main.jpg"
                  alt="Ernie Ryan - Designer, Developer, Creator"
                  width={500}
                  height={700}
                  className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                🇯🇵 Tokyo Based
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                7+ Years
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform rotate-3 -z-10" />
          </div>

          {/* Right Content - Text */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-accent text-accent-foreground ring-1 ring-inset ring-border">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {currentContent.badge}
            </div>

            {/* Title */}
            <div className="space-y-2">
              {currentContent.title.map((line, index) => (
                <h2
                  key={index}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-none tracking-tight"
                >
                  {line}
                </h2>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {currentContent.description}
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                {currentContent.approach}
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                {currentContent.personal}
              </p>
            </div>

            {/* Skills/Specialties */}
            <div className="pt-8 border-t border-border">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                  Shopify Expert
                </span>
                <span className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                  SEO Optimization
                </span>
                <span className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                  EN/JP Bilingual
                </span>
                <span className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                  Cross-Border
                </span>
                <span className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                  7+ Years Tokyo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
