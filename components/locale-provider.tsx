"use client";

import { useEffect } from "react";

interface LocaleProviderProps {
  locale: string;
  children: React.ReactNode;
}

export const LocaleProvider = ({ locale, children }: LocaleProviderProps) => {
  useEffect(() => {
    // Update the HTML lang attribute on the client side
    document.documentElement.lang = locale;
  }, [locale]);

  return <>{children}</>;
};
