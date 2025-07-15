interface CTAProps {
  locale?: string;
}

export const CTA = ({ locale = "en" }: CTAProps) => {
  // Use site palette but new layout
  const content = {
    en: {
      subtitle: "Need an unfair advantage?",
      headline: "LET'S MAKE IT HAPPEN",
      button: "BOOK A CALL",
      leftTop: "Working Globally",
      // leftBottom will be dynamic
      rightTop: "FOR FURTHER INQUIRIES",
      rightBottom: "hello@yourdomain.com",
    },
    jp: {
      subtitle: "アドバンテージが必要ですか？",
      headline: "一緒に実現しましょう",
      button: "相談予約",
      leftTop: "グローバル対応",
      // leftBottom will be dynamic
      rightTop: "お問い合わせ",
      rightBottom: "hello@yourdomain.com",
    },
  };
  const c = content[locale as keyof typeof content] || content.en;

  // Dynamic leftBottom: Available [Month] '[YY]
  const now = new Date();
  const month = now.toLocaleString(locale === "jp" ? "ja-JP" : "en-US", {
    month: "long",
  });
  const year = now.getFullYear().toString().slice(-2);
  const leftBottom =
    locale === "jp"
      ? `${now.getFullYear()}年${now.getMonth() + 1}月より受付`
      : `Available ${month} '${year}`;

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-background text-foreground px-4">
      {/* Subtitle */}
      <div className="mb-2 text-center text-xs md:text-sm text-muted-foreground tracking-widest uppercase">
        {c.subtitle}
      </div>
      {/* Headline */}
      <h2 className="text-center font-black text-[clamp(2.5rem,8vw,6rem)] leading-none tracking-tight mb-8">
        {c.headline}
      </h2>
      {/* CTA Button */}
      <a
        href="#contact"
        className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-muted text-foreground font-bold text-lg shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        tabIndex={0}
        aria-label={c.button}
      >
        {c.button}
        <svg
          className="ml-2 w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
      {/* Bottom Left Info */}
      <div className="absolute left-4 bottom-4 text-xs text-muted-foreground space-y-1 bg-background/80 rounded-md px-3 py-2 border border-border/40 shadow-sm">
        <div>{c.leftTop}</div>
        <div className="opacity-80">{leftBottom}</div>
      </div>
      {/* Bottom Right Info */}
      <div className="absolute right-4 bottom-4 text-right text-xs text-muted-foreground space-y-1 bg-background/80 rounded-md px-3 py-2 border border-border/40 shadow-sm">
        <div className="uppercase tracking-widest font-semibold">
          {c.rightTop}
        </div>
        <div className="opacity-80">{c.rightBottom}</div>
      </div>
    </section>
  );
};
