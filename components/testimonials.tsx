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
  position: {
    en: string;
    jp: string;
  };
  company: {
    en: string;
    jp: string;
  };
  content: {
    en: string;
    jp: string;
  };
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: {
      en: "Upwork Client",
      jp: "Upworkクライアント",
    },
    position: {
      en: "Business Owner",
      jp: "事業主",
    },
    company: {
      en: "Ceramics Store",
      jp: "セラミックストア",
    },
    content: {
      en: "Ryan is a professional Shopify developer who adheres to agreed upon deadlines and budget without issue. Ryan delivered excellent work exactly to specification and communicated with us frequently over the course of the job. Very much looking forward to working with Ryan again in the near future! Highly recommended.",
      jp: "ライアンは、合意された期限と予算を問題なく守るプロフェッショナルなShopify開発者です。ライアンは仕様通りに優れた作業を提供し、作業中頻繁にコミュニケーションを取ってくれました。近い将来、ライアンと再び働くことを非常に楽しみにしています！強くお勧めします。",
    },
    avatar: "/images/testimonials/client1.jpg",
    rating: 5,
  },
  {
    id: "2",
    name: {
      en: "Upwork Client",
      jp: "Upworkクライアント",
    },
    position: {
      en: "Business Owner",
      jp: "事業主",
    },
    company: {
      en: "Fashion/Apparel Store",
      jp: "ファッション・アパレルストア",
    },
    content: {
      en: "Ernie Ryan is great with his communication. He responds in a timely manner and created a website that I was very pleased with. Great guy to work with.",
      jp: "エルニー・ライアンはコミュニケーションが素晴らしいです。彼はタイムリーに返答し、私が非常に満足するウェブサイトを作成してくれました。一緒に働くのに最適な人です。",
    },
    avatar: "/images/testimonials/client2.jpg",
    rating: 5,
  },
  {
    id: "3",
    name: {
      en: "Upwork Client",
      jp: "Upworkクライアント",
    },
    position: {
      en: "Business Owner",
      jp: "事業主",
    },
    company: {
      en: "Shopify App Integration",
      jp: "Shopifyアプリ統合",
    },
    content: {
      en: "Absolutely amazing work, very happy with everything!",
      jp: "本当に素晴らしい仕事で、すべてに大変満足しています！",
    },
    avatar: "/images/testimonials/client3.jpg",
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
            {locale === "jp" ? "お客様の声" : "Don't take my word for it"}
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {locale === "jp"
              ? "私の言葉だけでなく、お客様のリアルな声をご覧ください。"
              : "Here’s what my clients say about my work and our collaboration."}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-card-foreground mb-8 leading-relaxed">
                &ldquo;
                {testimonial.content[
                  locale as keyof typeof testimonial.content
                ] || testimonial.content.en}
                &rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {(
                      testimonial.name[
                        locale as keyof typeof testimonial.name
                      ] || testimonial.name.en
                    ).charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">
                    {testimonial.name[
                      locale as keyof typeof testimonial.name
                    ] || testimonial.name.en}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position[
                      locale as keyof typeof testimonial.position
                    ] || testimonial.position.en}
                    ,{" "}
                    {testimonial.company[
                      locale as keyof typeof testimonial.company
                    ] || testimonial.company.en}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upwork Profile Link */}
        <div className="text-center mt-16 mb-8">
          <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20 hover:bg-green-100 transition-colors">
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 2.984 0 5.404-2.420 5.404-5.404.001-2.984-2.419-5.403-5.403-5.403z" />
            </svg>
            <Link
              href="https://www.upwork.com/freelancers/~01ef65f6b564926f0f"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {locale === "jp"
                ? "Upworkでもっと多くのレビューを見る"
                : "View more reviews on Upwork"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
