import Image from "next/image";

interface AboutMeProps {
  locale?: "en" | "jp";
}

export const AboutMe = ({ locale = "en" }: AboutMeProps) => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
        <div className="w-96 h-96 bg-accent rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="relative bg-card rounded-3xl shadow-2xl p-6 border border-border">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/ryan-main.jpg"
                    alt={locale === "jp" ? "エルニー・ライアン" : "Ernie Ryan"}
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover filter grayscale"
                    priority
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {locale === "jp" ? "東京在住" : "Tokyo Based"}
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-muted rounded-3xl transform -rotate-2 -z-10 opacity-20" />

              {/* Floating Info Cards */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-4 border border-border rotate-[-2deg]">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-card-foreground">
                    {locale === "jp" ? "7年以上の経験" : "7+ Years Experience"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Large Typography */}
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-none tracking-tight">
                {locale === "jp" ? (
                  <>
                    デザイナー、
                    <br />
                    デベロッパー、
                    <br />
                    クリエイター
                  </>
                ) : (
                  <>
                    DESIGNER,
                    <br />
                    DEVELOPER,
                    <br />
                    CREATOR
                  </>
                )}
              </h2>
            </div>

            {/* About Me Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-accent text-accent-foreground ring-1 ring-inset ring-border">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {locale === "jp" ? "（ABOUT ME）" : "(ABOUT ME)"}
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {locale === "jp" ? (
                  <>
                    <p className="text-lg">
                      東京を拠点に7年以上、日本と海外をつなぐShopifyストアや
                      バイリンガル（日本語・英語）のランディングページ制作に特化して活動しています。
                      お客様のグローバルなビジネス展開をデザインと開発の両面からサポートします。
                    </p>
                    <p>
                      日本の「おもてなし」を大切にし、お客様の課題を自分ごととして捉え、
                      望まれる結果が出るまで徹底してサポートを続けるのが私のこだわりです。
                    </p>
                    <p>
                      仕事を離れると、ジムでトレーニングをしたり、
                      冬は日本の美しい山でスノーボードを楽しんだりして過ごしています。
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-lg">
                      With over 7 years of experience living and working in
                      Tokyo, Japan, I specialize in creating localized Shopify
                      ecommerce stores and bilingual (English/Japanese) landing
                      pages tailored to startups and businesses aiming to expand
                      their reach globally.
                    </p>
                    <p>
                      Passionate about both design and development, I adopt
                      Japan&apos;s customer-first philosophy, making your goals
                      my own. Every project is an opportunity to solve your
                      business challenges, and I won&apos;t stop until we
                      achieve the results you envision.
                    </p>
                    <p>
                      When I&apos;m not building websites, you&apos;ll find me
                      hitting the gym or snowboarding on Japan&apos;s beautiful
                      mountain slopes.
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Specialties */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">
                {locale === "jp" ? "得意分野:" : "Specialties:"}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">
                    {locale === "jp"
                      ? "Shopifyを活用した多言語対応ECサイト制作（日・英）"
                      : "Shopify ecommerce stores (Japanese & English localization)"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">
                    {locale === "jp"
                      ? "コンバージョン重視のランディングページ制作"
                      : "Conversion-focused landing pages"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">
                    {locale === "jp"
                      ? "越境デジタルソリューション"
                      : "Cross-border digital solutions"}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-left">
                <div className="text-2xl lg:text-3xl font-black text-primary mb-1">
                  7<span className="text-accent">+</span>
                </div>
                <div className="text-xs text-muted-foreground leading-tight">
                  {locale === "jp" ? "年の経験" : "Years Experience"}
                </div>
              </div>
              <div className="text-left">
                <div className="text-2xl lg:text-3xl font-black text-primary mb-1">
                  100<span className="text-accent">+</span>
                </div>
                <div className="text-xs text-muted-foreground leading-tight">
                  {locale === "jp" ? "プロジェクト" : "Projects Completed"}
                </div>
              </div>
              <div className="text-left">
                <div className="text-2xl lg:text-3xl font-black text-primary mb-1">
                  🇯🇵🇺🇸
                </div>
                <div className="text-xs text-muted-foreground leading-tight">
                  {locale === "jp" ? "日米市場" : "JP ⇄ US Markets"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
