"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { contactConfig } from "@/lib/contact-config";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  platform: "line" | "whatsapp";
  locale: "en" | "jp";
}

const QRCodeModal = ({
  isOpen,
  onClose,
  platform,
  locale,
}: QRCodeModalProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent
        );
      const isSmallScreen = window.innerWidth <= 768;
      const isTouchDevice = "ontouchstart" in window;

      setIsMobile(isMobileDevice || (isSmallScreen && isTouchDevice));
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const content = {
    en: {
      line: {
        title: "Scan the LINE QR code",
        description:
          "Open LINE and scan this QR code to add me and start chatting.",
        fallbackText: "Open LINE",
        fallbackUrl: contactConfig.line.url,
      },
      whatsapp: {
        title: "Scan the WhatsApp QR code",
        description:
          "Open WhatsApp and scan this QR code to start a conversation.",
        fallbackText: "Open WhatsApp",
        fallbackUrl: contactConfig.whatsapp.url,
      },
      closeButton: "Close",
    },
    jp: {
      line: {
        title: "LINEのQRコード",
        description:
          "LINEアプリでこのQRコードを読み取ると、そのまま連絡できます。",
        fallbackText: "LINEを開く",
        fallbackUrl: contactConfig.line.url,
      },
      whatsapp: {
        title: "WhatsAppのQRコード",
        description:
          "WhatsAppアプリでこのQRコードを読み取ると、そのまま連絡できます。",
        fallbackText: "WhatsAppを開く",
        fallbackUrl: contactConfig.whatsapp.url,
      },
      closeButton: "閉じる",
    },
  };

  const t = content[locale];
  const platformContent = t[platform];

  const handleFallbackClick = () => {
    window.open(platformContent.fallbackUrl, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="border border-gray-200 bg-white text-gray-900 shadow-2xl sm:max-w-md">
        <DialogTitle className="sr-only">{platformContent.title}</DialogTitle>

        <div className="space-y-4 pt-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Image
              src={`/images/${platform}.png`}
              alt={platform === "line" ? "LINE" : "WhatsApp"}
              width={32}
              height={32}
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <h2 className="text-xl font-semibold">{platformContent.title}</h2>
          </div>

          <p className="mb-6 text-sm text-gray-600">
            {platformContent.description}
          </p>

          <div className="mb-6 flex justify-center">
            <Image
              src={contactConfig.qrCodes[platform]}
              alt={`${platform === "line" ? "LINE" : "WhatsApp"} QR code`}
              width={200}
              height={200}
              className="rounded-lg border-2 border-gray-200"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

          {(platform === "line" || (platform === "whatsapp" && isMobile)) && (
            <div className="border-t pt-4">
              <Button
                variant="outline"
                onClick={handleFallbackClick}
                className="w-full"
              >
                {platformContent.fallbackText}
              </Button>
            </div>
          )}

          <Button variant="ghost" onClick={onClose} className="w-full">
            {t.closeButton}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { QRCodeModal };
