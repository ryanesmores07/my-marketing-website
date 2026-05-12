"use client";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { QRCodeModal } from "./qr-code-modal";
import { contactConfig } from "@/lib/contact-config";
import { trackEvent } from "@/lib/gtag";

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

  const handleContact = () => {
    trackEvent("contact_channel_click", {
      locale,
      contact_method: platform,
      device_type: isMobile ? "mobile" : "desktop",
      page_path: window.location.pathname,
    });
    trackEvent(`${platform}_click`, {
      locale,
      device_type: isMobile ? "mobile" : "desktop",
      page_path: window.location.pathname,
    });

    const encodedMessage = encodeURIComponent(
      contactConfig.messageTemplates[locale]
    );

    if (isMobile) {
      const openingMessages = {
        line: locale === "jp" ? "LINEを開いています..." : "Opening LINE...",
        whatsapp:
          locale === "jp"
            ? "WhatsAppを開いています..."
            : "Opening WhatsApp...",
      };

      toast(openingMessages[platform], {
        duration: 3000,
        position: "bottom-center",
      });

      setTimeout(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const isIOS = /iphone|ipad|ipod/.test(userAgent);

        if (platform === "line") {
          const lineAppUrl = `${contactConfig.line.mobileUrl}?text=${encodedMessage}`;
          const lineWebUrl = `${contactConfig.line.url}?text=${encodedMessage}`;
          const lineStoreUrl = isIOS
            ? "https://apps.apple.com/app/line/id443904275"
            : "https://play.google.com/store/apps/details?id=jp.naver.line.android";

          const link = document.createElement("a");
          link.href = lineAppUrl;
          link.target = "_blank";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          setTimeout(() => {
            window.open(lineWebUrl, "_blank");

            setTimeout(() => {
              const installMessage =
                locale === "jp"
                  ? "LINEアプリが開かない場合は、ストアからアプリをインストールしてください。"
                  : "If LINE does not open, please install the app from the store.";

              toast(installMessage, {
                duration: 4000,
                position: "bottom-center",
                action: {
                  label: locale === "jp" ? "アプリを入手" : "Install app",
                  onClick: () => window.open(lineStoreUrl, "_blank"),
                },
              });
            }, 2000);
          }, 1000);
        } else {
          const whatsappUrl = `${contactConfig.whatsapp.url}?text=${encodedMessage}`;
          const whatsappStoreUrl = isIOS
            ? "https://apps.apple.com/app/whatsapp-messenger/id310633997"
            : "https://play.google.com/store/apps/details?id=com.whatsapp";

          window.open(whatsappUrl, "_blank");

          setTimeout(() => {
            const installMessage =
              locale === "jp"
                ? "WhatsAppが開かない場合は、ストアからアプリをインストールしてください。"
                : "If WhatsApp does not open, please install the app from the store.";

            toast(installMessage, {
              duration: 4000,
              position: "bottom-center",
              action: {
                label: locale === "jp" ? "アプリを入手" : "Install app",
                onClick: () => window.open(whatsappStoreUrl, "_blank"),
              },
            });
          }, 2000);
        }
      }, 1500);
    } else {
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
