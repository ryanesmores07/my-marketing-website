"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAScrollLinksProps {
  primaryText: string;
  secondaryText: string;
}

export const CTAScrollLinks = ({
  primaryText,
  secondaryText,
}: CTAScrollLinksProps) => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        size="lg"
        className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white border-0"
        onClick={() => handleScrollToSection("#services")}
      >
        {primaryText}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="h-12 px-8 border-blue-400 text-blue-100 hover:bg-blue-900/50"
        onClick={() => handleScrollToSection("#projects")}
      >
        {secondaryText}
      </Button>
    </div>
  );
};
