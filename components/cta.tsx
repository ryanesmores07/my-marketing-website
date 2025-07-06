import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  locale?: string;
}

export const CTA = ({ locale = "en" }: CTAProps) => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-r from-background to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl p-8 lg:p-12 text-center shadow-lg border border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-4">
              Ready to Expand Your Market Reach?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Whether you&apos;re a Japanese business going global or an
              international company entering Japan, we have the expertise to
              make your cross-border expansion successful.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-12 px-8">
                <a href="#services">
                  {locale === "jp" ? "プロジェクト開始" : "Start Your Project"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button variant="outline" size="lg" className="h-12 px-8">
                <a href="#projects">
                  {locale === "jp" ? "実績を見る" : "View Our Work"}
                </a>
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl mb-2">🇯🇵🌏</div>
                <div className="font-medium text-card-foreground">
                  Cultural Bridge
                </div>
                <div className="text-sm text-muted-foreground">
                  Deep understanding of both markets
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🚀</div>
                <div className="font-medium text-card-foreground">
                  Fast Delivery
                </div>
                <div className="text-sm text-muted-foreground">
                  Rapid market entry solutions
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📈</div>
                <div className="font-medium text-card-foreground">
                  Proven Results
                </div>
                <div className="text-sm text-muted-foreground">
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
