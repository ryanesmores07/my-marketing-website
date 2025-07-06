import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/content/projects";

interface ProjectsSectionProps {
  projects: Project[];
  locale?: "en" | "jp";
}

export const ProjectsSection = ({
  projects,
  locale = "en",
}: ProjectsSectionProps) => {
  // Show all projects on the main page
  const displayProjects = projects;

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
            {locale === "jp" ? "プロジェクト" : "Projects"}
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {locale === "jp"
              ? "日本と世界市場をつなぐクロスボーダーマーケティングプロジェクトをご紹介します。"
              : "Showcasing cross-border marketing projects that connect Japan with global markets."}
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
                      <Link
                        href={`/${locale}/projects/${project.slug}`}
                        className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  {locale === "jp" ? "注目" : "Featured"}
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                {/* Category */}
                <div className="inline-flex items-center px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                  {project.category}
                </div>

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
                  <Button asChild>
                    <Link href={`/${locale}/projects/${project.slug}`}>
                      {locale === "jp" ? "詳細を見る" : "View Project"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  {project.liveUrl && (
                    <Button variant="outline" asChild>
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {locale === "jp" ? "ライブサイト" : "Live Site"}
                      </Link>
                    </Button>
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
                ? "プロジェクトはまだありません"
                : "No projects yet"}
            </h3>
            <p className="text-muted-foreground">
              {locale === "jp"
                ? "プロジェクトが追加されると、ここに表示されます。"
                : "Projects will appear here once added."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
