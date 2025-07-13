"use client";

import { Button } from "@/components/ui/button";

interface HeroCTAButtonProps {
  ctaText: string;
}

export const HeroCTAButton = ({ ctaText }: HeroCTAButtonProps) => {
  const handleClick = () => {
    const element = document.querySelector("#cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      size="lg"
      className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-base"
      onClick={handleClick}
    >
      {ctaText}
      <span className="ml-2">→</span>
    </Button>
  );
};
