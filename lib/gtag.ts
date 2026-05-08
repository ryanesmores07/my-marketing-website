export const GA_MEASUREMENT_ID = "G-CMEG2PPWCQ";

type GtagValue = string | number | boolean | undefined;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    gtagReady?: boolean;
  }
}

const getGtag = () => {
  if (typeof window === "undefined") {
    return null;
  }

  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag !== "function") {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
  }

  return window.gtag;
};

export const trackEvent = (
  eventName: string,
  params?: Record<string, GtagValue>
) => {
  const gtag = getGtag();

  if (!gtag) {
    return;
  }

  gtag("event", eventName, params);
};

export const trackPageView = (url: string, title?: string) => {
  const gtag = getGtag();

  if (!gtag) {
    return;
  }

  gtag("event", "page_view", {
    send_to: GA_MEASUREMENT_ID,
    page_title: title ?? document.title,
    page_path: url,
    page_location: `${window.location.origin}${url}`,
  });
};
