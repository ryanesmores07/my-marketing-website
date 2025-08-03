"use client";

import React, { useState, useEffect } from "react";
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

  // Detect mobile device
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
        title: "Scan LINE QR Code",
        description:
          "Open LINE app and scan this QR code to add me as a friend",
        fallbackText: "Can't scan? Click here to open LINE",
        fallbackUrl: contactConfig.line.url,
      },
      whatsapp: {
        title: "Scan WhatsApp QR Code",
        description: "Open WhatsApp and scan this QR code to start chatting",
        fallbackText: "Can't scan? Click here to open WhatsApp",
        fallbackUrl: contactConfig.whatsapp.url,
      },
      closeButton: "Close",
    },
    jp: {
      line: {
        title: "LINE QRコードをスキャン",
        description:
          "LINEアプリを開いて、このQRコードをスキャンして友達追加してください",
        fallbackText: "スキャンできない場合、こちらをクリックしてLINEを開く",
        fallbackUrl: contactConfig.line.url,
      },
      whatsapp: {
        title: "WhatsApp QRコードをスキャン",
        description:
          "WhatsAppを開いて、このQRコードをスキャンしてチャットを開始",
        fallbackText:
          "スキャンできない場合、こちらをクリックしてWhatsAppを開く",
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
      <DialogContent className="sm:max-w-md bg-white border border-gray-200 shadow-2xl text-gray-900">
        <DialogTitle className="sr-only">{platformContent.title}</DialogTitle>

        <div className="relative">
          <div className="text-center space-y-4 pt-8">
            {/* Platform icon and title */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <Image
                src={`/images/${platform}.png`}
                alt={platform === "line" ? "LINE" : "WhatsApp"}
                width={32}
                height={32}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              />
              <h2 className="text-xl font-semibold">{platformContent.title}</h2>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-6">
              {platformContent.description}
            </p>

            {/* QR Code */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Image
                  src={contactConfig.qrCodes[platform]}
                  alt={`${platform === "line" ? "LINE" : "WhatsApp"} QR Code`}
                  width={200}
                  height={200}
                  className="border-2 border-gray-200 rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
            </div>

            {/* Fallback link - Only show for LINE or WhatsApp on mobile */}
            {(platform === "line" || (platform === "whatsapp" && isMobile)) && (
              <div className="pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={handleFallbackClick}
                  className="w-full"
                >
                  {platformContent.fallbackText}
                </Button>
              </div>
            )}

            {/* Close button */}
            <Button variant="ghost" onClick={onClose} className="w-full">
              {t.closeButton}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { QRCodeModal };
