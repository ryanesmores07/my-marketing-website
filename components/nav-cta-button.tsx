"use client";

import { Button } from "@/components/ui/button";

interface NavCTAButtonProps {
  locale: string;
  fullWidth?: boolean;
  onClose?: () => void;
}

export const NavCTAButton = ({
  locale,
  fullWidth = false,
  onClose,
}: NavCTAButtonProps) => {
  const handleClick = () => {
    const element = document.querySelector("#cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <Button onClick={handleClick} className={fullWidth ? "w-full" : ""}>
      {locale === "jp" ? "開始する" : "Get Started"}
    </Button>
  );
};
