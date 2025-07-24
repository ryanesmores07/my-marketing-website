import React from "react";
import Link from "next/link";

interface CTAProps {
  locale?: "en" | "jp";
}

const getCurrentMonthYear = (locale: string = "en") => {
  const months: Record<"en" | "jp", string[]> = {
    en: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    jp: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
  };
  const now = new Date();
  const year = now.getFullYear().toString().slice(-2);
  const isSupportedLocale = (l: string): l is "en" | "jp" =>
    l === "en" || l === "jp";
  const monthList = isSupportedLocale(locale) ? months[locale] : months["en"];
  return { month: monthList[now.getMonth()], year };
};

const CTA = ({ locale = "en" }: CTAProps) => {
  const { month, year } = getCurrentMonthYear(locale);
  const content = {
    en: {
      subtitle: "(Need an unfair advantage?)",
      heading: "LET'S MAKE IT HAPPEN",
      button: "BOOK A CALL ↗",
      working: "Working Globally",
      available: `Available ${month} '${year}`,
      inquiries: "FOR FURTHER INQUIRIES",
      email: "mytokyowebdev@ernieryan.dev",
    },
    jp: {
      subtitle: "（他社にない強みが必要ですか？）",
      heading: "一緒に実現しましょう",
      button: "相談予約 ↗",
      working: "世界中で対応",
      available: `${month} '${year} 受付中`,
      inquiries: "お問い合わせ先",
      email: "mytokyowebdev@ernieryan.dev",
    },
  };
  const t = content[locale] || content.en;

  return (
    <section className="relative min-h-[calc(100vh-100px)] flex flex-col justify-center items-center bg-background text-neutral-200 px-4">
      {/* Subtitle */}
      <span
        className="mb-2 text-sm tracking-widest text-neutral-400 text-center"
        aria-label={t.subtitle}
      >
        {t.subtitle}
      </span>
      {/* Main Heading */}
      <h1 className="text-6xl md:text-8xl font-bold text-center leading-none mb-8">
        {t.heading.split(" ").map((word, i) => (
          <React.Fragment key={i}>
            {word}
            {i === 1 ? <br /> : " "}
          </React.Fragment>
        ))}
      </h1>
      {/* CTA Button */}
      <Link
        href="/contact"
        className="mt-2 px-14 py-6 rounded-full bg-neutral-800 text-xl font-bold shadow-lg transition hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600"
        tabIndex={0}
        aria-label={t.button}
      >
        {t.button}
      </Link>
      {/* Bottom Left: Working Globally & Available Date */}
      <div className="absolute left-4 bottom-4 flex flex-col items-start text-xs text-neutral-400">
        <span className="mb-0.5 flex items-center gap-1">
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
            className="inline-block mr-1"
          >
            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          {t.working}
        </span>
        <span className="opacity-80">
          {locale === "jp"
            ? `${month} '${year} 受付中`
            : `Available ${month} '${year}`}
        </span>
      </div>
      {/* Bottom Right: Contact Email */}
      <div className="absolute right-4 bottom-4 text-xs text-neutral-400 text-right">
        <span className="block">{t.inquiries}</span>
        <a
          href={`mailto:${t.email}`}
          className="underline underline-offset-2 hover:text-neutral-200 transition"
          tabIndex={0}
          aria-label={`Email ${t.email}`}
        >
          ↳ {t.email}
        </a>
      </div>
    </section>
  );
};

export { CTA };
