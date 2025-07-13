"use client";

import Link from "next/link";

interface FooterScrollLinksProps {
  href: string;
  label: string;
}

export const FooterScrollLinks = ({ href, label }: FooterScrollLinksProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link
      href={href}
      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
      onClick={handleClick}
    >
      {label}
    </Link>
  );
};
