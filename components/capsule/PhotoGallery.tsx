"use client";

import { BLACK_CROW_PHOTOS } from "@/lib/capsule-data";

/**
 * PhotoGallery — Polaroid-style frames with slight rotation.
 * Cream border, handwritten captions. SVG placeholders.
 */
export default function PhotoGallery() {
  return (
    <div className="capsule-gallery">
      <div className="capsule-section-header">From the Photoshoot · Lake Mendota 1976</div>
      <div className="capsule-gallery__grid">
        {BLACK_CROW_PHOTOS.map((photo, i) => (
          <div
            key={photo.id}
            className={`capsule-gallery__polaroid ${i === 0 ? "capsule-gallery__polaroid--large" : "capsule-gallery__polaroid--small"}`}
            style={{
              transform: `rotate(${photo.rotation}deg)`,
            }}
          >
            <div className="capsule-gallery__image">
              {/* Placeholder SVG matching project aesthetic */}
              <svg width="100%" height="100%" viewBox="0 0 160 120">
                <rect width="160" height="120" fill="#d9c8a6" opacity="0.3" />
                {/* Lake Mendota scene sketch */}
                <g opacity="0.3" stroke="#4a3520" strokeWidth="0.6" fill="none">
                  {/* Horizon */}
                  <line x1="0" y1="50" x2="160" y2="50" />
                  {/* Ice surface */}
                  <path d="M 0 50 Q 40 48 80 50 Q 120 52 160 50" />
                  {/* Figure skating */}
                  <g transform="translate(80, 44)">
                    <circle cx="0" cy="-4" r="2" fill="#2b1d10" opacity="0.3" />
                    <line x1="0" y1="-2" x2="0" y2="4" />
                    <path d="M -1 0 Q -6 -3 -8 -1" />
                    <path d="M 1 0 Q 6 -3 8 -1" />
                  </g>
                  {/* Camera icon */}
                  <g transform="translate(130, 42)" opacity="0.5">
                    <rect x="-3" y="-2" width="6" height="4" rx="0.5" />
                    <circle cx="0" cy="0" r="1" />
                  </g>
                </g>
                {/* Film grain */}
                <text x="80" y="90" textAnchor="middle" fontFamily="var(--font-reenie-beanie), cursive" fontSize="12" fill="#6e5235" opacity="0.4">
                  awaiting photograph
                </text>
              </svg>
            </div>
            <div className="capsule-gallery__caption">{photo.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
