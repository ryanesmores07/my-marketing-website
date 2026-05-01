"use client";

import { useEffect, useState } from "react";
import { FooterScrollLinks } from "@/components/footer-scroll-links";

interface FooterProps {
  locale: string;
}

const menuLinks = [
  { href: "#hero", label: { en: "Home", jp: "ホーム" } },
  { href: "#services", label: { en: "Services", jp: "サービス" } },
  { href: "#projects", label: { en: "Works", jp: "実績" } },
  { href: "#about", label: { en: "About", jp: "プロフィール" } },
  { href: "#testimonials", label: { en: "Testimonials", jp: "お客様の声" } },
  { href: "#cta", label: { en: "Contact", jp: "お問い合わせ" } },
];

const pageLinks = [
  {
    href: "/shopify-japan",
    label: { en: "Shopify Japan", jp: "Shopify Japan" },
  },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/ryanesmores/", label: "LinkedIn" },
  { href: "https://github.com/ryanesmores07", label: "GitHub" },
];

function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          timeZone: "Asia/Tokyo",
          hour: "2-digit",
          minute: "2-digit",
        }) + ", JST"
      );
    };

    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []);

  return <span className="font-mono text-xs text-foreground">{time}</span>;
}

export const Footer = ({ locale }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const copy = {
    menu: locale === "jp" ? "メニュー" : "Menu",
    socials: locale === "jp" ? "リンク" : "Links",
    localTime: locale === "jp" ? "Tokyo Time" : "Tokyo Time",
    allRights:
      locale === "jp" ? "無断転載を禁じます。" : "All rights reserved.",
    scrollToTop: locale === "jp" ? "ページ上部へ戻る" : "Scroll to top",
    scrollDescription:
      locale === "jp"
        ? "ページの先頭へスクロールします"
        : "Scrolls to the top of the page",
  };

  return (
    <footer className="w-full border-t border-border bg-muted/30">
      <div className="mb-8 w-full border-t border-border" />

      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 px-4 pb-12 lg:flex-row">
        <div className="min-w-[160px] flex-1">
          <h3 className="mb-2 font-semibold text-foreground">{copy.menu}</h3>
          <ul className="space-y-1">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <FooterScrollLinks
                  href={link.href}
                  label={link.label[locale as "en" | "jp"] || link.label.en}
                  locale={locale}
                  className="text-sm text-foreground hover:underline"
                />
              </li>
            ))}
            {pageLinks.map((link) => (
              <li key={link.href}>
                <FooterScrollLinks
                  href={`/${locale}${link.href}`}
                  label={link.label[locale as "en" | "jp"] || link.label.en}
                  locale={locale}
                  className="text-sm text-foreground hover:underline"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-[160px] flex-1">
          <h3 className="mb-2 font-semibold text-foreground">{copy.socials}</h3>
          <ul className="space-y-1">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between px-4 pb-6 md:flex-row">
        <div className="flex flex-1 items-end">
          <span className="text-2xl font-bold leading-none text-foreground md:text-3xl">
            © {currentYear} Ernie Ryan
            <br />
            <span className="text-base font-normal">{copy.allRights}</span>
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-end pb-2">
          <span className="mb-1 text-xs font-semibold uppercase text-foreground">
            {copy.localTime}
          </span>
          <LocalTime />
        </div>

        <div className="flex flex-1 items-end justify-end">
          <div className="group relative">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-muted-foreground/40 bg-muted-foreground/30 shadow-lg transition hover:-translate-y-1 hover:bg-muted-foreground/80 focus:outline-none focus:ring-2 focus:ring-muted-foreground focus:ring-offset-2 group-active:scale-95"
              aria-label={copy.scrollToTop}
              aria-describedby="scroll-top-description"
            >
              <svg
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform group-hover:-translate-y-1"
                aria-hidden="true"
              >
                <path
                  d="M12 19V5M5 12l7-7 7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span id="scroll-top-description" className="sr-only">
                {copy.scrollDescription}
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
