"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

interface FooterProps {
  locale: string;
}

export const Footer = ({ locale }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  // Check if we're on a project detail page
  const isProjectDetailPage =
    pathname.includes("/projects/") && !pathname.endsWith("/projects");

  const footerSections = [
    {
      title: locale === "jp" ? "サービス" : "Services",
      links: [
        {
          href: "#services",
          label: locale === "jp" ? "ウェブデザイン" : "Web Design",
        },
        {
          href: "#services",
          label: locale === "jp" ? "SEO最適化" : "SEO Optimization",
        },
        {
          href: "#services",
          label: locale === "jp" ? "コンテンツ作成" : "Content Writing",
        },
        {
          href: "#services",
          label: locale === "jp" ? "Eコマース" : "E-commerce",
        },
      ],
    },
    {
      title: locale === "jp" ? "会社情報" : "Company",
      links: [
        { href: "#about", label: locale === "jp" ? "概要" : "About Us" },
        { href: "#projects", label: locale === "jp" ? "実績" : "Our Work" },
        {
          href: "#testimonials",
          label: locale === "jp" ? "お客様の声" : "Testimonials",
        },
        { href: "#cta", label: locale === "jp" ? "お問い合わせ" : "Contact" },
      ],
    },
    {
      title: locale === "jp" ? "サポート" : "Support",
      links: [
        { href: "#cta", label: locale === "jp" ? "ヘルプ" : "Get Help" },
        { href: "#about", label: locale === "jp" ? "よくある質問" : "FAQ" },
        {
          href: "#",
          label: locale === "jp" ? "プライバシーポリシー" : "Privacy Policy",
        },
        { href: "#", label: locale === "jp" ? "利用規約" : "Terms of Service" },
      ],
    },
  ];

  const socialLinks = [
    { href: "https://github.com", icon: Github, label: "GitHub" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="text-2xl font-bold mb-4 block hover:text-secondary transition-colors"
              >
                YourBrand
              </Link>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                We create beautiful, functional websites that help your business
                grow. From design to development, we&apos;re your digital
                partner.
              </p>

              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center text-primary-foreground/80">
                  <Mail className="h-4 w-4 mr-3 text-primary-foreground/60" />
                  <span>hello@yourbrand.com</span>
                </div>
                <div className="flex items-center text-primary-foreground/80">
                  <Phone className="h-4 w-4 mr-3 text-primary-foreground/60" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-primary-foreground/80">
                  <MapPin className="h-4 w-4 mr-3 text-primary-foreground/60" />
                  <span>New York, NY</span>
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {!isProjectDetailPage &&
              footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold mb-4 text-primary-foreground">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href + link.label}>
                        <Link
                          href={link.href}
                          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                          onClick={(e) => {
                            if (link.href.startsWith("#")) {
                              e.preventDefault();
                              const element = document.querySelector(link.href);
                              element?.scrollIntoView({ behavior: "smooth" });
                            }
                          }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} YourBrand. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>

            {/* Language Links */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/en"
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                English
              </Link>
              <Link
                href="/ja"
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                日本語
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
