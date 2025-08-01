"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "./contact-modal";

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
        className="relative px-8 py-4 text-white rounded-full font-semibold text-base overflow-hidden transition-all duration-200 hover:scale-102 hover:shadow-lg"
        style={{
          background:
            "linear-gradient(90deg, #3b82f6 0%, #06b6d4 50%, #3b82f6 100%)",
          backgroundSize: "200% 100%",
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        }}
        onClick={handleClick}
      >
        {/* Simple dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* Text content with relative positioning */}
        <span className="relative z-10 flex items-center">
          {locale === "jp"
            ? "今すぐ相談する"
            : "Tell me more about your project"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </span>
      </Button>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        locale={locale}
      />
    </>
  );
};
