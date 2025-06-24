import { fetchProjects } from "@/lib/contentful";
import { ProjectsGrid } from "@/components/projects-grid";

interface ProjectsSectionProps {
  locale: string;
}

export async function ProjectsSection({ locale }: ProjectsSectionProps) {
  const projects = await fetchProjects();

  return <ProjectsGrid items={projects} locale={locale} />;
}
