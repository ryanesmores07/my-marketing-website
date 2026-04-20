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
    element?.scrollIntoView({ behavior: "smooth" });
    onClose?.();
  };

  return (
    <Button onClick={handleClick} className={fullWidth ? "w-full" : ""}>
      {locale === "jp" ? "お問い合わせ" : "Get Started"}
    </Button>
  );
};
