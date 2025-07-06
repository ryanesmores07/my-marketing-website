"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Tag,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project, ProjectScreenshot } from "@/content/projects";
import { Locale } from "@/i18n-config";

interface ProjectDetailClientProps {
  project: Project;
  locale: Locale;
}

export function ProjectDetailClient({
  project,
  locale,
}: ProjectDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<{
    screenshot: ProjectScreenshot;
    index: number;
  } | null>(null);

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

  const openModal = (screenshot: ProjectScreenshot, index: number) => {
    setSelectedImage({ screenshot, index });
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage || !project.screenshots) return;

    const currentIndex = selectedImage.index;
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex === 0 ? project.screenshots.length - 1 : currentIndex - 1;
    } else {
      newIndex =
        currentIndex === project.screenshots.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedImage({
      screenshot: project.screenshots[newIndex],
      index: newIndex,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={project.mainImage}
            alt={project.title[locale]}
            fill
            className="object-cover"
            priority
          />
          {/* Enhanced overlay with gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Side - Project Info */}
            <div className="space-y-8">
              {/* Back Button with enhanced background */}
              <Link
                href={`/${locale}`}
                className="inline-flex items-center text-white/90 hover:text-white transition-colors text-sm bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20 hover:bg-black/40"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {locale === "jp" ? "ホームに戻る" : "Back to Home"}
              </Link>

              {/* Project Title with text shadow */}
              <div>
                <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-4 drop-shadow-2xl [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%)]">
                  {project.title[locale]}
                </h1>

                {/* Meta Info with enhanced background */}
                <div className="flex items-center gap-6 text-white/90 text-sm mb-6 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 w-fit">
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-2" />
                    {locale === "jp" ? "クライアント" : "Client"}:{" "}
                    {project.client}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(project.completedAt)}
                  </div>
                </div>

                {/* Technologies with stronger background */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-black/40 text-white text-sm rounded-full backdrop-blur-md border border-white/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons with enhanced shadows */}
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <Button
                    asChild
                    className="bg-white text-black hover:bg-white/90 shadow-2xl hover:shadow-white/20 transition-all duration-300"
                  >
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {locale === "jp"
                        ? "ライブサイトを見る"
                        : "View Live Site"}
                    </Link>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    asChild
                    className="border-white/40 bg-black/20 text-white hover:bg-white hover:text-black backdrop-blur-md shadow-xl transition-all duration-300"
                  >
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {locale === "jp" ? "コード" : "Code"}
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Right Side - Project Info Card with enhanced visibility */}
            <div className="lg:justify-self-end">
              <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 border border-white/30 max-w-md shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-lg">
                  {locale === "jp" ? "プロジェクト情報" : "Project Info"}
                </h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm">
                  {project.description[locale]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="bg-background text-foreground">
        {/* Screenshots Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                {locale === "jp" ? "ギャラリー" : "Gallery"}
              </h2>

              {/* Modern Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <div
                    key={screenshot.id}
                    className="group relative aspect-video rounded-2xl overflow-hidden bg-card border border-border/50 cursor-pointer hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    onClick={() => openModal(screenshot, index)}
                  >
                    <Image
                      src={screenshot.image}
                      alt={screenshot.subtitle[locale]}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="text-center space-y-2 px-4">
                        <div className="bg-white/95 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                          {locale === "jp" ? "詳細を見る" : "View Details"}
                        </div>
                      </div>
                    </div>

                    {/* Image number indicator */}
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium">
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>

              {/* Gallery info */}
              {/* <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground">
                  {locale === "jp"
                    ? `${project.screenshots.length}枚の画像 • クリックして拡大表示`
                    : `${project.screenshots.length} images • Click to view larger`}
                </p>
              </div> */}
            </div>
          </section>
        )}

        {/* Project Details Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Challenge */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {locale === "jp" ? "課題" : "Challenge"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenges[locale]}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {locale === "jp" ? "解決策" : "Solution"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution[locale]}
                </p>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {locale === "jp" ? "成果" : "Results"}
                </h2>
                <ul className="space-y-3">
                  {project.results[locale].map((result, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-3 mt-1 text-lg">✓</span>
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              {locale === "jp" ? "主な機能" : "Key Features"}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features[locale].map((feature, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border/50 shadow-sm"
                >
                  {/* Feature Icon */}
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mb-4">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>

                  {/* Feature Text */}
                  <p className="text-foreground font-medium leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              {locale === "jp"
                ? "次のプロジェクトについて話しましょう"
                : "Let's talk about your next project"}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {locale === "jp"
                ? "同様のプロジェクトをお考えですか？お気軽にご相談ください。"
                : "Have a similar project in mind? Let's discuss how we can work together."}
            </p>
            <Button asChild size="lg">
              <Link href={`/${locale}/contact`}>
                {locale === "jp" ? "お問い合わせ" : "Get In Touch"}
              </Link>
            </Button>
          </div>
        </section>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-60 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          {project.screenshots && project.screenshots.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-60 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-60 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Modal Content */}
          <div
            className="relative max-w-7xl max-h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative aspect-video w-full">
              <Image
                src={selectedImage.screenshot.image}
                alt={selectedImage.screenshot.subtitle[locale]}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedImage.screenshot.subtitle[locale]}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {selectedImage.screenshot.description[locale]}
              </p>

              {/* Image counter */}
              {project.screenshots && project.screenshots.length > 1 && (
                <div className="text-white/60 text-sm mt-4">
                  {selectedImage.index + 1} / {project.screenshots.length}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
