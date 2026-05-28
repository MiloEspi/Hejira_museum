"use client";

import { useEffect, useRef } from "react";

/**
 * HeroAnimation — Large animated crow flying over frozen lake with mist.
 * Subtle bob animation. Parallax-ready.
 */
export default function HeroAnimation() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const parallaxOffset = scrollY * 0.3;
      heroRef.current.style.transform = `translateY(${parallaxOffset}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="capsule-hero">
      {/* Frozen lake background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0a0a14 0%, #1a2030 40%, #2a3a4a 70%, #c8d6dd 100%)",
          opacity: 0.6,
        }}
      />

      {/* Ice texture on bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%]"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(200,214,221,0.08) 50%, rgba(200,214,221,0.15) 100%)",
        }}
      />

      {/* Mist layers */}
      <div className="capsule-hero__mist" />
      <div className="capsule-hero__mist capsule-hero__mist--slow" />

      {/* Crow — large, animated */}
      <div ref={heroRef} className="capsule-hero__crow relative z-10">
        <svg viewBox="0 0 200 120" width="280" height="168" aria-label="Black crow flying over frozen lake">
          {/* Crow body */}
          <g transform="translate(100, 50)">
            {/* Body */}
            <ellipse cx="0" cy="0" rx="18" ry="10" fill="#0a0a0a" />
            {/* Head */}
            <circle cx="18" cy="-8" r="8" fill="#0a0a0a" />
            {/* Beak */}
            <path d="M 26 -8 L 36 -6 L 26 -4 Z" fill="#1a1a1a" />
            <line x1="26" y1="-7" x2="33" y2="-6.5" stroke="#2a2a2a" strokeWidth="0.5" />
            {/* Eye — golden, piercing */}
            <circle cx="22" cy="-10" r="2.5" fill="#c89554" />
            <circle cx="22.5" cy="-10.5" r="1" fill="#0a0a0a" />
            <circle cx="23" cy="-11" r="0.4" fill="#ede1c8" />

            {/* Left wing — extended, detailed */}
            <path d="M -8 -4 Q -40 -28 -60 -14 Q -50 -6 -40 -2 Q -28 2 -12 2 Z" fill="#0a0a0a" />
            <path d="M -8 -4 Q -36 -24 -56 -12" stroke="#1a1a1a" strokeWidth="0.5" fill="none" />
            {/* Wing feathers */}
            <line x1="-30" y1="-10" x2="-36" y2="-16" stroke="#1a1a1a" strokeWidth="0.8" />
            <line x1="-38" y1="-8" x2="-44" y2="-14" stroke="#1a1a1a" strokeWidth="0.8" />
            <line x1="-46" y1="-6" x2="-52" y2="-12" stroke="#1a1a1a" strokeWidth="0.8" />
            <line x1="-52" y1="-4" x2="-58" y2="-10" stroke="#1a1a1a" strokeWidth="0.7" />

            {/* Right wing */}
            <path d="M 8 -4 Q 40 -28 60 -14 Q 50 -6 40 -2 Q 28 2 12 2 Z" fill="#0a0a0a" />
            <path d="M 8 -4 Q 36 -24 56 -12" stroke="#1a1a1a" strokeWidth="0.5" fill="none" />
            <line x1="30" y1="-10" x2="36" y2="-16" stroke="#1a1a1a" strokeWidth="0.8" />
            <line x1="38" y1="-8" x2="44" y2="-14" stroke="#1a1a1a" strokeWidth="0.8" />
            <line x1="46" y1="-6" x2="52" y2="-12" stroke="#1a1a1a" strokeWidth="0.8" />

            {/* Tail */}
            <path d="M -18 0 L -28 8 L -24 2 L -18 4 Z" fill="#0a0a0a" />
            <path d="M -20 1 L -26 6" stroke="#1a1a1a" strokeWidth="0.5" fill="none" />

            {/* Breast feather texture */}
            <path d="M 8 0 Q 12 4 8 6" stroke="#1a1a1a" strokeWidth="0.5" fill="none" />
            <path d="M 4 2 Q 8 6 4 8" stroke="#1a1a1a" strokeWidth="0.5" fill="none" />
            <path d="M 0 3 Q 4 7 0 9" stroke="#1a1a1a" strokeWidth="0.5" fill="none" />
          </g>

          {/* Shadow / reflection on ice */}
          <ellipse cx="100" cy="105" rx="50" ry="6" fill="#0a0a0a" opacity="0.08" />
        </svg>
      </div>

      {/* Track info below crow */}
      <div className="relative z-10 text-center mt-8">
        <div style={{
          fontFamily: "var(--font-courier-prime), monospace",
          fontSize: "11px",
          letterSpacing: "0.3em",
          color: "rgba(200,214,221,0.35)",
          textTransform: "uppercase",
        }}>
          — vii / ix —
        </div>
        <h1 style={{
          fontFamily: "var(--font-italiana), serif",
          fontSize: "clamp(36px, 6vw, 56px)",
          fontWeight: 400,
          color: "#e8eef0",
          letterSpacing: "0.08em",
          marginTop: "8px",
          lineHeight: 1,
        }}>
          Black Crow
        </h1>
        <div style={{
          fontFamily: "var(--font-courier-prime), monospace",
          fontSize: "10px",
          letterSpacing: "0.2em",
          color: "rgba(200,214,221,0.35)",
          marginTop: "12px",
        }}>
          4:20 · cross-country · mar 1976
        </div>
        <div style={{
          fontFamily: "var(--font-cormorant-garamond), serif",
          fontSize: "14px",
          fontStyle: "italic",
          color: "rgba(200,214,221,0.4)",
          marginTop: "6px",
        }}>
          Jaco Pastorius · fretless bass
        </div>
      </div>
    </div>
  );
}
