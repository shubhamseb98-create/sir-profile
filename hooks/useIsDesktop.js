"use client";

import { useSyncExternalStore } from "react";

export function useIsDesktop(breakpoint = 1024) {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener("resize", callback);
      return () => window.removeEventListener("resize", callback);
    },
    () => window.innerWidth >= breakpoint,
    () => false
  );
}
