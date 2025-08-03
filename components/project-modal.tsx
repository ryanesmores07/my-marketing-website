"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project, ProjectScreenshot } from "@/content/projects";
import { Locale } from "@/i18n-config";
import { ContactModal } from "./contact-modal";

interface ProjectModalProps {
  project: Project | null;
  locale: Locale;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({
  project,
  locale,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const [selectedImage, setSelectedImage] = useState<{
    screenshot: ProjectScreenshot;
    index: number;
  } | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openImageModal = (screenshot: ProjectScreenshot, index: number) => {
    setSelectedImage({ screenshot, index });
    document.body.style.overflow = "hidden";
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = useCallback(
    (direction: "prev" | "next") => {
      if (!selectedImage || !project?.screenshots) return;

      const currentIndex = selectedImage.index;
      let newIndex;

      if (direction === "prev") {
        newIndex =
          currentIndex === 0
            ? project.screenshots.length - 1
            : currentIndex - 1;
      } else {
        newIndex =
          currentIndex === project.screenshots.length - 1
            ? 0
            : currentIndex + 1;
      }

      setSelectedImage({
        screenshot: project.screenshots[newIndex],
        index: newIndex,
      });
    },
    [selectedImage, project?.screenshots]
  );

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedImage) {
          closeImageModal();
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, selectedImage, onClose]);

  // Handle arrow keys for image navigation
  useEffect(() => {
    const handleArrowKeys = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === "ArrowLeft") {
          navigateImage("prev");
        } else if (e.key === "ArrowRight") {
          navigateImage("next");
        }
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleArrowKeys);
    }

    return () => {
      document.removeEventListener("keydown", handleArrowKeys);
    };
  }, [selectedImage, navigateImage]);

  if (!isOpen || !project) return null;

  return (
    <>
      {/* Main Project Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onClose();
            }
          }}
          tabIndex={0}
          role="button"
          aria-label={locale === "jp" ? "モーダルを閉じる" : "Close modal"}
        />

        {/* Modal Content */}
        <div className="relative w-full max-w-6xl mx-auto h-full max-h-[95vh] overflow-y-auto bg-background rounded-xl shadow-2xl m-4">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            aria-label={locale === "jp" ? "閉じる" : "Close"}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="relative h-80 overflow-hidden rounded-t-xl">
            <Image
              src={project.mainImage}
              alt={project.title[locale]}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            {/* Header Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-4xl">
                {/* Category Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-4 border border-green-500/30">
                  {project.category}
                </div>

                {/* Title */}
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  {project.title[locale]}
                </h1>

                {/* Description */}
                <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                  {project.shortDescription[locale]}
                </p>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              {/* Project Meta Bar */}
              <div className="flex justify-center mb-16">
                {/* Live Site CTA */}
                {project.liveUrl && (
                  <div>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white shadow-lg px-8 py-3 text-lg font-semibold"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        {locale === "jp"
                          ? "ライブサイトを見る"
                          : "View Live Site"}
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Project Description */}
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-8">
                  {locale === "jp" ? "プロジェクト概要" : "Project Overview"}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-xl">
                  {project.description[locale]}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-8">
                  {locale === "jp" ? "使用技術" : "Technologies Used"}
                </h2>
                <div className="flex flex-wrap gap-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={`tech-${tech}`}
                      className="px-6 py-3 bg-muted text-muted-foreground rounded-full text-base font-medium border border-border/50 hover:bg-muted/80 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Screenshots Gallery */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="mb-16">
                  <h2 className="text-4xl font-bold text-foreground mb-8">
                    {locale === "jp" ? "スクリーンショット" : "Screenshots"}
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {project.screenshots.map((screenshot, index) => (
                      <div
                        key={screenshot.id}
                        className="group relative aspect-video rounded-xl overflow-hidden bg-card border border-border/50 cursor-pointer hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        onClick={() => openImageModal(screenshot, index)}
                        onKeyDown={(e: React.KeyboardEvent) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            openImageModal(screenshot, index);
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-label={`${
                          locale === "jp" ? "画像を開く" : "Open image"
                        }: ${screenshot.subtitle[locale]}`}
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
                </div>
              )}

              {/* Project Details Grid */}
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                {/* Challenge */}
                <div className="space-y-4 p-6 bg-muted/10 rounded-xl border border-border/30">
                  <h3 className="text-2xl font-bold text-foreground">
                    {locale === "jp" ? "課題" : "Challenge"}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.challenges[locale]}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-4 p-6 bg-muted/10 rounded-xl border border-border/30">
                  <h3 className="text-2xl font-bold text-foreground">
                    {locale === "jp" ? "解決策" : "Solution"}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.solution[locale]}
                  </p>
                </div>

                {/* Results */}
                <div className="space-y-4 p-6 bg-muted/10 rounded-xl border border-border/30">
                  <h3 className="text-2xl font-bold text-foreground">
                    {locale === "jp" ? "成果" : "Results"}
                  </h3>
                  <ul className="space-y-3">
                    {project.results[locale].map((result, index) => (
                      <li
                        key={`result-${index}-${result.slice(0, 20)}`}
                        className="flex items-start"
                      >
                        <span className="text-green-500 mr-3 mt-1 text-lg font-bold">
                          ✓
                        </span>
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Features */}
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-8">
                  {locale === "jp" ? "主要機能" : "Key Features"}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features[locale].map((feature, index) => (
                    <div
                      key={`feature-${index}-${feature.slice(0, 20)}`}
                      className="flex items-start gap-3 p-4 bg-muted/10 rounded-lg border border-border/30"
                    >
                      <span className="text-primary mt-1 text-lg font-bold">
                        •
                      </span>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-8 border-t border-border">
                {project.githubUrl && (
                  <div>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="lg" className="px-6">
                        <Github className="mr-2 h-4 w-4" />
                        {locale === "jp" ? "GitHubを見る" : "View on GitHub"}
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

              {/* CTA Section */}
              <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {locale === "jp"
                      ? "このようなプロジェクトを作りたいですか？"
                      : "Want to build something like this?"}
                  </h3>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    {locale === "jp"
                      ? "お客様のビジネスに合わせたカスタムソリューションを提供いたします。今すぐご相談ください。"
                      : "I can create custom solutions tailored to your business needs. Let's discuss your project today."}
                  </p>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold shadow-lg"
                    onClick={() => setIsContactModalOpen(true)}
                  >
                    {locale === "jp" ? "今すぐ相談する" : "Get Started Today"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            onClick={closeImageModal}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                closeImageModal();
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={
              locale === "jp" ? "画像モーダルを閉じる" : "Close image modal"
            }
          />

          {/* Image Modal Content */}
          <div className="relative max-w-7xl mx-auto p-4 w-full">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              aria-label={locale === "jp" ? "閉じる" : "Close"}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              aria-label={locale === "jp" ? "前の画像" : "Previous image"}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              aria-label={locale === "jp" ? "次の画像" : "Next image"}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="relative aspect-video max-h-[85vh] rounded-xl overflow-hidden bg-black/20 border border-white/10">
              <Image
                src={selectedImage.screenshot.image}
                alt={selectedImage.screenshot.subtitle[locale]}
                fill
                className="object-contain"
              />
            </div>

            {/* Image Info */}
            <div className="mt-6 text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-3">
                {selectedImage.screenshot.subtitle[locale]}
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                {selectedImage.screenshot.description[locale]}
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium">
                {selectedImage.index + 1} / {project.screenshots.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        locale={locale}
      />
    </>
  );
}
