import Link from "next/link";
import { Star } from "lucide-react";

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
      en: "Ryan is a professional Shopify developer who adheres to agreed upon deadlines and budget without issue. Ryan delivered excellent work exactly to specification and communicated with us frequently over the course of the job. Very much looking forward to working with Ryan again in the near future. Highly recommended.",
      jp: "Ryanさんは、合意した納期と予算をしっかり守って進めてくれるShopify開発者です。要件どおりの高品質な仕事をしてくれ、進行中のコミュニケーションもとても丁寧でした。近いうちにまたお願いしたいと思っています。自信を持っておすすめできます。",
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
      jp: "Ernie Ryanさんはコミュニケーションがとても丁寧で、返信も早く、仕上がったWebサイトにもとても満足しています。一緒に仕事がしやすい方です。",
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
      en: "Absolutely amazing work, very happy with everything.",
      jp: "本当に素晴らしい仕事でした。すべてにとても満足しています。",
    },
    rating: 5,
  },
];

export const Testimonials = ({ locale = "en" }: TestimonialProps) => {
  const copy = {
    badge: locale === "jp" ? "クライアントの声" : "Client Feedback",
    title: locale === "jp" ? "お客様の声" : "What Clients Say",
    description:
      locale === "jp"
        ? "ECサイト構築や海外向けWeb案件でご一緒したクライアントからの声です。"
        : "Feedback from clients I supported on ecommerce and international web projects.",
    reviewLabel: locale === "jp" ? "5段階評価" : "5-star feedback",
    upworkProfile:
      locale === "jp" ? "Upworkプロフィールを見る" : "View Upwork Profile",
  };

  return (
    <section id="testimonials" className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center lg:mb-16">
          <div className="mb-6 inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground ring-1 ring-inset ring-border">
            <span className="relative mr-2 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {copy.badge}
          </div>

          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            {copy.title}
          </h2>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground">
            {copy.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={`testimonial-${testimonial.id}`}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card via-card to-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute left-0 top-0 h-0.5 w-full origin-center scale-x-0 bg-gradient-to-r from-transparent via-primary/60 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
              <div className="absolute left-0 top-1/4 h-1/2 w-0.5 bg-gradient-to-b from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute right-0 top-1/4 h-1/2 w-0.5 bg-gradient-to-b from-transparent via-primary/50 to-transparent opacity-0 transition-opacity delay-200 duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-4">
                  <div className="relative inline-block">
                    <h4 className="relative z-10 mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-lg font-bold text-transparent transition-all duration-500 group-hover:from-accent group-hover:to-primary">
                      {copy.reviewLabel}
                    </h4>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  <div className="mb-3 flex items-center space-x-1">
                    {Array.from({ length: testimonial.rating }, (_, i) => i + 1).map(
                      (star) => (
                        <div
                          key={`${testimonial.id}-star-${star}`}
                          className="relative"
                        >
                          <Star
                            className="relative z-10 h-5 w-5 fill-current text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                            style={{ transitionDelay: `${star * 50}ms` }}
                          />
                          <div
                            className="absolute inset-0 h-5 w-5 bg-yellow-400/30 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"
                            style={{ transitionDelay: `${star * 50}ms` }}
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="relative mb-6">
                  <div className="absolute -left-2 top-0 h-full w-1 rounded-full bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <p className="relative pl-4 text-sm leading-relaxed text-card-foreground transition-colors duration-300 group-hover:text-foreground">
                    {testimonial.content[
                      locale as keyof typeof testimonial.content
                    ] || testimonial.content.en}
                  </p>
                </div>

                <div className="relative mt-auto border-t border-border/60 pt-4">
                  <div className="absolute left-0 top-0 h-px w-full origin-center scale-x-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-transform delay-300 duration-700 group-hover:scale-x-100" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative text-sm font-bold text-card-foreground transition-colors duration-300 group-hover:text-primary">
                        {testimonial.name[
                          locale as keyof typeof testimonial.name
                        ] || testimonial.name.en}
                        <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:scale-x-100" />
                      </div>
                    </div>

                    <div className="group/badge relative">
                      <div className="flex items-center rounded-full border border-green-200/50 bg-gradient-to-r from-green-50/80 to-green-100/80 px-3 py-1.5 text-xs text-green-700 backdrop-blur-sm transition-all duration-300 group-hover:border-green-400/50 group-hover:shadow-lg group-hover:shadow-green-500/20 dark:border-green-800/50 dark:from-green-950/50 dark:to-green-900/50 dark:text-green-300">
                        <svg
                          className="mr-1.5 h-3 w-3 text-green-600 transition-transform duration-300 group-hover:scale-110 dark:text-green-400"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 2.984 0 5.404-2.420 5.404-5.404.001-2.984-2.419-5.403-5.403-5.403z" />
                        </svg>
                        <span className="font-medium">Upwork</span>
                      </div>
                      <div className="absolute inset-0 rounded-full bg-green-500/20 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-50" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 bg-gradient-to-r from-transparent via-accent/60 to-transparent transition-transform delay-100 duration-700 group-hover:scale-x-100" />
              <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-gradient-to-br from-primary to-accent opacity-0 transition-opacity delay-200 duration-500 group-hover:opacity-60" />
              <div className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-accent to-primary opacity-0 transition-opacity delay-400 duration-500 group-hover:opacity-40" />
            </div>
          ))}
        </div>

        <div className="mb-6 mt-12 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 -m-3">
              <div className="absolute inset-0 animate-spin-slow rounded-full border border-primary/20" />
              <div className="absolute inset-1 animate-spin-reverse-slow rounded-full border border-accent/30" />
              <div className="absolute inset-2 animate-pulse rounded-full border border-primary/10" />
            </div>

            <div className="absolute inset-0 animate-pulse rounded-lg bg-gradient-to-r from-green-500/10 via-primary/10 to-green-500/10 blur-xl" />

            <Link
              href="https://www.upwork.com/freelancers/~01ef65f6b564926f0f"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center rounded-lg bg-gradient-to-r from-green-600 to-green-700 px-4 py-2.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:from-green-700 hover:to-green-800 hover:shadow-xl hover:shadow-green-500/30"
            >
              <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:animate-scan group-hover:opacity-100" />

              <svg
                className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 2.984 0 5.404-2.420 5.404-5.404.001-2.984-2.419-5.403-5.403-5.403z" />
              </svg>
              <span className="text-sm">{copy.upworkProfile}</span>
              <svg
                className="ml-1.5 h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5"
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

              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:animate-scan-reverse group-hover:opacity-100" />
            </Link>

            <div className="absolute -right-1 -top-1 h-2.5 w-2.5 animate-float rounded-full bg-gradient-to-br from-green-400 to-green-600 opacity-60" />
            <div className="absolute -bottom-1 -left-1 h-2 w-2 animate-float-delay rounded-full bg-gradient-to-br from-accent to-primary opacity-40" />
            <div className="absolute -right-2 top-1/2 h-1 w-1 animate-pulse rounded-full bg-gradient-to-br from-primary to-green-500 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};
