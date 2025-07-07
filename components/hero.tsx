import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroProps {
  description: string;
  locale?: string;
}

export const Hero = ({ description, locale = "en" }: HeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-background to-secondary py-8 lg:py-12 overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
        <div className="w-72 h-72 bg-accent rounded-full blur-3xl opacity-70" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
        <div className="w-96 h-96 bg-muted rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
        {/* Large Name Display - Full Width */}
        <div className="mb-16 lg:mb-20 w-full flex justify-center">
          <h1 className="font-black text-foreground leading-none tracking-tighter whitespace-nowrap text-center text-[clamp(2rem,16vw,24rem)] tracking-[-0.05em]">
            ERNIE RYAN
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-accent text-accent-foreground ring-1 ring-inset ring-border">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Japan ⇄ Global Market Specialist
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                I help growing brands and startups gain an unfair advantage
                through premium, results driven websites.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                {description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base bg-foreground text-background hover:bg-foreground/90"
              >
                <a href="#cta">
                  {locale === "jp" ? "相談予約 →" : "BOOK A CALL →"}
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">
                  Cross-Border Projects
                </div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">🇯🇵🇺🇸</div>
                <div className="text-sm text-muted-foreground">
                  JP ⇄ EN Markets
                </div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Support Available
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Specializing in Japan ⇄ Global markets
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span>🌐 Global E-commerce</span>
                <span>🔍 Multilingual SEO</span>
                <span>✍️ Cross-cultural Content</span>
                <span>🛒 Shopify & WordPress</span>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Photo */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Professional Photo */}
              <div className="relative bg-card rounded-2xl shadow-2xl p-4 border border-border">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/ryan-main.jpg"
                    alt="Ernie Ryan - Cross-border Marketing Specialist"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover filter grayscale"
                    priority
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  ✓ Japan Expert
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  🚀 Global Ready
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 bg-card rounded-lg shadow-lg p-4 border border-border rotate-[-4deg]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <span className="text-sm font-medium text-card-foreground">
                    🇯🇵 Japan Native
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-card rounded-lg shadow-lg p-4 border border-border rotate-[4deg]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-card-foreground">
                    🌍 Global Reach
                  </span>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-muted rounded-2xl transform rotate-3 -z-10 opacity-20" />
          </div>
        </div>

        {/* Availability Indicator - Bottom Right */}
        <div className="absolute bottom-8 right-8 text-right">
          <p className="text-sm text-muted-foreground mb-2 tracking-wider">
            AVAILABLE FOR FREELANCE WORK
          </p>
          <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-foreground tracking-tighter">
            JULY &apos;25
          </div>
        </div>
      </div>
    </section>
  );
};
