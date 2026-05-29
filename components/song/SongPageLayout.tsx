"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Song } from "@/lib/songs-data";
import { SONGS } from "@/lib/songs-data";
import type { SongContent, Reference } from "@/lib/song-content";
import { SYMBOL_MAP } from "@/components/shared/SymbolSVG";

interface Props {
  song: Song;
  content: SongContent;
}

const JOURNEY_LABELS: Record<string, string> = {
  thunder: "Rolling Thunder Revue",
  guerin: "Guerin Tour",
  solo: "Cross-country Solo",
};

/* Journey colors now come from CSS custom properties via data-journey attribute */

const p = (filename: string) => `/photos/${encodeURIComponent(filename)}`;

const SONG_BG_PHOTOS: Record<string, string> = {
  "coyote":      "Joni black crow skiing no look.jpg",
  "amelia":      "another skiing, very white joni.jfif",
  "furry":       "joni smoking.webp",
  "strange-boy": "Joni smiling pretty, session with sky on her lap.jpg",
  "hejira":      "GREAT image, joni skiing ice, for background great.jfif",
  "sharon":      "Hejira album art, TOP ONLY, from chest.webp",
  "black-crow":  "Hejira winter ice black crow smiling.jfif",
  "blue-motel":  "Joni french model, black crow sitting down.webp",
  "refuge":      "Very edited photo, hand man, black crow.webp",
};

/* Gallery removed — photos now serve as subtle section backgrounds */

export default function SongPageLayout({ song, content }: Props) {
  const router = useRouter();
  const [openAnnotation, setOpenAnnotation] = useState<string | null>(null);
  const [openReference, setOpenReference] = useState<string | null>(null);
  const storyRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bgPhoto = SONG_BG_PHOTOS[song.slug];

  const songIndex = SONGS.findIndex((s) => s.slug === song.slug);
  const prevSong = songIndex > 0 ? SONGS[songIndex - 1] : null;
  const nextSong = songIndex < SONGS.length - 1 ? SONGS[songIndex + 1] : null;

  const SymbolIcon = SYMBOL_MAP[song.slug];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    storyRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleAnnotation = useCallback((id: string) => {
    setOpenAnnotation((prev) => (prev === id ? null : id));
  }, []);

  const toggleReference = useCallback((id: string) => {
    setOpenReference((prev) => (prev === id ? null : id));
  }, []);

  const findReferenceInText = (text: string, references: Reference[]) => {
    const parts: { text: string; ref?: Reference }[] = [];
    let remaining = text;

    for (const ref of references) {
      const idx = remaining.indexOf(ref.term);
      if (idx !== -1) {
        if (idx > 0) parts.push({ text: remaining.slice(0, idx) });
        parts.push({ text: ref.term, ref });
        remaining = remaining.slice(idx + ref.term.length);
      }
    }
    if (remaining) parts.push({ text: remaining });

    if (parts.length === 0) return [{ text }];
    return parts;
  };

  return (
    <div className="song-page" data-journey={song.journey}>
      {/* Navigation */}
      <nav className="song-page__nav">
        <Link href="/the-map" className="song-page__back">
          ← Mapa
        </Link>
        <div className="song-page__nav-center">
          <span className="song-page__track-num">
            {song.trackNumber} / 9
          </span>
        </div>
        <div className="song-page__nav-arrows">
          {prevSong ? (
            <Link href={`/song/${prevSong.slug}`} className="song-page__arrow" title={prevSong.title}>
              ←
            </Link>
          ) : <span className="song-page__arrow song-page__arrow--disabled">←</span>}
          {nextSong ? (
            <Link href={`/song/${nextSong.slug}`} className="song-page__arrow" title={nextSong.title}>
              →
            </Link>
          ) : <span className="song-page__arrow song-page__arrow--disabled">→</span>}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="song-page__hero" style={{
        background: `linear-gradient(180deg, ${content.heroGradient[0]} 0%, ${content.heroGradient[1]} 50%, ${content.heroGradient[2]} 100%)`,
      }}>
        {/* Album art background — always present, low opacity */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/Hejira_good_definition_albumart.jpg"
          alt=""
          className="song-page__hero-bg"
          aria-hidden="true"
        />
        <div className="song-page__hero-overlay" />
        <div className="song-page__hero-content">
          {SymbolIcon && (
            <div className="song-page__hero-icon">
              <SymbolIcon size={80} />
            </div>
          )}
          <div className="song-page__hero-meta">
            <span className="song-page__journey-badge" style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
            }}>
              {JOURNEY_LABELS[song.journey]}
            </span>
          </div>
          <h1 className="song-page__title">{song.title}</h1>
          <p className="song-page__location">{song.city}</p>
          <div className="song-page__hero-details">
            <span>{song.duration}</span>
            <span className="song-page__dot">·</span>
            <span>{song.personnel[0]?.instrument}</span>
          </div>
        </div>
      </header>

      {/* Quote */}
      {content.joniQuote && (
        <section className="song-page__quote-section">
          <blockquote className="song-page__quote">
            &ldquo;{content.joniQuote}&rdquo;
          </blockquote>
          <cite className="song-page__quote-cite">— Joni Mitchell</cite>
        </section>
      )}

      {/* Main Content */}
      <div className={`song-page__content${bgPhoto ? " song-page__section-bg-wrap" : ""}`}>
        {bgPhoto && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p(bgPhoto)} alt="" className="song-page__section-bg-img" aria-hidden="true" />
            <div className="song-page__section-bg-tint" aria-hidden="true" />
          </>
        )}
        {/* Lyrics Column */}
        <section className="song-page__lyrics">
          <h2 className="song-page__section-title">The Song</h2>
          {content.lyrics.map((section) => (
            <div key={section.id} className="song-page__lyric-section">
              <div className="song-page__lyric-label">{section.label}</div>
              {(() => {
                const elements = [];
                let i = 0;
                while (i < section.lines.length) {
                  const line = section.lines[i];
                  const lineId = `${section.id}-${i}`;
                  const hasAnnotation = !!line.annotation;
                  const span = line.annotationSpan || 1;
                  const blockLines = section.lines.slice(i, i + span);
                  const isOpen = openAnnotation === lineId;

                  elements.push(
                    <div key={i} className="song-page__lyric-block-wrapper">
                      <div
                        className={`song-page__lyric-block ${hasAnnotation ? "song-page__lyric-line--annotated" : ""}`}
                        onClick={hasAnnotation ? () => toggleAnnotation(lineId) : undefined}
                        role={hasAnnotation ? "button" : undefined}
                        tabIndex={hasAnnotation ? 0 : undefined}
                        onKeyDown={hasAnnotation ? (e) => { if (e.key === "Enter") toggleAnnotation(lineId); } : undefined}
                      >
                        {blockLines.map((bLine, bIdx) => (
                          <div key={bIdx} className="song-page__lyric-line">
                            {bLine.text}
                            {hasAnnotation && bIdx === 0 && (
                              <span className="song-page__annotation-indicator">↗</span>
                            )}
                          </div>
                        ))}
                      </div>
                      {hasAnnotation && (
                        <div className={`song-page__annotation ${isOpen ? "song-page__annotation--open" : ""}`}>
                          <div className="song-page__annotation-text">
                            {line.annotation}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                  i += span;
                }
                return elements;
              })()}
            </div>
          ))}
        </section>

        {/* Story Column */}
        <section className="song-page__story">
          <h2 className="song-page__section-title">The Story</h2>
          {content.storyParagraphs.map((para, i) => (
            <div
              key={i}
              ref={(el) => { storyRefs.current[i] = el; }}
              className="song-page__story-paragraph"
              style={{
                opacity: 0,
                transform: "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              {para}
            </div>
          ))}

          {content.photoshootNote && (
            <div
              ref={(el) => { storyRefs.current[content.storyParagraphs.length] = el; }}
              className="song-page__photoshoot"
              style={{
                opacity: 0,
                transform: "translateY(24px)",
                transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
              }}
            >
              <h3 className="song-page__subsection-title">The Photoshoot</h3>
              <p>{content.photoshootNote}</p>
            </div>
          )}
        </section>
      </div>

      {/* References / Expandable Cards */}
      {content.references.length > 0 && (
        <section className="song-page__references">
          <h2 className="song-page__section-title">References</h2>
          <p className="song-page__references-intro">
            Click on any reference to expand its details.
          </p>
          <div className="song-page__references-grid">
            {content.references.map((ref) => {
              const isOpen = openReference === ref.id;
              return (
                <div
                  key={ref.id}
                  className={`song-page__ref-card ${isOpen ? "song-page__ref-card--open" : ""}`}
                  onClick={() => toggleReference(ref.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter") toggleReference(ref.id); }}
                >
                  <div className="song-page__ref-header">
                    <span className={`song-page__ref-category song-page__ref-category--${ref.category}`}>
                      {ref.category}
                    </span>
                    <h3 className="song-page__ref-term">{ref.term}</h3>
                    <p className="song-page__ref-summary">{ref.summary}</p>
                    <span className="song-page__ref-toggle">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                  <div className={`song-page__ref-details ${isOpen ? "song-page__ref-details--open" : ""}`}>
                    <div className="song-page__ref-details-inner">
                      <p>{ref.details}</p>
                      {(ref.location || ref.date) && (
                        <div className="song-page__ref-meta">
                          {ref.location && <span>📍 {ref.location}</span>}
                          {ref.date && <span>📅 {ref.date}</span>}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Personnel */}
      <section className="song-page__personnel">
        <h2 className="song-page__section-title">Musicians</h2>
        <div className="song-page__personnel-grid">
          {song.personnel.map((m, i) => (
            <div key={i} className={`song-page__musician ${m.isGuest ? "song-page__musician--guest" : ""}`}>
              <span className="song-page__musician-name">{m.name}</span>
              <span className="song-page__musician-instrument">{m.instrument}</span>
              {m.isGuest && <span className="song-page__musician-guest">guest</span>}
            </div>
          ))}
        </div>
        {song.emotionalNote && (
          <p className="song-page__emotional-note">{song.emotionalNote}</p>
        )}
      </section>

      {/* Thread Connections */}
      {song.threads.length > 0 && (
        <section className="song-page__threads">
          <h2 className="song-page__section-title">Threads</h2>
          <div className="song-page__threads-grid">
            {song.threads.map((thread) => {
              const targetSong = SONGS.find((s) => s.slug === thread.slug);
              if (!targetSong) return null;
              return (
                <Link
                  key={thread.slug}
                  href={`/song/${thread.slug}`}
                  className="song-page__thread-card"
                >
                  <div className="song-page__thread-arrow">→</div>
                  <div className="song-page__thread-title">{targetSong.title}</div>
                  <div className="song-page__thread-reason">{thread.reason}</div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Gallery removed — photos now serve as section backgrounds */}

      {/* Navigation Footer */}
      <footer className="song-page__footer">
        <div className="song-page__footer-nav">
          {prevSong ? (
            <Link href={`/song/${prevSong.slug}`} className="song-page__footer-link song-page__footer-link--prev">
              <span className="song-page__footer-label">Previous</span>
              <span className="song-page__footer-song">{prevSong.title}</span>
            </Link>
          ) : <div />}
          {nextSong ? (
            <Link href={`/song/${nextSong.slug}`} className="song-page__footer-link song-page__footer-link--next">
              <span className="song-page__footer-label">Next</span>
              <span className="song-page__footer-song">{nextSong.title}</span>
            </Link>
          ) : <div />}
        </div>
        <div className="song-page__footer-divider" />
        <Link href="/the-map" className="song-page__footer-back">
          ← Back to the Map
        </Link>
      </footer>
    </div>
  );
}
