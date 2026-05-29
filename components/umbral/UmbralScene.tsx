"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useAnimate, AnimatePresence, MotionConfig } from "framer-motion";
import { useRouter } from "next/navigation";
import JoniSilhouette from "./JoniSilhouette";
import SnowField from "./SnowField";

export default function UmbralScene() {
  const router = useRouter();
  const [scope, animate] = useAnimate();
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const hasStarted = useRef(false);

  const startSequence = useCallback(async () => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    setPhase(1);

    // t=0.6s — wind layer
    await animate("#wind-layer", { opacity: 1 }, { duration: 1.4, ease: "easeOut", delay: 0.6 });

    // t=1.8s — silhouette + snow
    setPhase(2);
    await animate("#joni-wrapper", { opacity: 1 }, { duration: 1.6, ease: "easeOut" });

    // t=3.4s — subtitle text
    setPhase(3);
    await animate("#subtitle", { opacity: 1 }, { duration: 1.2, ease: "easeOut", delay: 0.2 });

    // title "Hejira" after 0.8s
    await animate("#title-hejira", { opacity: 1, y: 0 }, { duration: 1.4, ease: "easeOut", delay: 0.6 });

    // t=5.0s — CTA
    setPhase(4);
    await animate("#cta", { opacity: 1 }, { duration: 1, ease: "easeOut", delay: 0.4 });
  }, [animate]);

  const handleEnter = useCallback(async () => {
    if (isExiting || phase < 4) return;
    setIsExiting(true);

    // Exit choreography: silhouette shrinks and fades
    animate(
      "#joni-wrapper",
      { opacity: 0, scale: 0.85 },
      { duration: 0.8, ease: "easeIn" }
    );
    animate("#subtitle", { opacity: 0 }, { duration: 0.4 });
    animate("#title-hejira", { opacity: 0 }, { duration: 0.4 });
    animate("#cta", { opacity: 0 }, { duration: 0.2 });

    // Snow lingers 0.4s more
    await new Promise((r) => setTimeout(r, 800));
    animate("#snow-wrapper", { opacity: 0 }, { duration: 0.4 });

    await new Promise((r) => setTimeout(r, 400));
    router.push("/the-map");
  }, [isExiting, phase, animate, router]);

  // Auto-start the choreography on mount
  useEffect(() => {
    startSequence();
  }, [startSequence]);

  return (
    <MotionConfig reducedMotion="never">
      <AnimatePresence>
        <motion.div
        ref={scope}
        className="fixed inset-0 w-screen h-screen flex items-center justify-center cursor-pointer overflow-hidden z-50"
        style={{
          background: `
            radial-gradient(ellipse 120% 100% at 50% 60%, #1a1510 0%, #2a2218 40%, #1a1510 80%),
            linear-gradient(180deg, #121010 0%, #1e1a14 50%, #0f0d0a 100%)
          `,
        }}
        onClick={phase >= 4 ? handleEnter : undefined}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && phase >= 4) {
            handleEnter();
          }
        }}
        tabIndex={0}
        role="button"
        aria-label="Click to enter Hejira"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Road texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.12 0 0 0 0 0.1 0 0 0 0 0.08 0 0 0 0.18 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
            mixBlendMode: "screen",
          }}
        />
        {/* Road center line */}
        <div
          className="absolute left-1/2 top-0 bottom-0 pointer-events-none"
          style={{
            width: "2px",
            background: "repeating-linear-gradient(180deg, rgba(196,162,101,0.08) 0px, rgba(196,162,101,0.08) 40px, transparent 40px, transparent 80px)",
            transform: "translateX(-50%)",
          }}
        />

        {/* Wind layer */}
        <div
          id="wind-layer"
          className="absolute inset-[-10%] opacity-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 30% 50%, rgba(255,255,255,0.04), transparent 70%),
              radial-gradient(ellipse 50% 30% at 70% 30%, rgba(255,255,255,0.03), transparent 70%)
            `,
            animation: "wind-drift 14s ease-in-out infinite",
          }}
        />

        {/* Snow */}
        <motion.div
          id="snow-wrapper"
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: 0.7 } : { opacity: 0 }}
          transition={{ duration: 1.6 }}
        >
          <SnowField />
        </motion.div>

        {/* Joni silhouette */}
        <div id="joni-wrapper" className="relative opacity-0">
          <JoniSilhouette />
        </div>

        {/* Title block — positioned bottom */}
        <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 text-center w-[90%] max-w-[700px]">
          {/* Subtitle */}
          <p
            id="subtitle"
            className="opacity-0"
            style={{
              fontFamily: "var(--font-im-fell-english), serif",
              fontSize: "clamp(16px, 2.4vw, 28px)",
              color: "#d4c8b0",
              fontStyle: "italic",
              letterSpacing: "0.18em",
              lineHeight: 1.8,
            }}
          >
            <em style={{ color: "#f0e4c8", fontWeight: 400 }}>running away</em>{" "}
            with honor
          </p>

          {/* HEJIRA title */}
          <motion.h1
            id="title-hejira"
            className="opacity-0 mt-4"
            initial={{ y: 12 }}
            style={{
              fontFamily: "var(--font-italiana), serif",
              fontSize: "clamp(80px, 11vw, 160px)",
              color: "#f0e4c8",
              letterSpacing: "0.14em",
              lineHeight: 1,
              textShadow: "0 0 60px rgba(240, 228, 200, 0.15)",
            }}
          >
            Hejira
          </motion.h1>
        </div>

        {/* CTA */}
        <p
          id="cta"
          className="absolute bottom-[5%] left-1/2 -translate-x-1/2 opacity-0 uppercase"
          style={{
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: "11px",
            letterSpacing: "0.4em",
            color: "rgba(212, 200, 176, 0.6)",
            animation:
              phase >= 4 ? "pulse-cta 2.4s ease-in-out infinite" : "none",
          }}
        >
          — click anywhere to enter —
        </p>
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
}
