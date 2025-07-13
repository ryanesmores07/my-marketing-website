"use client";

interface ServicesCTAButtonProps {
  locale: "en" | "jp";
}

export const ServicesCTAButton = ({ locale }: ServicesCTAButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href="#cta"
      className="inline-flex items-center justify-center rounded-full border border-border bg-background/10 backdrop-blur-sm px-8 py-4 text-sm font-medium text-foreground hover:bg-background/20 hover:border-primary/50 transition-all duration-300 shadow-lg"
      onClick={handleClick}
    >
      {locale === "jp" ? "今すぐ相談する →" : "Let's Chat →"}
    </a>
  );
};
