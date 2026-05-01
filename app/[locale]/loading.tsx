"use client";

import { useParams } from "next/navigation";

export default function Loading() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "jp" ? "jp" : "en";
  const label = locale === "jp" ? "読み込み中..." : "Loading...";

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-background"
      role="status"
      aria-live="polite"
    >
      <div className="text-center">
        <div
          className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"
          aria-hidden="true"
        />
        <p className="text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
