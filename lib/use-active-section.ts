"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently in view.
 *
 * Uses IntersectionObserver with a viewport-centered rootMargin so a section
 * is considered "active" once it crosses the upper-middle of the screen.
 * Returns the id of the most recently-intersected section, or the first id
 * as a fallback before any observation fires.
 */
export function useActiveSection(sectionIds: readonly string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    if (typeof window === "undefined" || sectionIds.length === 0) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Tracks the y-position of every observed section so we can pick the one
    // closest to the top of the viewport (but still below the sticky nav).
    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibility.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibility.delete(entry.target.id);
          }
        }

        // Pick the visible section nearest the top of the viewport.
        let bestId: string | null = null;
        let bestTop = Number.POSITIVE_INFINITY;
        for (const id of visibility.keys()) {
          const el = document.getElementById(id);
          if (!el) continue;
          const top = el.getBoundingClientRect().top;
          // Prefer sections whose top is at or above the middle of the screen.
          const adjusted = top < 0 ? -top : top;
          if (adjusted < bestTop) {
            bestTop = adjusted;
            bestId = id;
          }
        }

        if (bestId) setActiveId(bestId);
      },
      {
        // Fires when a section crosses the upper third of the viewport.
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
