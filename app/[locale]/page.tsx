import { Suspense } from "react";
import { Hero } from "@/components/hero";
import { ServicesHeader } from "@/components/services-header";
import { ProjectsHeader } from "@/components/projects-header";
import { ServicesSection } from "@/components/services-section";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesLoading } from "@/components/services-loading";
import { ProjectsLoading } from "@/components/projects-loading";
import { ServicesError } from "@/components/services-error";
import { ProjectsError } from "@/components/projects-error";
import { ErrorBoundary } from "@/components/error-boundary";
import { CTA } from "@/components/cta";
import { staticHeroData } from "@/content/hero";
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
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesHeader />
          <ErrorBoundary fallback={<ServicesError locale={locale} />}>
            <Suspense fallback={<ServicesLoading />}>
              <ServicesSection locale={locale} />
            </Suspense>
          </ErrorBoundary>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsHeader />
          <ErrorBoundary fallback={<ProjectsError locale={locale} />}>
            <Suspense fallback={<ProjectsLoading />}>
              <ProjectsSection locale={locale} />
            </Suspense>
          </ErrorBoundary>
        </div>
      </section>

      <CTA locale={locale} />
    </>
  );
}
