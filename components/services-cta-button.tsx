"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactModal = dynamic(
  () => import("./contact-modal").then((mod) => mod.ContactModal),
  { ssr: false }
);

interface ServicesCTAButtonProps {
  locale: "en" | "jp";
}

export const ServicesCTAButton = ({ locale }: ServicesCTAButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <Button
        size="lg"
        className="relative overflow-hidden rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:scale-102 hover:shadow-lg"
        style={{
          background:
            "linear-gradient(90deg, #3b82f6 0%, #06b6d4 50%, #3b82f6 100%)",
          backgroundSize: "200% 100%",
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        }}
        onClick={handleClick}
      >
        <div className="pointer-events-none absolute inset-0 bg-black/10" />

        <span className="relative z-10 flex items-center">
          {locale === "jp"
            ? "プロジェクトについて相談する"
            : "Tell me about your project"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </span>
      </Button>

      {isModalOpen && (
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          locale={locale}
        />
      )}
    </>
  );
};
