"use client";

import { useEffect } from "react";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let destroyed = false;
    let lenisInstance: { raf: (t: number) => void; destroy: () => void } | null = null;

    import("lenis").then(({ default: Lenis }) => {
      if (destroyed) return;

      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        if (destroyed) return;
        lenisInstance!.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    });

    return () => {
      destroyed = true;
      lenisInstance?.destroy();
    };
  }, []);

  return <>{children}</>;
}
