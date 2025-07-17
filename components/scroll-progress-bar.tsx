"use client";
import { useEffect, useState } from "react";

export const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScroll(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-1 bg-transparent sticky top-16 z-[49]">
      <div
        className="h-full bg-primary/60 rounded-full shadow-[0_0_8px_2px_var(--tw-shadow-color)] shadow-primary/30 transition-all duration-200"
        style={{ width: `${scroll}%` }}
        aria-hidden="true"
      />
    </div>
  );
};
