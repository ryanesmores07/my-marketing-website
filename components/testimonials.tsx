import { Star } from "lucide-react";
import Link from "next/link";

interface TestimonialProps {
  locale?: string;
}

interface Testimonial {
  id: string;
  name: {
    en: string;
    jp: string;
  };
  content: {
    en: string;
    jp: string;
  };
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: {
      en: "Upwork Client",
      jp: "Upworkクライアント",
    },

    content: {
      en: "Ryan is a professional Shopify developer who adheres to agreed upon deadlines and budget without issue. Ryan delivered excellent work exactly to specification and communicated with us frequently over the course of the job. Very much looking forward to working with Ryan again in the near future! Highly recommended.",
      jp: "ライアンさんは非常にプロフェッショナルなShopify開発者で、納期や予算をきちんと守ってくれました。こちらの要望通りに高品質な成果物を納品してくれただけでなく、進行中も頻繁に連絡を取り合い、安心してプロジェクトを進められました。またぜひ一緒にお仕事したいと思っています。本当におすすめの開発者です！",
    },

    rating: 5,
  },
  {
    id: "2",
    name: {
      en: "Upwork Client",
      jp: "Upworkクライアント",
    },

    content: {
      en: "Ernie Ryan is great with his communication. He responds in a timely manner and created a website that I was very pleased with. Great guy to work with.",
      jp: "エルニー・ライアンさんはコミュニケーションがとてもスムーズで、いつも迅速に返信してくれました。仕上げてくれたウェブサイトも大満足の出来で、一緒に仕事をするのがとても楽しい方でした。",
    },

    rating: 5,
  },
  {
    id: "3",
    name: {
      en: "Upwork Client",
      jp: "Upworkクライアント",
    },
    content: {
      en: "Absolutely amazing work, very happy with everything!",
      jp: "すべてにおいて大満足です！素晴らしい仕事をしていただき、本当にありがとうございました！",
    },

    rating: 5,
  },
];

export const Testimonials = ({ locale = "en" }: TestimonialProps) => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-accent text-accent-foreground ring-1 ring-inset ring-border mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {locale === "jp" ? "お客様の声" : "Client Success Stories"}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {locale === "jp" ? "お客様の声" : "Don’t just take my word for it"}
          </h2>

          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            {locale === "jp"
              ? "クライアントからの信頼と満足度を証明する実績をご覧ください。"
              : "See what clients say about working with me on their international projects."}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={`testimonial-${testimonial.id}`}
              className="relative bg-gradient-to-br from-card via-card to-card/50 rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 group overflow-hidden backdrop-blur-sm"
            >
              {/* Animated Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Top Border Animation */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>

              {/* Side Accent Lines */}
              <div className="absolute left-0 top-1/4 w-0.5 h-1/2 bg-gradient-to-b from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute right-0 top-1/4 w-0.5 h-1/2 bg-gradient-to-b from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>

              {/* Content Container */}
              <div className="relative z-10">
                {/* Success Header with Glow Effect */}
                <div className="mb-4">
                  <div className="relative inline-block">
                    <h4 className="text-primary font-bold text-lg mb-2 relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-500">
                      {locale === "jp"
                        ? "プロジェクト完了！"
                        : "Completed successfully!"}
                    </h4>
                    {/* Glow effect behind text */}
                    <div className="absolute inset-0 blur-md bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Enhanced Star Rating */}
                  <div className="flex items-center mb-3 space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="relative">
                        <Star
                          className="w-5 h-5 text-yellow-400 fill-current relative z-10 group-hover:scale-110 transition-transform duration-300"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                        <div
                          className="absolute inset-0 w-5 h-5 bg-yellow-400/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Review Content */}
                <div className="mb-6 relative">
                  <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <p className="text-card-foreground leading-relaxed text-sm pl-4 group-hover:text-foreground transition-colors duration-300 relative">
                    {testimonial.content[
                      locale as keyof typeof testimonial.content
                    ] || testimonial.content.en}
                  </p>
                </div>

                {/* Enhanced Client Info Section */}
                <div className="border-t border-gradient-to-r from-transparent via-border to-transparent pt-4 mt-auto relative">
                  {/* Scanning line effect on divider */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-300"></div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {/* Client Name with Enhanced Typography */}
                      <div>
                        <div className="font-bold text-card-foreground text-sm group-hover:text-primary transition-colors duration-300 relative">
                          {testimonial.name[
                            locale as keyof typeof testimonial.name
                          ] || testimonial.name.en}
                          {/* Underline effect */}
                          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Upwork Badge */}
                    <div className="relative group/badge">
                      <div className="flex items-center text-xs bg-gradient-to-r from-green-50/80 to-green-100/80 dark:from-green-950/50 dark:to-green-900/50 text-green-700 dark:text-green-300 px-3 py-1.5 rounded-full border border-green-200/50 dark:border-green-800/50 backdrop-blur-sm group-hover:border-green-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/20">
                        <svg
                          className="w-3 h-3 mr-1.5 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 2.984 0 5.404-2.420 5.404-5.404.001-2.984-2.419-5.403-5.403-5.403z" />
                        </svg>
                        <span className="font-medium">Upwork</span>
                      </div>
                      {/* Badge glow effect */}
                      <div className="absolute inset-0 rounded-full bg-green-500/20 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Accent Line with Animation */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/60 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>

              {/* Corner Accent Elements */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-primary to-accent rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 delay-200"></div>
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-gradient-to-br from-accent to-primary rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 delay-400"></div>
            </div>
          ))}
        </div>

        {/* Upwork Profile Link */}
        <div className="text-center mt-12 mb-6">
          {/* Enhanced Compact CTA Container */}
          <div className="relative inline-block">
            {/* Animated Background Rings */}
            <div className="absolute inset-0 -m-3">
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow"></div>
              <div className="absolute inset-1 rounded-full border border-accent/30 animate-spin-reverse-slow"></div>
              <div className="absolute inset-2 rounded-full border border-primary/10 animate-pulse"></div>
            </div>

            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-primary/10 to-green-500/10 rounded-lg blur-xl animate-pulse"></div>

            {/* Compact CTA Button */}
            <Link
              href="https://www.upwork.com/freelancers/~01ef65f6b564926f0f"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center px-4 py-2.5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group backdrop-blur-sm"
            >
              {/* Scanning Line Effect */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-300"></div>

              <svg
                className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 2.984 0 5.404-2.420 5.404-5.404.001-2.984-2.419-5.403-5.403-5.403z" />
              </svg>
              <span className="text-sm">
                {locale === "jp" ? "Upworkで確認" : "View Upwork Profile"}
              </span>
              <svg
                className="w-3 h-3 ml-1.5 group-hover:translate-x-0.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>

              {/* Bottom Scanning Line */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan-reverse transition-opacity duration-300"></div>
            </Link>

            {/* Floating Tech Elements */}
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-60 animate-float"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-br from-accent to-primary rounded-full opacity-40 animate-float-delay"></div>
            <div className="absolute top-1/2 -right-2 w-1 h-1 bg-gradient-to-br from-primary to-green-500 rounded-full opacity-50 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
