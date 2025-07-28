import { services } from "@/content/services";
import Image from "next/image";
import { ServicesCTAButton } from "@/components/services-cta-button";
import React from "react";

// ShinyText component for subService titles with light/dark mode support
const ShinyText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block text-foreground dark:text-[#b5b5b5a4] shiny-text animate-shine">
    {children}
  </span>
);

interface ServicesSectionProps {
  locale?: "en" | "jp";
}

export const ServicesSection = ({ locale = "en" }: ServicesSectionProps) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-accent text-accent-foreground ring-1 ring-inset ring-border mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {locale === "jp" ? "サービス" : "Services"}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {locale === "jp" ? "専門サービス" : "How I Can Help You"}
          </h2>

          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            {locale === "jp"
              ? "日本と世界を繋ぐクロスボーダーマーケティングプロジェクトの実績をご覧ください。"
              : "Explore my portfolio of cross-border marketing projects connecting Japan with the global market."}
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="border-b border-border last:border-b-0 pb-16 last:pb-0"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Side - Service Number & Title */}
                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    {/* Large Number */}
                    <div className="text-6xl lg:text-8xl font-black text-muted-foreground/20 leading-none">
                      ({service.number})
                    </div>

                    {/* Service Title */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        {service.title[locale]}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {service.description[locale]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Sub Services */}
                <div className="space-y-4">
                  {service.subServices.map((subService) => (
                    <div
                      key={`${service.id}-${subService.number}`}
                      className="group flex items-center gap-4 p-4 rounded-lg border border-border transition-all duration-300"
                    >
                      {/* Sub Service Number */}
                      <div className="flex-shrink-0 w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {subService.number}
                      </div>

                      {/* Sub Service Title with darker text in light mode */}
                      <h4 className="text-lg font-semibold">
                        <ShinyText>{subService.title[locale]}</ShinyText>
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative pt-32 pb-20 overflow-hidden">
          {/* Primary background with strong fade */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg, 
                  transparent 0%, 
                  transparent 15%, 
                  rgba(0, 0, 0, 0.3) 30%, 
                  rgba(0, 0, 0, 0.8) 60%, 
                  rgba(0, 0, 0, 0.95) 100%
                ),
                linear-gradient(45deg, 
                  hsl(var(--background)) 0%, 
                  transparent 25%, 
                  transparent 75%, 
                  hsl(var(--background)) 100%
                )
              `,
            }}
          ></div>

          {/* Top edge fade */}
          <div
            className="absolute top-0 left-0 right-0 h-32"
            style={{
              background: `linear-gradient(to bottom, 
                hsl(var(--background)) 0%, 
                hsl(var(--background) / 0.8) 20%, 
                transparent 100%
              )`,
            }}
          ></div>

          {/* Side edge fades */}
          <div
            className="absolute inset-y-0 left-0 w-32"
            style={{
              background: `linear-gradient(to right, 
                hsl(var(--background)) 0%, 
                hsl(var(--background) / 0.6) 40%, 
                transparent 100%
              )`,
            }}
          ></div>
          <div
            className="absolute inset-y-0 right-0 w-32"
            style={{
              background: `linear-gradient(to left, 
                hsl(var(--background)) 0%, 
                hsl(var(--background) / 0.6) 40%, 
                transparent 100%
              )`,
            }}
          ></div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-3">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
              `,
                backgroundSize: "60px 60px",
              }}
            ></div>
          </div>

          <div className="relative flex items-center justify-between max-w-6xl mx-auto min-h-[400px] px-4">
            {/* Left side - Text content */}
            <div className="flex-1 space-y-8 max-w-2xl">
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {locale === "jp"
                  ? "お悩みやご相談、いつでもお気軽に！"
                  : "Got a project in mind or just a few questions?"}
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {locale === "jp"
                  ? "24時間いつでも対応可能。返信も迅速です。サイトの立ち上げ、スケールアップ、日本市場へのローカライズなど、あなたの課題をぜひお聞かせください。一緒に最適な解決策を考えましょう。"
                  : "I'm available 24/7 and always quick to reply. Whether you need help launching, scaling, or localizing your website, I'd love to hear what challenges you're facing—and how I can help."}
              </p>

              <ServicesCTAButton locale={locale} />
            </div>

            {/* Right side - Futuristic globe image */}
            <div className="flex-shrink-0 ml-12 relative hidden lg:block">
              <div className="w-96 h-96 relative flex items-center justify-center">
                {/* Glow effect behind the globe */}
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute inset-0 bg-blue-400/5 rounded-full blur-2xl animate-pulse"></div>

                {/* Globe image */}
                <Image
                  src="/images/cta-section-image.png"
                  alt="Global connectivity and digital transformation"
                  width={320}
                  height={320}
                  className="w-80 h-80 object-contain relative z-10 drop-shadow-2xl"
                  priority
                />

                {/* Floating particles around the globe */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-80"></div>
                <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping opacity-40"></div>
                <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
