import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { Locale } from "@/i18n-config";
import { ProjectsPageClient } from "./projects-page-client";

interface ProjectsPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;

  // Validate locale
  if (!["en", "jp"].includes(locale)) {
    notFound();
  }

  return <ProjectsPageClient projects={projects} locale={locale} />;
}
