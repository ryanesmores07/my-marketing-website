import React from "react";
import Image from "next/image";

interface AboutMeProps {
  locale?: "en" | "jp";
}

export const AboutMe = ({ locale = "en" }: AboutMeProps) => {
  const content = {
    en: {
      badge: "About Me",
      title: ["BILINGUAL", "WEB", "PARTNER"],
      animatedWords: ["DEVELOPER", "MARKETER"],
      description:
        "Hi, I'm Ernie Ryan. I'm a bilingual freelance partner based in Tokyo helping ecommerce brands grow through Shopify development, paid ads management, and multilingual SEO.",
      mission:
        "My work sits between build and growth. That means I can improve the site, sharpen the message, and turn performance data into practical next steps without sending you through multiple handoffs.",
      experience:
        "After more than seven years in Japan, I have learned how to balance international ecommerce standards with local expectations so brands can communicate more clearly and scale with less friction.",
      skills: [
        "Shopify Development",
        "Paid Ads Management",
        "Meta & Google Ads",
        "Multilingual SEO",
        "EN/JP Bilingual",
        "Cross-Border Ecommerce",
      ],
    },
    jp: {
      badge: "プロフィール",
      title: ["日英対応の", "WEB", "パートナー"],
      animatedWords: ["開発", "集客"],
      description:
        "東京を拠点に、Shopify構築、広告運用、多言語SEOを通じてECブランドの成長を支援しているフリーランスです。",
      mission:
        "制作と集客のあいだをつなぐ立場で、サイト改善、メッセージ整理、数字をもとにした改善提案まで、ひとつの流れで対応します。",
      experience:
        "日本での経験を通じて、海外向けの見せ方と日本市場で求められる伝え方の違いを踏まえながら、無理のない成長設計を意識して支援しています。",
      skills: [
        "Shopify構築",
        "広告運用",
        "Meta / Google広告",
        "多言語SEO",
        "日英バイリンガル対応",
        "越境EC支援",
      ],
    },
  };

  const currentContent = content[locale] || content.en;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-20 lg:py-40"
    >
      <div className="absolute inset-0 bg-grid-slate-100 opacity-30 [mask-image:linear-gradient(0deg,transparent,white,transparent)]" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-gradient-to-l from-primary/10 to-transparent blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-80 w-80 rounded-full bg-gradient-to-r from-accent/10 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/images/about-me.jpg"
                  alt="Ernie Ryan - Shopify development and performance marketing partner"
                  width={500}
                  height={700}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>
          </div>

          <div className="order-1 space-y-8 lg:order-2">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-accent/10 to-primary/10 px-4 py-2 text-sm font-medium text-foreground ring-1 ring-inset ring-primary/20 backdrop-blur-sm">
              <span className="relative mr-2 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {currentContent.badge}
            </div>

            <h2 className="text-4xl font-black leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="block">{currentContent.title[0]}</span>
              <span className="flex items-baseline">
                {currentContent.title[1]}
                <span className="relative ml-1 inline-block">
                  <span
                    className="relative z-10 inline-block animate-futuristic-fade-in bg-gradient-to-r from-primary to-accent bg-clip-text font-black text-transparent opacity-100"
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

                  <span
                    className="absolute inset-0 z-10 inline-block animate-futuristic-fade-in bg-gradient-to-r from-accent to-primary bg-clip-text font-black text-transparent opacity-0"
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

                  <div className="absolute left-0 top-0 h-0.5 w-full animate-scan-line bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
                  <div className="absolute -right-2 -top-2 h-1 w-1 animate-float rounded-full bg-primary" />
                  <div className="absolute -bottom-2 -left-2 h-1 w-1 animate-float-delay rounded-full bg-accent" />
                </span>
              </span>
              <span className="block">{currentContent.title[2]}</span>
            </h2>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                {currentContent.description}
              </p>

              <p className="text-base leading-relaxed text-foreground">
                {currentContent.mission}
              </p>

              <p className="text-base leading-relaxed text-foreground">
                {currentContent.experience}
              </p>
            </div>

            <div className="border-t border-border/50 pt-8">
              <div className="flex flex-wrap gap-3">
                {currentContent.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border/50 bg-gradient-to-r from-muted to-muted/80 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm"
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
