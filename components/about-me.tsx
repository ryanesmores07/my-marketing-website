import Image from "next/image";
import React from "react";

interface AboutMeProps {
  locale?: "en" | "jp";
}

export const AboutMe = ({ locale = "en" }: AboutMeProps) => {
  const content = {
    en: {
      badge: "About Me",
      title: ["BILINGUAL", "WEB DE", "& SEO EXPERT"],
      animatedWords: ["VELOPER", "SIGNER"],
      description:
        "Hi! My name is Ernie Ryan and I'm a bilingual freelance web developer based in Tokyo, Japan. I specialize in Shopify and multilingual SEO and content creation. Over the past 7 years in Japan, I've immersed myself in the local e-commerce landscape, blending global best practices with deep cultural understanding.",
      mission:
        "While I lead every project as the captain of the ship, I'm not alone! My trusted team includes native Japanese members who work alongside me to ensure nothing is lost in translation, especially when gathering and executing your business requirements.",
      experience:
        "Together, we build results-driven, culturally-tuned websites that help your brand grow across borders.",
      skills: [
        "Shopify Expert",
        "Multilingual SEO",
        "EN/JP Bilingual",
        "Cross-Border Commerce",
        "Tokyo-Based",
        "E-commerce Strategy",
      ],
    },
    jp: {
      badge: "私について",
      title: ["バイリンガル", "ウェブ", "& SEO専門家"],
      animatedWords: ["デベロッパー", "デザイナー"],
      description:
        "こんにちは！ 私の名前はエルニー・ライアンです。東京を拠点にShopifyと多言語SEOを専門とするバイリンガルのフリーランスWebデベロッパーです。日本での7年間で、国際的な技術と日本の市場感覚を融合させ、効果的なECサイト構築に取り組んできました。",
      mission:
        "私はプロジェクトの舵を取る立場ですが、日本語ネイティブのメンバーとチームを組んでおり、要件のヒアリングから開発まで、日本語での細かなニュアンスも正確に反映できる体制を整えています。",
      experience:
        "文化の壁を越えた、成果重視のウェブサイトを一緒に作りましょう。",
      skills: [
        "Shopify専門家",
        "多言語SEO",
        "英語・日本語対応",
        "越境EC",
        "東京拠点",
        "EC戦略",
      ],
    },
  };

  const currentContent = content[locale] || content.en;

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,white,transparent)] opacity-30" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-accent/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Simple Image */}
          <div className="relative order-2 lg:order-1">
            {/* Main Image Container */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Simple Image Container */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                {/* Main Image */}
                <div className="relative">
                  <Image
                    src="/images/about-me.jpg"
                    alt="Ernie Ryan - Bilingual Web Developer & SEO Expert"
                    width={500}
                    height={700}
                    className="w-full h-auto object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-accent/10 to-primary/10 text-foreground ring-1 ring-inset ring-primary/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {currentContent.badge}
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-none tracking-tight">
              <span className="block">{currentContent.title[0]}</span>
              <span className="flex items-baseline">
                {currentContent.title[1]}
                <span className="relative inline-block ml-1">
                  {/* First Word - VELOPER/デベロッパー */}
                  <span
                    className="relative z-10 inline-block animate-futuristic-fade-in opacity-100 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-black"
                    style={{
                      animationDelay: "0s",
                      textShadow: "0 0 20px rgba(var(--primary), 0.5)",
                      filter: "drop-shadow(0 0 10px rgba(var(--primary), 0.3))",
                    }}
                  >
                    <span className="animate-type-writer">
                      {currentContent.animatedWords[0]}
                    </span>
                    <span className="animate-blink ml-1 text-primary">|</span>
                  </span>

                  {/* Second Word - SIGNER/デザイナー */}
                  <span
                    className="absolute inset-0 z-10 inline-block animate-futuristic-fade-in opacity-0 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent font-black"
                    style={{
                      animationDelay: "2.5s",
                      textShadow: "0 0 20px rgba(var(--accent), 0.5)",
                      filter: "drop-shadow(0 0 10px rgba(var(--accent), 0.3))",
                    }}
                  >
                    <span
                      className="animate-type-writer"
                      style={{ animationDelay: "2.5s" }}
                    >
                      {currentContent.animatedWords[1]}
                    </span>
                    <span
                      className="animate-blink ml-1 text-accent"
                      style={{ animationDelay: "2.5s" }}
                    >
                      |
                    </span>
                  </span>

                  {/* Scanning Line Effect */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line opacity-60"></div>

                  {/* Particle Effects */}
                  <div className="absolute -top-2 -right-2 w-1 h-1 bg-primary rounded-full animate-float"></div>
                  <div className="absolute -bottom-2 -left-2 w-1 h-1 bg-accent rounded-full animate-float-delay"></div>
                </span>
              </span>
              <span className="block">{currentContent.title[2]}</span>
            </h2>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                {currentContent.description}
              </p>

              <p className="text-base text-foreground leading-relaxed">
                {currentContent.mission}
              </p>

              <p className="text-base text-foreground leading-relaxed">
                {currentContent.experience}
              </p>
            </div>

            {/* Enhanced Skills/Specialties */}
            <div className="pt-8 border-t border-border/50">
              <div className="flex flex-wrap gap-3">
                {currentContent.skills.map((skill, index) => (
                  <span
                    key={`skill-${index}-${skill}`}
                    className="px-4 py-2 bg-gradient-to-r from-muted to-muted/80 text-muted-foreground text-sm rounded-full font-medium border border-border/50  shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
