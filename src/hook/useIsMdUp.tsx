"use client"

import { useEffect, useState } from "react";

export function useIsMdUp() {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)"); // md breakpoint Tailwind
    setIsMdUp(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsMdUp(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isMdUp;
}