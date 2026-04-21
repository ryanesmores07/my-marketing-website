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

const isGraphicAsset = (src: string) => src.toLowerCase().endsWith(".svg");

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
      const newIndex =
        direction === "prev"
          ? currentIndex === 0
            ? project.screenshots.length - 1
            : currentIndex - 1
          : currentIndex === project.screenshots.length - 1
            ? 0
            : currentIndex + 1;

      setSelectedImage({
        screenshot: project.screenshots[newIndex],
        index: newIndex,
      });
    },
    [selectedImage, project?.screenshots]
  );

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

  useEffect(() => {
    const handleArrowKeys = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "ArrowLeft") {
        navigateImage("prev");
      } else if (e.key === "ArrowRight") {
        navigateImage("next");
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

  const projectHeroIsGraphic = isGraphicAsset(project.mainImage);

  const copy = {
    en: {
      close: "Close",
      closeModal: "Close modal",
      overview: "Project Overview",
      technologies: "Technologies Used",
      screenshots: "Proof & Screenshots",
      challenge: "Challenge",
      solution: "Solution",
      results: "Results",
      features: "Key Features",
      viewLiveSite: "View Live Site",
      viewOnGithub: "View on GitHub",
      primaryMetric: "Featured result",
      proofStats: "Performance Highlights",
      buildLikeThis: "Need support like this?",
      buildLikeThisBody:
        "I help ecommerce brands connect site improvements, paid media, and multilingual execution in a way that fits how they actually operate.",
      getStarted: "Start a Project",
      openImage: "Open image",
      previousImage: "Previous image",
      nextImage: "Next image",
      closeImage: "Close image modal",
      viewDetails: "View details",
    },
    jp: {
      close: "閉じる",
      closeModal: "モーダルを閉じる",
      overview: "プロジェクト概要",
      technologies: "使用ツール",
      screenshots: "実績データ・関連画像",
      challenge: "課題",
      solution: "対応内容",
      results: "成果",
      features: "主なポイント",
      viewLiveSite: "公開サイトを見る",
      viewOnGithub: "GitHubを見る",
      primaryMetric: "主な成果",
      proofStats: "パフォーマンス指標",
      buildLikeThis: "こうした支援について相談したいですか？",
      buildLikeThisBody:
        "ECサイトの構築、広告運用、日英対応の改善まで、今の事業に合わせて整理しながら支援します。",
      getStarted: "相談する",
      openImage: "画像を開く",
      previousImage: "前の画像",
      nextImage: "次の画像",
      closeImage: "画像モーダルを閉じる",
      viewDetails: "詳細を見る",
    },
  }[locale];

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
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
          aria-label={copy.closeModal}
        />

        <div className="relative m-4 h-full max-h-[95vh] w-full max-w-6xl overflow-y-auto rounded-xl bg-background shadow-2xl">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
            aria-label={copy.close}
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className={`relative h-80 overflow-hidden rounded-t-xl ${
              projectHeroIsGraphic ? "bg-[#07111d]" : ""
            }`}
          >
            <Image
              src={project.mainImage}
              alt={project.title[locale]}
              fill
              priority
              className={
                projectHeroIsGraphic ? "object-contain p-8" : "object-cover"
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-4xl">
                <div className="mb-4 inline-flex items-center rounded-full border border-green-500/30 bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
                  {project.category}
                </div>

                <h1 className="mb-4 text-4xl font-bold leading-tight text-white lg:text-5xl">
                  {project.title[locale]}
                </h1>

                <p className="max-w-3xl text-xl leading-relaxed text-white/90">
                  {project.shortDescription[locale]}
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="mx-auto max-w-4xl">
              {(project.liveUrl || project.primaryMetric) && (
                <div className="mb-16 flex flex-wrap justify-center gap-4">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        className="px-8 py-3 text-lg font-semibold text-white shadow-lg"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        {copy.viewLiveSite}
                      </Button>
                    </Link>
                  )}

                  {project.primaryMetric && (
                    <div className="min-w-[260px] rounded-2xl border border-border bg-muted/20 px-6 py-4">
                      <div className="mb-1 text-sm uppercase tracking-[0.16em] text-muted-foreground">
                        {copy.primaryMetric}
                      </div>
                      <div className="text-3xl font-black text-foreground">
                        {project.primaryMetric.value}
                      </div>
                      <div className="text-sm font-semibold text-foreground">
                        {project.primaryMetric.label[locale]}
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {project.primaryMetric.note[locale]}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="mb-16">
                <h2 className="mb-8 text-4xl font-bold text-foreground">
                  {copy.overview}
                </h2>
                <p className="text-xl leading-relaxed text-muted-foreground">
                  {project.description[locale]}
                </p>
              </div>

              <div className="mb-16">
                <h2 className="mb-8 text-4xl font-bold text-foreground">
                  {copy.technologies}
                </h2>
                <div className="flex flex-wrap gap-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border/50 bg-muted px-6 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.proofStats && project.proofStats.length > 0 && (
                <div className="mb-16">
                  <h2 className="mb-8 text-4xl font-bold text-foreground">
                    {copy.proofStats}
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {project.proofStats.map((stat) => (
                      <div
                        key={`${stat.value}-${stat.label.en}`}
                        className="rounded-2xl border border-border bg-muted/10 p-6"
                      >
                        <div className="mb-2 text-3xl font-black text-foreground">
                          {stat.value}
                        </div>
                        <div className="text-base font-semibold text-foreground">
                          {stat.label[locale]}
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground">
                          {stat.note[locale]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.screenshots.length > 0 && (
                <div className="mb-16">
                  <h2 className="mb-8 text-4xl font-bold text-foreground">
                    {copy.screenshots}
                  </h2>
                  <div className="grid gap-6 md:grid-cols-3">
                    {project.screenshots.map((screenshot, index) => {
                      const screenshotIsGraphic = isGraphicAsset(
                        screenshot.image
                      );

                      return (
                        <div
                          key={screenshot.id}
                          className="group overflow-hidden rounded-2xl border border-white/10 bg-[#09111b] shadow-[0_16px_48px_rgba(2,6,23,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_22px_56px_rgba(2,6,23,0.36)]"
                          onClick={() => openImageModal(screenshot, index)}
                          onKeyDown={(e: React.KeyboardEvent) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              openImageModal(screenshot, index);
                            }
                          }}
                          tabIndex={0}
                          role="button"
                          aria-label={`${copy.openImage}: ${screenshot.subtitle[locale]}`}
                        >
                          <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-[#0b1220]">
                            <Image
                              src={screenshot.image}
                              alt={screenshot.subtitle[locale]}
                              fill
                              className={`transition-transform duration-500 group-hover:scale-[1.02] ${
                                screenshotIsGraphic
                                  ? "object-contain p-3"
                                  : "object-cover"
                              }`}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                              <div className="rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-black shadow-lg backdrop-blur-sm">
                                {copy.viewDetails}
                              </div>
                            </div>

                            <div className="absolute right-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                              {index + 1}
                            </div>
                          </div>

                          <div className="flex items-center justify-between gap-4 px-4 py-3">
                            <p className="text-sm font-semibold leading-snug text-foreground">
                              {screenshot.subtitle[locale]}
                            </p>
                            <span className="shrink-0 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                              {copy.viewDetails}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="mb-16 grid gap-8 lg:grid-cols-3">
                <div className="space-y-4 rounded-xl border border-border/30 bg-muted/10 p-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    {copy.challenge}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {project.challenges[locale]}
                  </p>
                </div>

                <div className="space-y-4 rounded-xl border border-border/30 bg-muted/10 p-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    {copy.solution}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {project.solution[locale]}
                  </p>
                </div>

                <div className="space-y-4 rounded-xl border border-border/30 bg-muted/10 p-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    {copy.results}
                  </h3>
                  <ul className="space-y-3">
                    {project.results[locale].map((result) => (
                      <li
                        key={result}
                        className="grid grid-cols-[18px_1fr] items-start gap-3"
                      >
                        <span className="pt-0.5 text-lg font-bold text-green-500">
                          +
                        </span>
                        <span className="leading-relaxed text-muted-foreground">
                          {result}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="mb-8 text-4xl font-bold text-foreground">
                  {copy.features}
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {project.features[locale].map((feature) => (
                    <div
                      key={feature}
                      className="grid grid-cols-[10px_1fr] items-center gap-3 rounded-lg border border-border/30 bg-muted/10 p-4"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_20px_rgba(168,85,247,0.4)]" />
                      <span className="leading-relaxed text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 border-t border-border pt-8">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="lg" className="px-6">
                      <Github className="mr-2 h-4 w-4" />
                      {copy.viewOnGithub}
                    </Button>
                  </Link>
                )}
              </div>

              <div className="mt-16 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10 p-8">
                <div className="space-y-4 text-center">
                  <h3 className="text-2xl font-bold text-foreground">
                    {copy.buildLikeThis}
                  </h3>
                  <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                    {copy.buildLikeThisBody}
                  </p>
                  <Button
                    size="lg"
                    className="px-8 py-3 text-lg font-semibold text-white shadow-lg"
                    onClick={() => setIsContactModalOpen(true)}
                  >
                    {copy.getStarted}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
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
            aria-label={copy.closeImage}
          />

          <div className="relative mx-auto w-full max-w-7xl p-4">
            <button
              onClick={closeImageModal}
              className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
              aria-label={copy.close}
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
              aria-label={copy.previousImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
              aria-label={copy.nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="relative aspect-video max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 bg-[#09111b]">
              <Image
                src={selectedImage.screenshot.image}
                alt={selectedImage.screenshot.subtitle[locale]}
                fill
                className={`object-contain ${
                  isGraphicAsset(selectedImage.screenshot.image)
                    ? "p-4 sm:p-8"
                    : ""
                }`}
              />
            </div>

            <div className="mx-auto mt-6 max-w-2xl text-center">
              <h3 className="mb-3 text-2xl font-bold text-white">
                {selectedImage.screenshot.subtitle[locale]}
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-white/80">
                {selectedImage.screenshot.description[locale]}
              </p>
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                {selectedImage.index + 1} / {project.screenshots.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        locale={locale}
      />
    </>
  );
}
