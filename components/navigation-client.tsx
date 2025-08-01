"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { NavCTAButton } from "@/components/nav-cta-button";

interface NavigationItem {
  href: string;
  label: string;
}

interface NavigationClientProps {
  navigationItems: NavigationItem[];
  locale: string;
}

export const NavigationClient = ({
  navigationItems,
  locale,
}: NavigationClientProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection(item.href);
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

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

        <NavCTAButton locale={locale} />
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

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  handleScrollToSection(item.href);
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
