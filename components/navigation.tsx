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
    { href: "#projects", label: locale === "jp" ? "プロジェクト" : "Projects" },
    { href: "#about", label: locale === "jp" ? "概要" : "About" },
    {
      href: "#testimonials",
      label: locale === "jp" ? "お客様の声" : "Testimonials",
    },
  ];

  return (
    <>
      <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-md bg-background/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
              >
                YourBrand
              </Link>
            </div>

            {/* Pass navigation items and locale to client component for interactivity */}
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
