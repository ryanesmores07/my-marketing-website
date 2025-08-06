"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Globe, ArrowRight } from "lucide-react";

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

  // Prevent background scroll when overlay is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Clean up on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  const handleSelect = (locale: "en" | "jp") => {
    localStorage.setItem("preferredLocale", locale);
    setShow(false); // Hide overlay immediately
    router.replace(`/${locale}`);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="w-full max-w-lg mx-auto p-8 rounded-2xl shadow-2xl bg-card border border-border flex flex-col items-center gap-8">
        {/* Header with Icon */}
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Globe className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground">
            Welcome / ようこそ
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Please select your preferred language
            <br />
            お好みの言語を選択してください
          </p>
        </div>

        {/* Language Options */}
        <div className="flex flex-col gap-4 w-full">
          <Button
            className="w-full py-8 text-xl font-semibold group hover:scale-[1.02] transition-all duration-200"
            onClick={() => handleSelect("en")}
            aria-label="Select English"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <span className="text-2xl">🇺🇸</span>
                <div className="text-left">
                  <div className="font-bold">English</div>
                  <div className="text-sm text-muted-foreground font-normal">
                    Continue in English
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Button>

          <Button
            variant="outline"
            className="w-full py-8 text-xl font-semibold group hover:scale-[1.02] transition-all duration-200 border-2"
            onClick={() => handleSelect("jp")}
            aria-label="日本語を選択"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <span className="text-2xl">🇯🇵</span>
                <div className="text-left">
                  <div className="font-bold">日本語</div>
                  <div className="text-sm text-muted-foreground font-normal">
                    日本語で続ける
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Button>
        </div>

        {/* Footer Note */}
        <div className="text-center text-sm text-muted-foreground mt-4">
          <p>
            You can change this later in the navigation
            <br />
            後でナビゲーションから変更できます
          </p>
        </div>
      </div>
    </div>
  );
};
