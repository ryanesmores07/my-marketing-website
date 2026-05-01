"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface FooterScrollLinksProps {
  href: string;
  label: string;
  locale: string;
  className?: string;
}

export const FooterScrollLinks = ({
  href,
  label,
  locale,
  className,
}: FooterScrollLinksProps) => {
  const pathname = usePathname();
  const isOnHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  const isHash = href.startsWith("#");
  const resolvedHref = isHash && !isOnHome ? `/${locale}${href}` : href;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHash && isOnHome) {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link
      href={resolvedHref}
      className={
        className ??
        "text-sm text-muted-foreground transition-colors hover:text-foreground"
      }
      onClick={handleClick}
    >
      {label}
    </Link>
  );
};
