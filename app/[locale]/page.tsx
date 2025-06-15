import { fetchProjects } from "@/lib/contentful";
import { services } from "@/content/services";
import { Hero } from "@/components/hero";
import { ServicesGrid } from "@/components/services-grid";
import { ProjectsGrid } from "@/components/projects-grid";
import { CTA } from "@/components/cta";
import { staticHeroData } from "@/content/hero";

export default async function Home() {
  const projects = await fetchProjects();
  return (
    <>
      <Hero {...staticHeroData} />
      <ServicesGrid items={services} />
      <ProjectsGrid items={projects} />
      <CTA />
    </>
  );
}
