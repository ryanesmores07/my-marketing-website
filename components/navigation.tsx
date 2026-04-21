import Link from "next/link";
import { NavigationClient } from "@/components/navigation-client";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";

interface NavigationProps {
  locale: string;
}

export const Navigation = ({ locale }: NavigationProps) => {
  const navigationItems = [
    { href: "#hero", label: locale === "jp" ? "ホーム" : "Home" },
    { href: "#services", label: locale === "jp" ? "サービス" : "Services" },
    { href: "#projects", label: locale === "jp" ? "実績" : "Projects" },
    { href: "#about", label: locale === "jp" ? "プロフィール" : "About" },
    {
      href: "#testimonials",
      label: locale === "jp" ? "お客様の声" : "Testimonials",
    },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="shrink-0">
              <Link
                href={`/${locale}`}
                className="text-xl font-bold text-foreground transition-colors hover:text-primary"
                prefetch={false}
              >
                ernieryan.dev
              </Link>
            </div>

            <NavigationClient
              navigationItems={navigationItems}
              locale={locale}
            />
          </div>
        </div>
      </nav>
      <ScrollProgressBar />
    </>
  );
};
