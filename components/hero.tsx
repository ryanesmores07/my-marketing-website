import Image from "next/image";
import { HeroCTAButton } from "@/components/hero-cta-button";

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
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
        <div className="w-72 h-72 bg-accent rounded-full blur-3xl opacity-70" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
        <div className="w-96 h-96 bg-muted rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
        {/* Large Name Display - Full Width */}
        <div className="mb-16 lg:mb-20 w-full flex justify-center">
          <h1 className="font-black text-foreground leading-none tracking-tighter whitespace-nowrap text-center text-[clamp(2rem,16vw,24rem)] ">
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
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">
                    {question}
                  </p>
                </div>
              ))}

              <div className="pt-6">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {currentContent.description}
                </p>
              </div>

              {/* CTA Section */}
              <div className="pt-8">
                <HeroCTAButton ctaText={currentContent.ctaText} />
              </div>
            </div>

            {/* Right Side - Futuristic Profile Section */}
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* Animated Background Orbs */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-60 h-60 bg-gradient-to-l from-accent/30 to-primary/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
              </div>

              {/* Main Profile Container */}
              <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96">
                {/* Rotating Border Ring */}
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin opacity-75"
                  style={{ animationDuration: "8s" }}
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
                      alt="Ernie Ryan"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/20 mix-blend-overlay"></div>
                  </div>
                </div>

                {/* Floating Tech Elements */}
                <div className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/50 animate-bounce border border-primary/30">
                  <span className="text-primary-foreground font-bold text-sm">
                    7+
                  </span>
                </div>

                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-lg shadow-accent/50 animate-bounce delay-500 border border-accent/30">
                  <span className="text-accent-foreground font-bold text-sm">
                    JP
                  </span>
                </div>

                <div className="absolute top-1/4 -left-8 w-12 h-12 bg-gradient-to-r from-muted to-muted/80 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-300 border border-border">
                  <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
                </div>

                <div className="absolute bottom-1/4 -right-8 w-10 h-10 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-700 border border-border">
                  <div className="w-2 h-2 bg-accent rounded-full animate-ping"></div>
                </div>

                {/* Scanning Line Effect */}
                <div className="absolute inset-4 rounded-full overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse opacity-60"></div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse delay-500 opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-primary mb-2">
              7+
            </div>
            <div className="text-sm text-muted-foreground">
              {locale === "jp" ? "年の経験" : "Years Experience"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-primary mb-2">
              50+
            </div>
            <div className="text-sm text-muted-foreground">
              {locale === "jp" ? "プロジェクト" : "Projects Completed"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-primary mb-2">
              2
            </div>
            <div className="text-sm text-muted-foreground">
              {locale === "jp" ? "言語対応" : "Languages Supported"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-primary mb-2">
              100%
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
