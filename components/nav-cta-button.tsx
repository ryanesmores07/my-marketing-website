"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ContactModal } from "./contact-modal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      <Button onClick={handleClick} className={fullWidth ? "w-full" : ""}>
        {locale === "jp" ? "開始する" : "Get Started"}
      </Button>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        locale={locale as "en" | "jp"}
      />
    </>
  );
};
