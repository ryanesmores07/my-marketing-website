"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  ExternalLink,
  Filter,
  Grid,
  List,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/content/projects";
import { Locale } from "@/i18n-config";

interface ProjectsPageClientProps {
  projects: Project[];
  locale: Locale;
}

export const ProjectsPageClient = ({
  projects,
  locale,
}: ProjectsPageClientProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Get unique categories
  const categories = [
    "all",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  // Filter projects
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Sort by completion date (most recent first)
  const sortedProjects = filteredProjects.sort(
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Back to Home Link */}
            <Link
              href={`/${locale}`}
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors text-sm mb-8"
            >
              ← {locale === "jp" ? "ホームに戻る" : "Back to Home"}
            </Link>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-foreground leading-tight">
                {locale === "jp" ? "プロジェクト" : "Projects"}
              </h1>
              <div className="w-24 h-1 bg-primary rounded-full mx-auto"></div>
            </div>

            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {locale === "jp"
                ? "日本と世界を繋ぐクロスボーダーマーケティングプロジェクトの実績をご覧ください。"
                : "Explore my portfolio of cross-border marketing projects connecting Japan with the global market."}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {projects.length}+
                </div>
                <div className="text-sm text-muted-foreground">
                  {locale === "jp" ? "プロジェクト" : "Projects Completed"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {categories.length - 1}
                </div>
                <div className="text-sm text-muted-foreground">
                  {locale === "jp" ? "業界分野" : "Industries Served"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  {locale === "jp" ? "顧客満足度" : "Client Satisfaction"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Controls */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground mr-2" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category === "all"
                    ? locale === "jp"
                      ? "すべて"
                      : "All"
                    : category}
                </button>
              ))}
            </div>

            {/* View Mode & Results Count */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {sortedProjects.length}{" "}
                {locale === "jp" ? "プロジェクト" : "projects"}
              </span>

              <div className="flex items-center border border-border rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded transition-colors ${
                    viewMode === "grid"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded transition-colors ${
                    viewMode === "list"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                {locale === "jp"
                  ? "このカテゴリーにはプロジェクトがありません。"
                  : "No projects found in this category."}
              </p>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-8"
              }
            >
              {sortedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  locale={locale}
                  viewMode={viewMode}
                  formatDate={formatDate}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {locale === "jp"
              ? "一緒にプロジェクトを始めませんか？"
              : "Ready to start your project?"}
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            {locale === "jp"
              ? "あなたのビジネスを次のレベルに引き上げるお手伝いをします。"
              : "Let's work together to take your business to the next level."}
          </p>
          <Button asChild size="lg">
            <Link href={`/${locale}/contact`}>
              {locale === "jp" ? "お問い合わせ" : "Get In Touch"}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  viewMode: "grid" | "list";
  formatDate: (date: string) => string;
}

function ProjectCard({
  project,
  locale,
  viewMode,
  formatDate,
}: ProjectCardProps) {
  if (viewMode === "list") {
    return (
      <article className="group flex flex-col lg:flex-row gap-8 bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300 p-6">
        {/* Project Image */}
        <div className="relative lg:w-80 aspect-video lg:aspect-[4/3] overflow-hidden rounded-xl flex-shrink-0">
          <Image
            src={project.mainImage}
            alt={project.title[locale]}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {project.featured && (
            <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              {locale === "jp" ? "注目" : "Featured"}
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-primary font-medium">
              {project.category}
            </span>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="w-3 h-3 mr-1" />
              {formatDate(project.completedAt)}
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
            {project.title[locale]}
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            {project.shortDescription[locale]}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-2">
            <Link
              href={`/${locale}/projects/${project.slug}`}
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium group-hover:translate-x-1 transition-all"
            >
              {locale === "jp" ? "詳細を見る" : "View Project"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                {locale === "jp" ? "ライブサイト" : "Live Site"}
              </a>
            )}
          </div>
        </div>
      </article>
    );
  }

  // Grid view (original card design)
  return (
    <article className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
  );
}
