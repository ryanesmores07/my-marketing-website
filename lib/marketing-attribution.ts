export const attributionFields = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "ref",
] as const;

type AttributionField = (typeof attributionFields)[number];

export type MarketingAttribution = Partial<Record<AttributionField, string>> & {
  landingPage?: string;
  referrer?: string;
};

export const getMarketingAttribution = (): MarketingAttribution => {
  if (typeof window === "undefined") {
    return {};
  }

  const params = new URLSearchParams(window.location.search);
  const attribution: MarketingAttribution = {
    landingPage: window.location.pathname,
  };

  attributionFields.forEach((field) => {
    const value = params.get(field);
    if (value) {
      attribution[field] = value;
    }
  });

  if (document.referrer) {
    attribution.referrer = document.referrer;
  }

  return attribution;
};
