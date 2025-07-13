import Link from "next/link";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";
import { FooterScrollLinks } from "@/components/footer-scroll-links";

interface FooterProps {
  locale: string;
}

export const Footer = ({ locale }: FooterProps) => {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors mb-4 block"
            >
              YourBrand
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {locale === "jp"
                ? "日本と世界を繋ぐクロスボーダーマーケティングのエキスパート。あなたのビジネスの成長をサポートします。"
                : "Cross-border marketing expert connecting Japan with the world. Helping your business grow globally."}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-3" />
                <span className="text-sm">hello@yourbrand.com</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-3" />
                <span className="text-sm">+81 3-1234-5678</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-3" />
                <span className="text-sm">
                  {locale === "jp" ? "東京, 日本" : "Tokyo, Japan"}
                </span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href + link.label}>
                    <FooterScrollLinks href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} YourBrand.{" "}
              {locale === "jp"
                ? "すべての権利を保有しています。"
                : "All rights reserved."}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
