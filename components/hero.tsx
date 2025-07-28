import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroCTAButton } from "@/components/hero-cta-button";
import React from "react";

// ShinyText component for stats numbers with light/dark mode support
const ShinyText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block text-foreground dark:text-[#b5b5b5a4] animate-shine shiny-text">
    {children}
  </span>
);

interface HeroProps {
  heroData: {
    en: {
      questions: string[];
      description: string;
      ctaText: string;
    };
    jp: {
      questions: string[];
      description: string;
      ctaText: string;
    };
  };
  locale?: string;
}

export const Hero = ({ heroData, locale = "en" }: HeroProps) => {
  const currentContent =
    heroData[locale as keyof typeof heroData] || heroData.en;

  return (
    <section className="relative bg-gradient-to-br from-background to-secondary py-8 lg:py-12 overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      {/* Keep only one subtle animated orb for performance */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
        <div className="w-72 h-72 bg-accent rounded-full blur-3xl opacity-70 motion-safe:animate-pulse will-change-transform" />
      </div>
      {/* Remove the bottom left orb for reduced animation density */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
        {/* Large Name Display - Full Width */}
        <div className="mb-16 lg:mb-20 w-full flex justify-center">
          <h1 className="font-black text-foreground leading-none tracking-tighter whitespace-nowrap text-center text-[clamp(2rem,16vw,24rem)] min-h-[4rem] lg:min-h-[6rem]">
            ERNIE RYAN
          </h1>
        </div>

        {/* New Hero Content Section */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Questions and CTA Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Questions */}
            <div className="space-y-6">
              {currentContent.questions.map((question, index) => (
                <div
                  key={`question-${index}-${question.slice(0, 20)}`}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">
                    {question}
                  </p>
                </div>
              ))}

              <div className="pt-6">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  {currentContent.description}
                </p>
              </div>

              {/* CTA Section */}
              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <HeroCTAButton ctaText={currentContent.ctaText} />
                <Link href="#projects">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto px-8 py-4 text-foreground border-2 border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300 font-semibold text-base"
                  >
                    {locale === "jp" ? "プロジェクトを見る" : "View Projects"}
                    <span className="ml-2">→</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Side - Futuristic Profile Section */}
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* Animated Background Orbs - reduced to one above */}
              {/* Main Profile Container */}
              <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96">
                {/* Rotating Border Ring - keep this animation */}
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary motion-safe:animate-spin opacity-75 will-change-transform"
                  style={{ animationDuration: "8s" }}
                  aria-hidden="true"
                >
                  <div className="w-full h-full rounded-full bg-background m-1"></div>
                </div>

                {/* Inner Glowing Ring */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-primary/50 to-accent/50 shadow-2xl shadow-primary/25">
                  <div className="w-full h-full rounded-full bg-background m-1"></div>
                </div>

                {/* Profile Image Container */}
                <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 shadow-2xl">
                  {/* Hexagonal Overlay Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                  </div>

                  {/* Main Profile Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/ryan-main.jpg"
                      alt="Ernie Ryan - Bilingual Web Developer & SEO Expert"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                      sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 400px"
                      fetchPriority="high"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/20 mix-blend-overlay"></div>
                  </div>
                </div>

                {/* Remove floating tech elements and scanning lines for performance */}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-primary mb-2">
              <ShinyText>7+</ShinyText>
            </div>
            <div className="text-sm text-muted-foreground">
              {locale === "jp" ? "年の経験" : "Years Experience"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-primary mb-2">
              <ShinyText>EN/JP</ShinyText>
            </div>
            <div className="text-sm text-muted-foreground">
              {locale === "jp" ? "多言語対応" : "Bilingual Support"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-primary mb-2">
              <ShinyText>24/7</ShinyText>
            </div>
            <div className="text-sm text-muted-foreground">
              {locale === "jp"
                ? "世界最高の応答速度"
                : "World Class Response Time"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-primary mb-2">
              <ShinyText>100%</ShinyText>
            </div>
            <div className="text-sm text-muted-foreground">
              {locale === "jp" ? "顧客満足度" : "Client Satisfaction"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
