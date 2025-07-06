import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroProps {
  description: string;
  locale?: string;
}

export const Hero = ({ locale = "en" }: HeroProps) => {
  return (
    <section
      id="hero"
      className="relative bg-background min-h-screen flex items-center"
    >
      {/* Clean background - minimal decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/10 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Large Name Display - Top Left */}
        <div className="absolute top-8 left-8 z-20">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black text-foreground leading-none tracking-tighter">
            {locale === "jp" ? "フエン" : "HUYNGUYEN"}
            <span className="text-sm align-top ml-2">©</span>
          </h1>
        </div>

        {/* Main Layout Grid */}
        <div className="grid lg:grid-cols-3 gap-16 items-center min-h-[80vh] pt-32 lg:pt-24">
          {/* Left Content */}
          <div className="lg:col-span-1 space-y-8">
            {/* Small arrow indicator */}
            <div className="w-8 h-8 text-muted-foreground">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" />
              </svg>
            </div>

            {/* Main description */}
            <div className="space-y-6">
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-sm">
                I help growing brands and startups gain an unfair advantage
                through premium, results driven websites.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                asChild
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-3 text-sm font-medium"
              >
                <a href="#cta">
                  {locale === "jp" ? "相談予約 ↗" : "BOOK A CALL ↗"}
                </a>
              </Button>
            </div>
          </div>

          {/* Center - Portrait Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              {/* Main portrait image */}
              <div className="w-80 h-96 lg:w-96 lg:h-[28rem] relative overflow-hidden rounded-2xl bg-card border border-border shadow-2xl">
                <Image
                  src="/images/ryan-main.jpg"
                  alt={locale === "jp" ? "エルニー・ライアン" : "Ernie Ryan"}
                  fill
                  className="object-cover filter grayscale"
                  priority
                />
              </div>

              {/* Floating badge - top right */}
              <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {locale === "jp" ? "東京在住" : "Tokyo Based"}
              </div>

              {/* Experience indicator - bottom left */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-card-foreground">
                    {locale === "jp" ? "7年以上の経験" : "7+ Years Experience"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Empty for balance */}
          <div className="lg:col-span-1">
            {/* This space intentionally left minimal for clean design */}
          </div>
        </div>

        {/* Bottom Right - Availability */}
        <div className="absolute bottom-8 right-8 text-right">
          <p className="text-xs text-muted-foreground mb-2 tracking-widest uppercase">
            AVAILABLE FOR FREELANCE WORK
          </p>
          <div className="text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-none tracking-tighter">
            JULY&apos;25
          </div>
        </div>

        {/* Specialist badge - hidden on mobile, shown on larger screens */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
          <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-accent/50 text-accent-foreground border border-border backdrop-blur-sm">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {locale === "jp"
              ? "日本 ⇄ グローバル市場スペシャリスト"
              : "Japan ⇄ Global Market Specialist"}
          </div>
        </div>
      </div>
    </section>
  );
};
