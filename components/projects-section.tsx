"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/content/projects";
import { ProjectModal } from "@/components/project-modal";
import { Locale } from "@/i18n-config";

interface ProjectsSectionProps {
  projects: Project[];
  locale?: "en" | "jp";
}

const isGraphicAsset = (src: string) => src.toLowerCase().endsWith(".svg");

export const ProjectsSection = ({
  projects,
  locale = "en",
}: ProjectsSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const copy = {
    en: {
      title: "Selected Works",
      description:
        "From paid ads management to ecommerce builds, these projects show how I help brands improve traffic quality, conversion flow, and market readiness.",
      viewProject: "View Project",
      liveSite: "Live Site",
      more: "more",
      noProjects: "No projects found",
      noProjectsBody: "No projects are currently available to display.",
      viewLive: "View live site",
      openDetails: "View project details",
      primaryMetricLabel: "Featured result",
    },
    jp: {
      title: "実績紹介",
      description:
        "広告運用からEC構築まで、流入の質、購入導線、市場対応をどう改善したかが分かる実績をまとめています。",
      viewProject: "詳細を見る",
      liveSite: "公開サイトを見る",
      more: "件",
      noProjects: "表示できる実績がありません",
      noProjectsBody: "現在表示できるプロジェクトはありません。",
      viewLive: "公開サイトを見る",
      openDetails: "プロジェクト詳細を開く",
      primaryMetricLabel: "主な成果",
    },
  }[locale];

  return (
    <>
      <section id="projects" className="bg-background">
        <div className="mx-auto mb-24 max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-black text-foreground lg:text-5xl">
              {copy.title}
            </h2>
            <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-primary" />
            <p className="mx-auto max-w-3xl text-lg text-foreground">
              {copy.description}
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => {
              const projectHeroIsGraphic = isGraphicAsset(project.mainImage);

              return (
                <div
                  key={project.id}
                  className={`grid items-center gap-12 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div
                    className={`relative ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <div className="group relative aspect-video overflow-hidden rounded-2xl border border-border shadow-2xl">
                      <Image
                        src={project.mainImage}
                        alt={project.title[locale]}
                        fill
                        className={`transition-transform duration-500 group-hover:scale-[1.03] ${
                          projectHeroIsGraphic
                            ? "object-contain bg-[#08111d] p-6"
                            : "object-cover"
                        }`}
                      />

                      <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex gap-4">
                          <button
                            onClick={() => openProjectModal(project)}
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-lg transition-colors hover:bg-primary hover:text-primary-foreground"
                            aria-label={copy.openDetails}
                          >
                            <ArrowRight className="h-5 w-5" />
                          </button>
                          {project.liveUrl && (
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-lg transition-colors hover:bg-primary hover:text-primary-foreground"
                              aria-label={copy.viewLive}
                            >
                              <ExternalLink className="h-5 w-5" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
                        {project.category}
                      </span>
                      {project.primaryMetric && (
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                          {project.primaryMetric.value}{" "}
                          {project.primaryMetric.label[locale]}
                        </span>
                      )}
                    </div>

                    <h3 className="text-3xl font-bold text-foreground lg:text-4xl">
                      {project.title[locale]}
                    </h3>

                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {project.shortDescription[locale]}
                    </p>

                    {project.primaryMetric && (
                      <div className="rounded-2xl border border-border bg-muted/20 p-5">
                        <div className="mb-2 text-sm uppercase tracking-[0.16em] text-muted-foreground">
                          {copy.primaryMetricLabel}
                        </div>
                        <div className="mb-2 text-3xl font-black text-foreground">
                          {project.primaryMetric.value}
                        </div>
                        <div className="text-base font-semibold text-foreground">
                          {project.primaryMetric.label[locale]}
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          {project.primaryMetric.note[locale]}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 text-sm text-muted-foreground">
                          +{project.technologies.length - 4} {copy.more}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button onClick={() => openProjectModal(project)}>
                        {copy.viewProject}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>

                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            {copy.liveSite}
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {projects.length === 0 && (
            <div className="py-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <div className="h-8 w-8 rounded-lg bg-muted-foreground/20" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-foreground">
                {copy.noProjects}
              </h3>
              <p className="text-muted-foreground">{copy.noProjectsBody}</p>
            </div>
          )}
        </div>

        <div className="mx-auto mt-24 max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        locale={locale as Locale}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </>
  );
};
