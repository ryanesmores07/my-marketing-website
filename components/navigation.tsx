"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeSwitcher } from "@/components/theme-switcher";

interface NavigationProps {
  locale: string;
}

export const Navigation = ({ locale }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if we're on a project detail page
  const isProjectDetailPage =
    pathname.includes("/projects/") && !pathname.endsWith("/projects");

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
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

          {/* Desktop Navigation */}
          {!isProjectDetailPage && (
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(item.href);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Language Switcher, Theme Switcher & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Globe className="h-4 w-4 mr-2" />
                  {locale.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/en">English</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/jp">日本語</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ThemeSwitcher />

            {!isProjectDetailPage && (
              <Button asChild>
                <a href="#cta">
                  {locale === "jp" ? "開始する" : "Get Started"}
                </a>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              {!isProjectDetailPage &&
                navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      const element = document.querySelector(item.href);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {item.label}
                  </Link>
                ))}

              {/* Mobile Language Switcher & Theme */}
              <div className="pt-4 pb-2 border-t border-border mt-4">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-muted-foreground text-sm font-medium">
                    Language
                  </span>
                  <div className="flex space-x-2">
                    <Link
                      href="/en"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      EN
                    </Link>
                    <Link
                      href="/jp"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      JP
                    </Link>
                  </div>
                </div>

                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-muted-foreground text-sm font-medium">
                    Theme
                  </span>
                  <ThemeSwitcher />
                </div>
              </div>

              {!isProjectDetailPage && (
                <div className="px-3 py-2">
                  <Button asChild className="w-full">
                    <Link
                      href="#cta"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMenuOpen(false);
                        const element = document.querySelector("#cta");
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {locale === "jp" ? "開始する" : "Get Started"}
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
