"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServicesErrorProps {
  locale?: string;
}

export function ServicesError({ locale = "en" }: ServicesErrorProps) {
  return (
    <div className="text-center py-10">
      <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-destructive/10 text-destructive ring-1 ring-inset ring-destructive/20 mb-6">
        <span className="relative flex h-2 w-2 mr-2">
          <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
        </span>
        Services Unavailable
      </div>

      <h3 className="text-xl font-bold text-foreground mb-4">
        Unable to Load Services
      </h3>

      <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
        We&apos;re having trouble loading our services right now. Please try
        refreshing the page or contact us directly.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={() => window.location.reload()} size="lg">
          Try Again
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href={`/${locale}/contact`}>Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
