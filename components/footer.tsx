"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface FooterProps {
  locale: string;
}

const menuLinks = [
  { href: "#", label: { en: "Home", jp: "ホーム" } },
  { href: "#services", label: { en: "Services", jp: "サービス" } },
  { href: "#projects", label: { en: "Works", jp: "実績" } },
  { href: "#about", label: { en: "About", jp: "概要" } },
  { href: "#testimonials", label: { en: "Testimonials", jp: "お客様の声" } },
  { href: "#cta", label: { en: "Contact", jp: "お問い合わせ" } },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/ryanesmores/", label: "Linkedin" },
  { href: "https://github.com/ryanesmores07", label: "Github" },
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
          second: "2-digit",
        }) + ",  JST"
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);
  return <span className="font-mono text-xs text-foreground">{time}</span>;
}

export const Footer = ({ locale }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted/30 border-t border-border w-full">
      {/* Divider */}
      <div className="border-t border-border w-full mb-8"></div>
      {/* Main Columns */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-start gap-12 pb-12">
        {/* Menu */}
        <div className="flex-1 min-w-[160px]">
          <h3 className="font-semibold mb-2 text-foreground">Menu</h3>
          <ul className="space-y-1">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:underline text-foreground text-sm"
                >
                  {link.label[locale as "en" | "jp"] || link.label.en}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Socials */}
        <div className="flex-1 min-w-[160px]">
          <h3 className="font-semibold mb-2 text-foreground">Socials</h3>
          <ul className="space-y-1">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-foreground text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Bottom Row */}
      <div className="w-full flex flex-col md:flex-row justify-between items-end max-w-7xl mx-auto px-4 pb-6">
        {/* Copyright */}
        <div className="flex-1 flex items-end">
          <span className="text-2xl md:text-3xl font-bold text-foreground leading-none">
            © {currentYear} Ernie Ryan
            <br />
            <span className="text-base font-normal">All rights reserved.</span>
          </span>
        </div>
        {/* Local Time */}
        <div className="flex-1 flex flex-col items-center justify-end pb-2">
          <span className="uppercase text-xs font-semibold text-foreground mb-1">
            Local Time
          </span>
          <LocalTime />
        </div>
        {/* Scroll to Top */}
        <div className="flex-1 flex justify-end items-end">
          <div className="relative group">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="rounded-full border border-muted-foreground/40 bg-muted-foreground/30 hover:bg-muted-foreground/80 transition w-16 h-16 flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-muted-foreground group-hover:-translate-y-1 group-active:scale-95"
              aria-label={
                locale === "jp" ? "ページトップに戻る" : "Scroll to top"
              }
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
                {locale === "jp"
                  ? "ページの最上部にスクロールします"
                  : "Scrolls to the top of the page"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
