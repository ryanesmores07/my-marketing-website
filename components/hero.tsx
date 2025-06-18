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
              Available for New Projects
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">{title}</span>
              <span className="block text-blue-600 mt-2">Digital Success</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
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
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base bg-white hover:bg-gray-50"
              >
                <Play className="mr-2 h-5 w-5" />
                View Portfolio
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">
                Trusted by industry leaders
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-60">
                {/* Placeholder for company logos */}
                <div className="h-8 w-24 bg-gray-200 rounded" />
                <div className="h-8 w-20 bg-gray-200 rounded" />
                <div className="h-8 w-28 bg-gray-200 rounded" />
                <div className="h-8 w-22 bg-gray-200 rounded" />
              </div>
            </div>
          </div>

          {/* Right Content - Professional Portrait */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Portrait Container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden aspect-[3/4] max-w-md mx-auto">
                <img
                  src="/images/hero-portrait.jpg"
                  alt="Professional portrait - Ryan, Digital Marketing Expert"
                  className="w-full h-full object-cover object-center"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Floating Achievement Badges */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-900">
                      Available Now
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-900">
                      Expert Developer
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Skill Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-xl p-4 border border-gray-100 rotate-[-4deg] max-w-[140px]">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    5+
                  </div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 border border-gray-100 rotate-[4deg] max-w-[140px]">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    100%
                  </div>
                  <div className="text-xs text-gray-600">Success Rate</div>
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
