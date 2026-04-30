"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactModal = dynamic(
  () => import("./contact-modal").then((mod) => mod.ContactModal),
  { ssr: false }
);

interface ShopifyJapanCTAButtonProps {
  label: string;
  locale: "en" | "jp";
  className?: string;
}

export const ShopifyJapanCTAButton = ({
  label,
  locale,
  className = "",
}: ShopifyJapanCTAButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        size="lg"
        onClick={() => setIsModalOpen(true)}
        className={`relative w-full overflow-hidden rounded-lg px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 sm:w-auto animate-shiny-gradient ${className}`}
        style={{
          background:
            "linear-gradient(90deg, #ec4899 0%, #06b6d4 50%, #ec4899 100%)",
          backgroundSize: "200% 100%",
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-black/20"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)",
          }}
        />
        {label}
        <ArrowRight className="ml-2 h-4 w-4" />
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
