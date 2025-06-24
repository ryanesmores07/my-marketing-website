import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  locale?: string;
}

export const CTA = ({ locale = "en" }: CTAProps) => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-12 text-center shadow-lg border border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Expand Your Market Reach?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Whether you&apos;re a Japanese business going global or an
              international company entering Japan, we have the expertise to
              make your cross-border expansion successful.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-12 px-8">
                <Link href={`/${locale}/contact`}>
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 bg-white hover:bg-gray-50"
              >
                <Link href={`/${locale}/projects`}>View Our Work</Link>
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl mb-2">🇯🇵🌏</div>
                <div className="font-medium text-gray-900">Cultural Bridge</div>
                <div className="text-sm text-gray-600">
                  Deep understanding of both markets
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🚀</div>
                <div className="font-medium text-gray-900">Fast Delivery</div>
                <div className="text-sm text-gray-600">
                  Rapid market entry solutions
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📈</div>
                <div className="font-medium text-gray-900">Proven Results</div>
                <div className="text-sm text-gray-600">
                  Track record of success
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
