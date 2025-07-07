import { services } from "@/content/services";

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
            {locale === "jp" ? "デジタルソリューション" : "How I Can Help You"}
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {locale === "jp"
              ? "あなたのビジネスを次のレベルに押し上げる包括的なデジタルサービス"
              : "Comprehensive digital services to elevate your business to the next level"}
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
                      className="group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/20 hover:bg-accent/50 transition-all duration-300"
                    >
                      {/* Sub Service Number */}
                      <div className="flex-shrink-0 w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {subService.number}
                      </div>

                      {/* Sub Service Title */}
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {subService.title[locale]}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-16 border-t border-border">
          <p className="text-muted-foreground mb-6 text-lg">
            {locale === "jp"
              ? "プロジェクトについて話し合いましょう"
              : "Ready to discuss your project?"}
          </p>
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            {locale === "jp" ? "相談を始める" : "Get Started"}
          </a>
        </div>
      </div>
    </section>
  );
};
