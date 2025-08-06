"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/content/projects";
import { ProjectModal } from "@/components/project-modal";
import { Locale } from "@/i18n-config";

interface ProjectsSectionProps {
  projects: Project[];
  locale?: "en" | "jp";
}

export const ProjectsSection = ({
  projects,
  locale = "en",
}: ProjectsSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Show all projects on the main page
  const displayProjects = projects;

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section className="bg-background">
        {/* Subtle Divider */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
              {locale === "jp" ? "プロジェクト" : "Selected Works"}
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              {locale === "jp"
                ? "多言語対応のShopifyストアからSEO最適化されたランディングページまで、すべてのプロジェクトはビジネスの成長を目的に設計されています。国内外で成果を出すために制作した実績をご紹介します。"
                : "From multilingual Shopify stores to SEO-optimized landing pages, each project is built to help businesses grow beyond borders. Here are some of the results-driven solutions I've crafted with international and local impact in mind."}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {displayProjects.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl group">
                    <Image
                      src={project.mainImage}
                      alt={project.title[locale]}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        <button
                          onClick={() => openProjectModal(project)}
                          className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label={
                            locale === "jp"
                              ? "プロジェクト詳細を見る"
                              : "View project details"
                          }
                        >
                          <ArrowRight className="w-5 h-5" />
                        </button>
                        {project.liveUrl && (
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                            aria-label={
                              locale === "jp"
                                ? "ライブサイトを見る"
                                : "View live site"
                            }
                          >
                            <ExternalLink className="w-5 h-5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                    {project.title[locale]}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.shortDescription[locale]}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 text-muted-foreground text-sm">
                        +{project.technologies.length - 4}{" "}
                        {locale === "jp" ? "他" : "more"}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button onClick={() => openProjectModal(project)}>
                      {locale === "jp" ? "詳細を見る" : "View Project"}
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
                          {locale === "jp" ? "ライブサイト" : "Live Site"}
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {displayProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-muted-foreground/20 rounded-lg"></div>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {locale === "jp"
                  ? "プロジェクトが見つかりません"
                  : "No projects found"}
              </h3>
              <p className="text-muted-foreground">
                {locale === "jp"
                  ? "現在、表示するプロジェクトがありません。"
                  : "No projects are currently available to display."}
              </p>
            </div>
          )}
        </div>

        {/* Subtle Divider */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        locale={locale as Locale}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </>
  );
};
