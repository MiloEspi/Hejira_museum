"use client";

import { useState } from "react";
import { BLACK_CROW_LYRICS } from "@/lib/capsule-data";

/**
 * AnnotatedLyrics — Full lyrics with clickable annotated verses.
 * Click → slide-down annotation with smooth transition.
 */
export default function AnnotatedLyrics() {
  const [openAnnotation, setOpenAnnotation] = useState<string | null>(null);

  const toggleAnnotation = (id: string) => {
    setOpenAnnotation((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <div className="capsule-section-header">The Song</div>
      {BLACK_CROW_LYRICS.map((section) => (
        <div key={section.id} className="capsule-lyrics__section">
          {section.label && (
            <div className="capsule-lyrics__label">{section.label}</div>
          )}
          {section.lines.map((line, lineIdx) => {
            const lineId = `${section.id}-${lineIdx}`;
            const hasAnnotation = !!line.annotation;
            const isOpen = openAnnotation === lineId;

            return (
              <div key={lineIdx}>
                <div
                  className={`capsule-lyrics__line ${hasAnnotation ? "capsule-lyrics__line--annotated" : ""}`}
                  onClick={hasAnnotation ? () => toggleAnnotation(lineId) : undefined}
                  role={hasAnnotation ? "button" : undefined}
                  tabIndex={hasAnnotation ? 0 : undefined}
                  onKeyDown={hasAnnotation ? (e) => { if (e.key === "Enter") toggleAnnotation(lineId); } : undefined}
                >
                  {line.text}
                </div>
                {hasAnnotation && (
                  <div
                    className={`capsule-lyrics__annotation ${isOpen ? "capsule-lyrics__annotation--open" : ""}`}
                  >
                    <div className="capsule-lyrics__annotation-text">
                      {line.annotation}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
