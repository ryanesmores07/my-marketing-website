"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "@/lib/gtag";

export const GoogleAnalyticsPageView = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedUrlRef = useRef<string | null>(null);

  useEffect(() => {
    const queryString = searchParams.toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;

    const handlePageView = () => {
      if (lastTrackedUrlRef.current === url) {
        return;
      }

      lastTrackedUrlRef.current = url;
      trackPageView(url);
    };

    if (window.gtagReady) {
      handlePageView();
      return;
    }

    window.addEventListener("gtag-ready", handlePageView, { once: true });

    return () => {
      window.removeEventListener("gtag-ready", handlePageView);
    };
  }, [pathname, searchParams]);

  return null;
};
