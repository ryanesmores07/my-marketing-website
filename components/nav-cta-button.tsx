"use client";

import { useRouter, usePathname } from "next/navigation";
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
  const router = useRouter();
  const pathname = usePathname();
  const isOnHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  const handleClick = () => {
    if (isOnHome) {
      const element = document.querySelector("#cta");
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${locale}#cta`);
    }
    onClose?.();
  };

  return (
    <Button onClick={handleClick} className={fullWidth ? "w-full" : ""}>
      {locale === "jp" ? "お問い合わせ" : "Get Started"}
    </Button>
  );
};
