import { Suspense } from "react";
import { Hero } from "@/components/hero";
import { AboutMe } from "@/components/about-me";
import { ServicesHeader } from "@/components/services-header";
import { ServicesSection } from "@/components/services-section";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesLoading } from "@/components/services-loading";
import { ServicesError } from "@/components/services-error";
import { ErrorBoundary } from "@/components/error-boundary";
import { CTA } from "@/components/cta";
import { staticHeroData } from "@/content/hero";
import { projects } from "@/content/projects";
import { Locale } from "@/i18n-config";

interface PageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;

  return (
    <>
      <Hero {...staticHeroData} locale={locale} />

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesHeader />
          <ErrorBoundary fallback={<ServicesError locale={locale} />}>
            <Suspense fallback={<ServicesLoading />}>
              <ServicesSection locale={locale} />
            </Suspense>
          </ErrorBoundary>
        </div>
      </section>

      {/* About Me Section */}
      <AboutMe />

      {/* Projects Section */}
      <ProjectsSection projects={projects} locale={locale} />

      <CTA locale={locale} />
    </>
  );
}
