import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  title: string;
  description: string;
  locale?: string;
}

export const Hero = ({ title, description, locale = "en" }: HeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
        <div className="w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-70" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
        <div className="w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-8">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Japan ⇄ Global Market Specialist
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">{title}</span>
              <span className="block text-blue-600 mt-2">
                Cross-Border Success
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">
                  Cross-Border Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">🇯🇵🇺🇸</div>
                <div className="text-sm text-gray-600">JP ⇄ EN Markets</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="h-14 px-8 text-base">
                <Link href={`/${locale}/contact`}>
                  Start Your Global Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base bg-white hover:bg-gray-50"
              >
                <Link href={`/${locale}/projects`}>
                  <Play className="mr-2 h-5 w-5" />
                  See Our Work
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">
                Specializing in Japan ⇄ Global markets
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-gray-600">
                <span>🌐 Global E-commerce</span>
                <span>🔍 Multilingual SEO</span>
                <span>✍️ Cross-cultural Content</span>
                <span>🛒 Shopify & WordPress</span>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Photo */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Professional Photo */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/ryan-main.jpg"
                    alt="Ryan - Cross-border Marketing Specialist"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  ✓ Japan Expert
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  🚀 Global Ready
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 bg-white rounded-lg shadow-lg p-4 border border-gray-100 rotate-[-4deg]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">
                    🇯🇵 Japan Native
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-4 border border-gray-100 rotate-[4deg]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">
                    🌍 Global Reach
                  </span>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl transform rotate-3 -z-10 opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};
