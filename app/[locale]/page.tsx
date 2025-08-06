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
      {/* Hero Section - Main landmark */}
      <section
        id="hero"
        aria-label={locale === "jp" ? "メインコンテンツ" : "Main content"}
        role="banner"
      >
        <Hero heroData={staticHeroData} locale={locale} />
      </section>

      {/* Services Section */}
      <section
        id="services"
        aria-label={locale === "jp" ? "サービス" : "Services"}
      >
        <ServicesSection locale={locale} />
      </section>

      {/* Projects Section - Selected Works */}
      <section
        id="projects"
        aria-label={locale === "jp" ? "プロジェクト" : "Projects"}
      >
        <ProjectsSection projects={projects.slice(0, 4)} locale={locale} />
      </section>

      {/* About Me Section */}
      <section
        id="about"
        aria-label={locale === "jp" ? "私について" : "About me"}
      >
        <AboutMe locale={locale} />
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        aria-label={locale === "jp" ? "お客様の声" : "Testimonials"}
      >
        <Testimonials locale={locale} />
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        aria-label={locale === "jp" ? "お問い合わせ" : "Contact"}
      >
        <CTA locale={locale} />
      </section>
    </>
  );
}
