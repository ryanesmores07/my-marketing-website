"use client";

import { useEffect, useLayoutEffect } from "react";

interface LocaleProviderProps {
  locale: string;
  children: React.ReactNode;
}

// Must match the key written by navigation-client.tsx when switching languages.
const SCROLL_RESTORE_KEY = "lang-swap-scrollY";
// Ignore restore flags older than this (e.g. after a real navigation).
const RESTORE_TTL_MS = 5000;
// Retry window — we repeatedly re-assert scrollY for this long to beat any
// late scroll-to-top from the router or browser hash-anchor behavior.
const RESTORE_HOLD_MS = 400;

// useLayoutEffect fires before the browser paints, avoiding the flash-to-top
// that useEffect allows. Falls back to useEffect during SSR to silence the
// React warning about running useLayoutEffect on the server.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const LocaleProvider = ({ locale, children }: LocaleProviderProps) => {
  useEffect(() => {
    // Update the HTML lang attribute on the client side
    document.documentElement.lang = locale;
  }, [locale]);

  // Restore scroll position after a language switch. The nav stores the
  // user's scrollY before navigating; we consume it here on the new page.
  //
  // Runs in useLayoutEffect so the scroll is applied before the browser
  // paints the new locale — no visible flash to the top of the page.
  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;

    let raw: string | null = null;
    try {
      raw = sessionStorage.getItem(SCROLL_RESTORE_KEY);
    } catch {
      return;
    }
    if (!raw) return;

    // Clear immediately so a later real navigation doesn't reuse this value.
    try {
      sessionStorage.removeItem(SCROLL_RESTORE_KEY);
    } catch {
      // non-fatal
    }

    let payload: { y?: number; ts?: number } = {};
    try {
      payload = JSON.parse(raw);
    } catch {
      return;
    }

    if (
      typeof payload.y !== "number" ||
      typeof payload.ts !== "number" ||
      Date.now() - payload.ts > RESTORE_TTL_MS
    ) {
      return;
    }

    // Re-assert scrollY for a short window. This fights race conditions with:
    //   - Next.js App Router's own scroll-to-top on route change
    //   - Browser hash-anchor auto-scroll
    //   - Late layout shifts from images/fonts/hydration
    // Once the window is up, we stop — the user takes control again.
    const targetY = payload.y;
    const start =
      typeof performance !== "undefined" ? performance.now() : Date.now();
    let rafId = 0;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      // Only re-assert if something (Next.js, browser) moved us away.
      if (window.scrollY !== targetY) {
        window.scrollTo({ top: targetY, left: 0, behavior: "auto" });
      }
      const now =
        typeof performance !== "undefined" ? performance.now() : Date.now();
      if (now - start < RESTORE_HOLD_MS) {
        rafId = requestAnimationFrame(tick);
      }
    };

    // Fire synchronously once (pre-paint), then keep asserting on rAF.
    window.scrollTo({ top: targetY, left: 0, behavior: "auto" });
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, [locale]);

  return <>{children}</>;
};
