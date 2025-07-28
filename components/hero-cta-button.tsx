import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroCTAButtonProps {
  ctaText: string;
}

export const HeroCTAButton = ({ ctaText }: HeroCTAButtonProps) => {
  return (
    <Link href="#cta">
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
        <span className="relative z-10 font-bold">
          {ctaText}
          <span className="ml-2">→</span>
        </span>
      </Button>
    </Link>
  );
};
