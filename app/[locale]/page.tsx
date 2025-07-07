import { Hero } from "@/components/hero";
import { AboutMe } from "@/components/about-me";
import { ServicesSection } from "@/components/services-section-new";
import { ProjectsSection } from "@/components/projects-section";
import { Testimonials } from "@/components/testimonials";
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
      {/* Hero Section */}
      <section id="hero">
        <Hero {...staticHeroData} locale={locale} />
      </section>

      {/* Services Section */}
      <ServicesSection locale={locale} />

      {/* Projects Section - Selected Works */}
      <section id="projects">
        <ProjectsSection projects={projects.slice(0, 4)} locale={locale} />
      </section>

      {/* About Me Section */}
      <AboutMe locale={locale} />

      {/* Testimonials Section */}
      <Testimonials locale={locale} />

      {/* CTA Section */}
      <section id="cta">
        <CTA locale={locale} />
      </section>
    </>
  );
}
