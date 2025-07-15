"use client";
import Image from "next/image";

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
        "Hi! I'm a bilingual freelance web developer based in Tokyo, specializing in Shopify and multilingual SEO strategies. Over the past 7 years in Japan, I've immersed myself in the local e-commerce landscape, blending global best practices with deep cultural understanding.",
      mission:
        "While I lead every project as the captain of the ship, I'm not alone! My trusted team includes native Japanese members who work alongside me to ensure nothing is lost in translation, especially when gathering and executing your business requirements.",
      experience:
        "Together, we build results-driven, culturally-tuned websites that help your brand grow across borders.",
    },
    jp: {
      badge: "私について",
      title: ["バイリンガル", "ウェブ", "& SEO専門家"],
      animatedWords: ["デベロッパー", "デザイナー"],
      description:
        "こんにちは！東京を拠点にShopifyと多言語SEOを専門とするバイリンガルのフリーランスWebデベロッパーです。日本での7年間で、国際的な技術と日本の市場感覚を融合させ、効果的なECサイト構築に取り組んできました。",
      mission:
        "私はプロジェクトの舵を取る立場ですが、日本語ネイティブのメンバーとチームを組んでおり、要件のヒアリングから開発まで、日本語での細かなニュアンスも正確に反映できる体制を整えています。",
      experience:
        "文化の壁を越えた、成果重視のウェブサイトを一緒に作りましょう。",
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
          {/* Left Content - Enhanced Futuristic Image */}
          <div className="relative order-2 lg:order-1">
            {/* Main Image Container */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Rotating Outer Ring */}
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-accent to-primary motion-safe:animate-spin opacity-60 will-change-transform"
                style={{ animationDuration: "12s" }}
              >
                <div className="w-full h-full rounded-3xl bg-background m-1"></div>
              </div>

              {/* Inner Glow Ring */}
              <div className="absolute inset-2 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/30 shadow-2xl shadow-primary/20">
                <div className="w-full h-full rounded-3xl bg-background m-1"></div>
              </div>

              {/* Image Container */}
              <div
                className="relative inset-4 rounded-2xl overflow-hidden bg-gradient-to-br from-muted/50 to-card shadow-2xl border border-primary/20 backdrop-blur-sm"
                style={{ margin: "16px" }}
              >
                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                </div>

                {/* Main Image */}
                <div className="relative">
                  <Image
                    src="/images/ryan-main.jpg"
                    alt="Ernie Ryan - Bilingual Web Developer & SEO Expert"
                    width={500}
                    height={700}
                    className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                  />

                  {/* Color Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-accent/15 mix-blend-overlay"></div>
                </div>

                {/* Remove scanning lines for performance */}
              </div>

              {/* Remove floating tech elements for performance */}
              {/* Background Decoration - keep for subtle depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl transform rotate-2 -z-10 blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 to-primary/5 rounded-3xl transform -rotate-1 -z-20 blur-lg" />
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

            {/* Title with Enhanced Futuristic Animated Text */}
            <div className="space-y-2">
              {currentContent.title.map((line, index) => (
                <h2
                  key={index}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-none tracking-tight"
                >
                  {index === 1 ? (
                    <span className="flex items-baseline">
                      {line}
                      <span className="relative inline-block ml-1">
                        {/* First Word - VELOPER/デベロッパー */}
                        <span
                          className="relative z-10 inline-block animate-[futuristicFadeIn_5s_infinite] opacity-100 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-black"
                          style={{
                            animationDelay: "0s",
                            textShadow: "0 0 20px rgba(var(--primary), 0.5)",
                            filter:
                              "drop-shadow(0 0 10px rgba(var(--primary), 0.3))",
                          }}
                        >
                          <span className="animate-[typeWriter_2.5s_infinite]">
                            {currentContent.animatedWords[0]}
                          </span>
                          <span className="animate-[blink_1s_infinite] ml-1 text-primary">
                            |
                          </span>
                        </span>

                        {/* Second Word - SIGNER/デザイナー */}
                        <span
                          className="absolute inset-0 z-10 inline-block animate-[futuristicFadeIn_5s_infinite] opacity-0 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent font-black"
                          style={{
                            animationDelay: "2.5s",
                            textShadow: "0 0 20px rgba(var(--accent), 0.5)",
                            filter:
                              "drop-shadow(0 0 10px rgba(var(--accent), 0.3))",
                          }}
                        >
                          <span
                            className="animate-[typeWriter_2.5s_infinite]"
                            style={{ animationDelay: "2.5s" }}
                          >
                            {currentContent.animatedWords[1]}
                          </span>
                          <span
                            className="animate-[blink_1s_infinite] ml-1 text-accent"
                            style={{ animationDelay: "2.5s" }}
                          >
                            |
                          </span>
                        </span>

                        {/* Scanning Line Effect */}
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-[scanLine_5s_infinite] opacity-60"></div>

                        {/* Particle Effects */}
                        <div className="absolute -top-2 -right-2 w-1 h-1 bg-primary rounded-full animate-[float_3s_infinite]"></div>
                        <div className="absolute -bottom-2 -left-2 w-1 h-1 bg-accent rounded-full animate-[float_3s_infinite] delay-1000"></div>
                      </span>
                    </span>
                  ) : (
                    line
                  )}
                </h2>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {currentContent.description}
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                {currentContent.mission}
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                {currentContent.experience}
              </p>
            </div>

            {/* Enhanced Skills/Specialties */}
            <div className="pt-8 border-t border-border/50">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-muted to-muted/80 text-muted-foreground text-sm rounded-full font-medium hover:from-primary hover:to-primary/80 hover:text-primary-foreground transition-all duration-300 border border-border/50 hover:border-primary/50 shadow-sm">
                  Shopify Expert
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-muted to-muted/80 text-muted-foreground text-sm rounded-full font-medium hover:from-primary hover:to-primary/80 hover:text-primary-foreground transition-all duration-300 border border-border/50 hover:border-primary/50 shadow-sm">
                  Multilingual SEO
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-muted to-muted/80 text-muted-foreground text-sm rounded-full font-medium hover:from-primary hover:to-primary/80 hover:text-primary-foreground transition-all duration-300 border border-border/50 hover:border-primary/50 shadow-sm">
                  EN/JP Bilingual
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-muted to-muted/80 text-muted-foreground text-sm rounded-full font-medium hover:from-primary hover:to-primary/80 hover:text-primary-foreground transition-all duration-300 border border-border/50 hover:border-primary/50 shadow-sm">
                  Cross-Border Commerce
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-muted to-muted/80 text-muted-foreground text-sm rounded-full font-medium hover:from-primary hover:to-primary/80 hover:text-primary-foreground transition-all duration-300 border border-border/50 hover:border-primary/50 shadow-sm">
                  Tokyo-Based
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-muted to-muted/80 text-muted-foreground text-sm rounded-full font-medium hover:from-primary hover:to-primary/80 hover:text-primary-foreground transition-all duration-300 border border-border/50 hover:border-primary/50 shadow-sm">
                  E-commerce Strategy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom CSS for Futuristic Animations */}
      <style jsx>{`
        @keyframes futuristicFadeIn {
          0%,
          45% {
            opacity: 1;
            transform: translateY(0px) scale(1);
            filter: blur(0px);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-2px) scale(1.02);
            filter: blur(1px);
          }
          55%,
          100% {
            opacity: 0;
            transform: translateY(-5px) scale(0.98);
            filter: blur(2px);
          }
        }

        @keyframes typeWriter {
          0% {
            width: 0;
          }
          50% {
            width: 100%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        @keyframes scanLine {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
            opacity: 0.7;
          }
        }

        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 5px currentColor, 0 0 10px currentColor,
              0 0 15px currentColor;
          }
          50% {
            text-shadow: 0 0 10px currentColor, 0 0 20px currentColor,
              0 0 30px currentColor;
          }
        }
      `}</style>
    </section>
  );
};
