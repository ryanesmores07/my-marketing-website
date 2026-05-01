"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { NavCTAButton } from "@/components/nav-cta-button";
import { useActiveSection } from "@/lib/use-active-section";

interface NavigationItem {
  href: string;
  label: string;
}

interface NavigationClientProps {
  navigationItems: NavigationItem[];
  locale: string;
}

const SCROLL_RESTORE_KEY = "lang-swap-scrollY";

export const NavigationClient = ({
  navigationItems,
  locale,
}: NavigationClientProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isOnHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  const sectionIds = useMemo(
    () => navigationItems.map((item) => item.href.replace(/^#/, "")),
    [navigationItems]
  );
  const activeSection = useActiveSection(sectionIds);

  const resolveHref = (hash: string) =>
    isOnHome ? hash : `/${locale}${hash}`;

  const copy = {
    language: locale === "jp" ? "言語" : "Language",
    theme: locale === "jp" ? "テーマ" : "Theme",
    toggleMenu: locale === "jp" ? "メニューを開閉" : "Toggle menu",
    changeLanguage: locale === "jp" ? "言語を変更" : "Change language",
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleScrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLanguageSwitch = (nextLocale: string) => {
    if (typeof window === "undefined" || nextLocale === locale) return;

    try {
      sessionStorage.setItem(
        SCROLL_RESTORE_KEY,
        JSON.stringify({
          y: window.scrollY,
          section: activeSection,
          ts: Date.now(),
        })
      );
      window.localStorage.setItem("preferredLocale", nextLocale);
    } catch {
      // Storage access can fail in private mode or restricted environments.
    }
  };

  const localeHref = (nextLocale: string) => {
    if (!isOnHome) {
      const rest = pathname?.replace(/^\/(en|jp)/, "") ?? "";
      return `/${nextLocale}${rest}`;
    }
    return activeSection ? `/${nextLocale}#${activeSection}` : `/${nextLocale}`;
  };

  const handleLocaleChange = (nextLocale: string) => {
    handleLanguageSwitch(nextLocale);
    if (nextLocale === locale) return;

    window.location.assign(localeHref(nextLocale));
  };

  const handleDesktopLanguageToggle = () => {
    handleLocaleChange(locale === "jp" ? "en" : "jp");
  };

  const navLinkClass = (href: string, base: string, activeColor: string) => {
    const id = href.replace(/^#/, "");
    const isActive = isOnHome && id === activeSection;
    return `${base} ${isActive ? activeColor : "text-muted-foreground"}`;
  };

  return (
    <>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          {navigationItems.map((item) => {
            const id = item.href.replace(/^#/, "");
            const isActive = isOnHome && id === activeSection;
            const href = resolveHref(item.href);

            return (
              <Link
                key={item.href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={navLinkClass(
                  item.href,
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                  "text-foreground"
                )}
                onClick={(e) => {
                  if (!isOnHome) return;
                  e.preventDefault();
                  handleScrollToSection(item.href);
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="hidden items-center space-x-3 md:flex">
        <Button
          variant="outline"
          size="sm"
          aria-label={copy.changeLanguage}
          onPointerDown={(event) => {
            event.preventDefault();
            handleDesktopLanguageToggle();
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              handleDesktopLanguageToggle();
            }
          }}
        >
          <Globe className="mr-2 h-4 w-4" aria-hidden="true" />
          {locale.toUpperCase()}
        </Button>

        <ThemeSwitcher />

        <NavCTAButton locale={locale} />
      </div>

      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMenu}
          aria-label={copy.toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-16 z-50 border-b border-border bg-background md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigationItems.map((item) => {
              const id = item.href.replace(/^#/, "");
              const isActive = isOnHome && id === activeSection;
              const href = resolveHref(item.href);

              return (
                <Link
                  key={item.href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={navLinkClass(
                    item.href,
                    "block rounded-md px-3 py-2 text-base font-medium transition-colors hover:text-foreground",
                    "text-foreground"
                  )}
                  onClick={(e) => {
                    if (!isOnHome) {
                      setIsMenuOpen(false);
                      return;
                    }
                    e.preventDefault();
                    setIsMenuOpen(false);
                    handleScrollToSection(item.href);
                  }}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-4 border-t border-border pb-2 pt-4">
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm font-medium text-muted-foreground">
                  {copy.language}
                </span>
                <div className="flex space-x-2">
                  <Link
                    href={localeHref("en")}
                    lang="en"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    onClick={(event) => {
                      event.preventDefault();
                      handleLocaleChange("en");
                      setIsMenuOpen(false);
                    }}
                  >
                    EN
                  </Link>
                  <Link
                    href={localeHref("jp")}
                    lang="ja"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    onClick={(event) => {
                      event.preventDefault();
                      handleLocaleChange("jp");
                      setIsMenuOpen(false);
                    }}
                  >
                    JP
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm font-medium text-muted-foreground">
                  {copy.theme}
                </span>
                <ThemeSwitcher />
              </div>
            </div>

            <div className="px-3 py-2">
              <NavCTAButton
                locale={locale}
                fullWidth={true}
                onClose={() => setIsMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
