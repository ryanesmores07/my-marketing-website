"use client";

import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { QRCodeModal } from "./qr-code-modal";
import { contactConfig } from "@/lib/contact-config";

interface SmartContactHandlerProps {
  platform: "line" | "whatsapp";
  locale: "en" | "jp";
  children: React.ReactNode;
}

const SmartContactHandler = ({
  platform,
  locale,
  children,
}: SmartContactHandlerProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

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

      // More reliable mobile detection
      setIsMobile(isMobileDevice || (isSmallScreen && isTouchDevice));
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleContact = () => {
    const encodedMessage = encodeURIComponent(
      contactConfig.messageTemplates[locale]
    );

    console.log("Mobile detection:", isMobile);
    console.log("Platform:", platform);

    if (isMobile) {
      // Mobile: Show toast notification and then open app
      const messages = {
        line:
          locale === "jp"
            ? "LINEアプリを開いています..."
            : "Opening LINE app...",
        whatsapp:
          locale === "jp" ? "WhatsAppを開いています..." : "Opening WhatsApp...",
      };

      // Show toast message first
      toast(messages[platform], {
        duration: 3000,
        position: "bottom-center",
      });

      // Open app after a longer delay to ensure toast is visible
      setTimeout(() => {
        // Detect device type for app store URLs
        const userAgent = navigator.userAgent.toLowerCase();
        const isIOS = /iphone|ipad|ipod/.test(userAgent);

        if (platform === "line") {
          // LINE app handling
          const lineAppUrl = `${contactConfig.line.mobileUrl}?text=${encodedMessage}`;
          const lineWebUrl = `${contactConfig.line.url}?text=${encodedMessage}`;

          // App store URLs
          const lineAppStoreUrl = isIOS
            ? "https://apps.apple.com/app/line/id443904275"
            : "https://play.google.com/store/apps/details?id=jp.naver.line.android";

          console.log("LINE mobile URL:", lineAppUrl);
          console.log("LINE web URL:", lineWebUrl);

          // Try to open LINE app
          const link = document.createElement("a");
          link.href = lineAppUrl;
          link.target = "_blank";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          // Check if app opened successfully after 1 second
          setTimeout(() => {
            // If we're still on the same page, app probably didn't open
            // Try web URL first, then app store
            window.open(lineWebUrl, "_blank");

            // Show app store option after another delay
            setTimeout(() => {
              const installMessage =
                locale === "jp"
                  ? "LINEアプリがインストールされていない場合は、アプリストアからインストールしてください。"
                  : "If LINE app is not installed, please install it from the app store.";

              toast(installMessage, {
                duration: 4000,
                position: "bottom-center",
                action: {
                  label: locale === "jp" ? "アプリストア" : "App Store",
                  onClick: () => window.open(lineAppStoreUrl, "_blank"),
                },
              });
            }, 2000);
          }, 1000);
        } else {
          // WhatsApp app handling
          const whatsappUrl = `${contactConfig.whatsapp.url}?text=${encodedMessage}`;

          // App store URLs
          const whatsappAppStoreUrl = isIOS
            ? "https://apps.apple.com/app/whatsapp-messenger/id310633997"
            : "https://play.google.com/store/apps/details?id=com.whatsapp";

          console.log("WhatsApp URL:", whatsappUrl);

          // Try to open WhatsApp
          window.open(whatsappUrl, "_blank");

          // Show app store option after a delay
          setTimeout(() => {
            const installMessage =
              locale === "jp"
                ? "WhatsAppがインストールされていない場合は、アプリストアからインストールしてください。"
                : "If WhatsApp is not installed, please install it from the app store.";

            toast(installMessage, {
              duration: 4000,
              position: "bottom-center",
              action: {
                label: locale === "jp" ? "アプリストア" : "App Store",
                onClick: () => window.open(whatsappAppStoreUrl, "_blank"),
              },
            });
          }, 2000);
        }
      }, 1500); // Show toast for 1.5 seconds before opening app
    } else {
      // Desktop: Show QR code modal
      setIsQRModalOpen(true);
    }
  };

  return (
    <>
      <div
        onClick={handleContact}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleContact();
          }
        }}
        className="cursor-pointer"
        role="button"
        tabIndex={0}
      >
        {children}
      </div>

      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
        platform={platform}
        locale={locale}
      />
    </>
  );
};

export { SmartContactHandler };
