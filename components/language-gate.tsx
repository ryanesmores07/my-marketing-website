"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const LanguageGate = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Only show if no language is set
    const lang =
      typeof window !== "undefined"
        ? localStorage.getItem("preferredLocale")
        : null;
    if (!lang) setShow(true);
  }, []);

  const handleSelect = (locale: "en" | "jp") => {
    localStorage.setItem("preferredLocale", locale);
    setShow(false); // Hide overlay immediately
    router.replace(`/${locale}`);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="w-full max-w-md mx-auto p-8 rounded-2xl shadow-2xl bg-card border border-border flex flex-col items-center gap-8">
        <h2 className="text-2xl font-bold text-center mb-2">
          Select your language
        </h2>
        <div className="flex flex-col gap-4 w-full">
          <Button
            className="w-full py-6 text-xl font-semibold"
            onClick={() => handleSelect("en")}
            aria-label="Select English"
          >
            English
          </Button>
          <Button
            className="w-full py-6 text-xl font-semibold"
            onClick={() => handleSelect("jp")}
            aria-label="日本語を選択"
          >
            日本語
          </Button>
        </div>
      </div>
    </div>
  );
};
