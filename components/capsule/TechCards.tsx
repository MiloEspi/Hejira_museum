"use client";

import { ReactNode } from "react";
import { BLACK_CROW_TECH_CARDS } from "@/lib/capsule-data";

/**
 * TechCards — Three cards: Jaco's bass, Carlton's guitar, Open tunings.
 * Hover lift effect. Emotional content, not cold technical.
 */
export default function TechCards() {
  const iconSVGs: Record<string, ReactNode> = {
    bass: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="rgba(200,214,221,0.3)" strokeWidth="1">
        <path d="M 14 2 L 14 26" strokeLinecap="round" />
        <ellipse cx="14" cy="20" rx="8" ry="5" />
        <circle cx="14" cy="20" r="2" />
        <rect x="12" y="2" width="4" height="4" rx="1" />
      </svg>
    ),
    guitar: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="rgba(200,214,221,0.3)" strokeWidth="1">
        <path d="M 14 2 L 14 26" strokeLinecap="round" />
        <ellipse cx="14" cy="19" rx="7" ry="6" />
        <circle cx="14" cy="19" r="2.5" />
        <rect x="12" y="2" width="4" height="3" rx="1" />
        <path d="M 7 12 Q 14 8 21 12" />
      </svg>
    ),
    tuning: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="rgba(200,214,221,0.3)" strokeWidth="1">
        <circle cx="14" cy="14" r="10" />
        <circle cx="14" cy="14" r="4" />
        <path d="M 14 4 L 14 10 M 14 18 L 14 24 M 4 14 L 10 14 M 18 14 L 24 14" />
        <circle cx="14" cy="14" r="1.5" fill="rgba(200,214,221,0.3)" />
      </svg>
    ),
  };

  return (
    <div className="capsule-tech">
      <div className="capsule-section-header">How It Sounds the Way It Sounds</div>
      <div className="capsule-tech__grid">
        {BLACK_CROW_TECH_CARDS.map((card) => (
          <div key={card.id} className="capsule-tech__card">
            <div style={{ marginBottom: "16px" }}>
              {iconSVGs[card.icon]}
            </div>
            <div className="capsule-tech__card-title">{card.title}</div>
            <div className="capsule-tech__card-subtitle">{card.subtitle}</div>
            <div className="capsule-tech__card-desc">{card.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
