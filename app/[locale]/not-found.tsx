"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "jp" ? "jp" : "en";

  const copy =
    locale === "jp"
      ? {
          code: "404",
          heading: "ページが見つかりません",
          description:
            "お探しのページは存在しないか、移動した可能性があります。",
          cta: "ホームに戻る",
        }
      : {
          code: "404",
          heading: "Page not found",
          description:
            "The page you're looking for doesn't exist or has been moved.",
          cta: "Go home",
        };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <p
          className="text-6xl font-bold mb-4 text-foreground"
          aria-hidden="true"
        >
          {copy.code}
        </p>
        <h1 className="text-3xl font-semibold mb-4 text-foreground">
          {copy.heading}
        </h1>
        <p className="text-base mb-8 text-muted-foreground">
          {copy.description}
        </p>
        <Button asChild>
          <Link href={`/${locale}`}>{copy.cta}</Link>
        </Button>
      </div>
    </div>
  );
}
