import Link from "next/link";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

interface FooterProps {
  locale: string;
}

export const Footer = ({ locale }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { href: `/${locale}/services`, label: "Web Design" },
        { href: `/${locale}/services`, label: "SEO Optimization" },
        { href: `/${locale}/services`, label: "Content Writing" },
        { href: `/${locale}/services`, label: "E-commerce" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: `/${locale}`, label: "About Us" },
        { href: `/${locale}/projects`, label: "Our Work" },
        { href: `/${locale}/contact`, label: "Contact" },
        { href: `/${locale}`, label: "Blog" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: `/${locale}/contact`, label: "Get Help" },
        { href: `/${locale}`, label: "FAQ" },
        { href: `/${locale}`, label: "Privacy Policy" },
        { href: `/${locale}`, label: "Terms of Service" },
      ],
    },
  ];

  const socialLinks = [
    { href: "https://github.com", icon: Github, label: "GitHub" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link
                href={`/${locale}`}
                className="text-2xl font-bold mb-4 block"
              >
                YourBrand
              </Link>
              <p className="text-gray-300 mb-6 max-w-md">
                We create beautiful, functional websites that help your business
                grow. From design to development, we&apos;re your digital
                partner.
              </p>

              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <Mail className="h-4 w-4 mr-3 text-gray-400" />
                  <span>hello@yourbrand.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-4 w-4 mr-3 text-gray-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-4 w-4 mr-3 text-gray-400" />
                  <span>New York, NY</span>
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors"
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
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} YourBrand. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            {/* Language Links */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/en"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                English
              </Link>
              <Link
                href="/ja"
                className="text-gray-400 hover:text-white text-sm transition-colors"
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
