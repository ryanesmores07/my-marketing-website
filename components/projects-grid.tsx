import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, ExternalLink } from "lucide-react";
import { Project } from "@/content/projects";

interface ProjectsGridProps {
  items: Project[];
  locale?: "en" | "jp";
}

export const ProjectsGrid = ({ items, locale = "en" }: ProjectsGridProps) => {
  // Sort projects by completion date (most recent first)
  const sortedProjects = items.sort(
    (a, b) =>
      new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(
      locale === "jp" ? "ja-JP" : "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sortedProjects.map((project) => (
        <article
          key={project.id}
          className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          {/* Project Image */}
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.mainImage}
              alt={project.title[locale]}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {locale === "jp" ? "注目" : "Featured"}
              </div>
            )}

            {/* Live Link Badge */}
            {project.liveUrl && (
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-background text-foreground px-2 py-1 rounded-full text-sm hover:bg-accent transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  {locale === "jp" ? "ライブ" : "Live"}
                </a>
              </div>
            )}
          </div>

          {/* Project Content */}
          <div className="p-6">
            {/* Category & Date */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-primary font-medium">
                {project.category}
              </span>
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="w-3 h-3 mr-1" />
                {formatDate(project.completedAt)}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
              {project.title[locale]}
            </h3>

            {/* Short Description */}
            <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
              {project.shortDescription[locale]}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs text-muted-foreground">
                  +{project.technologies.length - 3}{" "}
                  {locale === "jp" ? "他" : "more"}
                </span>
              )}
            </div>

            {/* View Project Link */}
            <Link
              href={`/${locale}/projects/${project.slug}`}
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm group-hover:translate-x-1 transition-all"
            >
              {locale === "jp" ? "詳細を見る" : "View Project"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-muted rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity -z-10" />
        </article>
      ))}
    </div>
  );
};
