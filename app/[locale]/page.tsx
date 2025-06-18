import { fetchProjects } from "@/lib/contentful";
import { Hero } from "@/components/hero";
import { ServicesGrid } from "@/components/services-grid";
import { ProjectsGrid } from "@/components/projects-grid";
import { CTA } from "@/components/cta";
import { staticHeroData } from "@/content/hero";

interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  const projects = await fetchProjects();

  return (
    <>
      <Hero {...staticHeroData} locale={locale} />
      <ServicesGrid locale={locale} />
      <ProjectsGrid items={projects} />
      <CTA />
    </>
  );
}
