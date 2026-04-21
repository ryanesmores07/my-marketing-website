import { Hero } from "@/components/hero";
import { AboutMe } from "@/components/about-me";
import { ServicesSection } from "@/components/services-section-new";
import { ProjectsSection } from "@/components/projects-section";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { staticHeroData } from "@/content/hero";
import { getFeaturedProjects } from "@/content/projects";
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
      <Hero heroData={staticHeroData} locale={locale} />
      <ServicesSection locale={locale} />
      <ProjectsSection projects={getFeaturedProjects()} locale={locale} />
      <AboutMe locale={locale} />
      <Testimonials locale={locale} />
      <CTA locale={locale} />
    </>
  );
}
