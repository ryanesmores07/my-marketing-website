"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ContactModal } from "./contact-modal";

interface HeroCTAButtonProps {
  ctaText: string;
  locale?: "en" | "jp";
}

export const HeroCTAButton = ({
  ctaText,
  locale = "en",
}: HeroCTAButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        size="lg"
        className="relative w-full sm:w-auto px-8 py-4 text-white rounded-lg font-semibold text-base overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 animate-shiny-gradient"
        style={{
          background:
            "linear-gradient(90deg, #ec4899 0%, #06b6d4 50%, #ec4899 100%)",
          backgroundSize: "200% 100%",
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        }}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Dark overlay for better text contrast */}
        <div
          className="absolute inset-0 bg-black/20 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)",
          }}
        />

        {/* Text content with relative positioning */}
        {ctaText}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        locale={locale}
      />
    </>
  );
};
