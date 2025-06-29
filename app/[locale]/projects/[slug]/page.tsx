import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/content/projects";
import { Locale } from "@/i18n-config";
import { ProjectDetailClient } from "./project-detail-client";

interface ProjectDetailPageProps {
  params: Promise<{ locale: Locale; slug: string }>;
}

export async function generateStaticParams() {
  return projects.flatMap((project) =>
    ["en", "jp"].map((locale) => ({
      locale,
      slug: project.slug,
    }))
  );
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} locale={locale} />;
}
