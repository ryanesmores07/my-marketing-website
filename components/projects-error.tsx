"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProjectsErrorProps {
  locale?: string;
}

export function ProjectsError({ locale = "en" }: ProjectsErrorProps) {
  return (
    <div className="text-center py-10">
      <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-red-50 text-red-700 ring-1 ring-inset ring-red-700/10 mb-6">
        <span className="relative flex h-2 w-2 mr-2">
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        Projects Unavailable
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Unable to Load Projects
      </h3>

      <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
        We&apos;re having trouble loading our project portfolio right now.
        Please try refreshing the page.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={() => window.location.reload()} size="lg">
          Try Again
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href={`/${locale}/#services`}>View All Services</Link>
        </Button>
      </div>
    </div>
  );
}
