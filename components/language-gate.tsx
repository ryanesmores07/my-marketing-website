"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LanguageGate = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname.startsWith("/en") || pathname.startsWith("/jp")) {
      setShow(false);
      return;
    }

    const lang =
      typeof window !== "undefined"
        ? localStorage.getItem("preferredLocale")
        : null;

    if (!lang && pathname === "/") {
      setShow(true);
    }
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  const handleSelect = (locale: "en" | "jp") => {
    localStorage.setItem("preferredLocale", locale);
    setShow(false);
    router.replace(`/${locale}`);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-8 rounded-2xl border border-border bg-card p-8 shadow-2xl">
        <div className="space-y-4 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Globe className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground">
            Welcome / ようこそ
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Please select your preferred language
            <br />
            ご希望の言語を選択してください
          </p>
        </div>

        <div className="flex w-full flex-col gap-4">
          <Button
            className="group w-full py-8 text-xl font-semibold transition-all duration-200 hover:scale-[1.02]"
            onClick={() => handleSelect("en")}
            aria-label="Select English"
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl">EN</span>
                <div className="text-left">
                  <div className="font-bold">English</div>
                  <div className="text-sm font-normal text-muted-foreground">
                    Continue in English
                  </div>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
          </Button>

          <Button
            variant="outline"
            className="group w-full border-2 py-8 text-xl font-semibold transition-all duration-200 hover:scale-[1.02]"
            onClick={() => handleSelect("jp")}
            aria-label="日本語を選択"
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl">JP</span>
                <div className="text-left">
                  <div className="font-bold">日本語</div>
                  <div className="text-sm font-normal text-muted-foreground">
                    日本語で続ける
                  </div>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
          </Button>
        </div>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>
            You can change this later in the navigation
            <br />
            あとからナビゲーションでも変更できます
          </p>
        </div>
      </div>
    </div>
  );
};
