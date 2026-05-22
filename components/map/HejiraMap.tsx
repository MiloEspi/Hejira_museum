"use client";

import { useState, useCallback } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
} from "react-simple-maps";
import { SONGS, type Song } from "@/lib/songs-data";
import { JOURNEYS, type Journey } from "@/lib/journey-data";
import { ROUTES } from "@/lib/routes-coords";
import SongMarker from "./SongMarker";
import JourneyToggle from "./JourneyToggle";
import MapLegend from "./MapLegend";
import MapDetails from "./MapDetails";

const TOPO_URL = "/maps/us-states-10m.json";

/**
 * Region color mapping: assigns US states to watercolor regions.
 * Uses FIPS codes from the TopoJSON.
 */
const STATE_REGION_COLORS: Record<string, string> = {
  // Pacific NW — musgo
  "53": "#7a9466", // Washington
  "41": "#7a9466", // Oregon
  // Desert SW — ocre
  "04": "#c89554", // Arizona
  "32": "#c89554", // Nevada
  "35": "#c89554", // New Mexico
  "06": "#c89554", // California
  // Rockies — marrón rojizo
  "30": "#9a7a55", // Montana
  "16": "#9a7a55", // Idaho
  "56": "#9a7a55", // Wyoming
  "08": "#9a7a55", // Colorado
  "49": "#9a7a55", // Utah
  // Great Plains — amarillo trigo
  "38": "#d8c074", // North Dakota
  "46": "#d8c074", // South Dakota
  "31": "#d8c074", // Nebraska
  "20": "#d8c074", // Kansas
  "40": "#d8c074", // Oklahoma
  // Midwest — verde-amarillo
  "27": "#a8a45a", // Minnesota
  "19": "#a8a45a", // Iowa
  "29": "#a8a45a", // Missouri
  "17": "#a8a45a", // Illinois
  "18": "#a8a45a", // Indiana
  "39": "#a8a45a", // Ohio
  // Great Lakes / Northern — azul invernal
  "55": "#8aa4b8", // Wisconsin
  "26": "#8aa4b8", // Michigan
  // Northeast — sepia urbano
  "09": "#9a7a5a", // Connecticut
  "25": "#9a7a5a", // Massachusetts
  "33": "#9a7a5a", // New Hampshire
  "44": "#9a7a5a", // Rhode Island
  "50": "#9a7a5a", // Vermont
  "23": "#9a7a5a", // Maine
  "36": "#9a7a5a", // New York
  "34": "#9a7a5a", // New Jersey
  "42": "#9a7a5a", // Pennsylvania
  // Mid-Atlantic / Appalachian
  "10": "#8a7a5a", // Delaware
  "24": "#8a7a5a", // Maryland
  "11": "#8a7a5a", // DC
  "54": "#8a7a5a", // West Virginia
  "51": "#8a7a5a", // Virginia
  "37": "#8a7a5a", // North Carolina
  "21": "#8a7a5a", // Kentucky
  "47": "#8a7a5a", // Tennessee
  // Deep South — verde húmedo
  "01": "#7a8a4a", // Alabama
  "28": "#7a8a4a", // Mississippi
  "22": "#7a8a4a", // Louisiana
  "05": "#7a8a4a", // Arkansas
  "13": "#7a8a4a", // Georgia
  "45": "#7a8a4a", // South Carolina
  // Texas — ocre seco
  "48": "#b89464", // Texas
  // Florida — verde tropical
  "12": "#6a9464", // Florida
  // Hawaii (hidden but just in case)
  "15": "#6a9464",
  // Alaska
  "02": "#8aa4b8",
};

/** Get journey style config by slug */
function getJourneyStyle(slug: string): { color: string; dasharray: string; width: number } {
  const j = JOURNEYS.find((j) => j.slug === slug);
  if (!j) return { color: "#888", dasharray: "none", width: 2 };

  const colorMap: Record<string, string> = {
    thunder: "#6b1f2a",
    guerin: "#1f3a4a",
    solo: "#8a5a2b",
  };

  return {
    color: colorMap[slug] || "#888",
    dasharray: j.strokeDasharray === "none" ? "" : j.strokeDasharray,
    width: 2.4,
  };
}

export default function HejiraMap() {
  const [journeysActive, setJourneysActive] = useState(false);
  const [hoveredSong, setHoveredSong] = useState<string | null>(null);

  const handleToggle = useCallback(() => {
    setJourneysActive((prev) => !prev);
  }, []);

  return (
    <div className="absolute inset-0">
      {/* SVG map */}
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{
          scale: 1100,
        }}
        width={980}
        height={610}
        style={{ width: "100%", height: "100%" }}
      >
        {/* SVG filters for watercolor + hand-drawn effects */}
        <defs>
          <filter id="watercolor-soft" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="5" />
            <feDisplacementMap in="SourceGraphic" scale="4" />
            <feGaussianBlur stdDeviation="1" />
          </filter>
          <filter id="pen-rough">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="1" />
            <feDisplacementMap in="SourceGraphic" scale="1.8" />
          </filter>
        </defs>

        {/* Layer 1: Regional watercolor fill */}
        <Geographies geography={TOPO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateId = geo.id as string;
              const regionColor = STATE_REGION_COLORS[stateId] || "#d9c8a6";
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={regionColor}
                  stroke="none"
                  style={{
                    default: { opacity: 0.45, outline: "none" },
                    hover: { opacity: 0.45, outline: "none" },
                    pressed: { opacity: 0.45, outline: "none" },
                  }}
                  filter="url(#watercolor-soft)"
                />
              );
            })
          }
        </Geographies>

        {/* Layer 1b: Second watercolor pass with slight offset for painterly depth */}
        <Geographies geography={TOPO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateId = geo.id as string;
              const regionColor = STATE_REGION_COLORS[stateId] || "#d9c8a6";
              return (
                <Geography
                  key={`${geo.rsmKey}-overlay`}
                  geography={geo}
                  fill={regionColor}
                  stroke="none"
                  style={{
                    default: { opacity: 0.2, outline: "none" },
                    hover: { opacity: 0.2, outline: "none" },
                    pressed: { opacity: 0.2, outline: "none" },
                  }}
                  filter="url(#watercolor-soft)"
                  tabIndex={-1}
                />
              );
            })
          }
        </Geographies>

        {/* Layer 2: State outlines — hand-drawn pen style */}
        <Geographies geography={TOPO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={`${geo.rsmKey}-outline`}
                geography={geo}
                fill="none"
                stroke="#3d2818"
                strokeWidth={0.5}
                style={{
                  default: { opacity: 0.3, outline: "none" },
                  hover: { opacity: 0.3, outline: "none" },
                  pressed: { opacity: 0.3, outline: "none" },
                }}
                tabIndex={-1}
              />
            ))
          }
        </Geographies>

        {/* Layer 2b: Country outline — heavier stroke */}
        <Geographies geography={TOPO_URL}>
          {({ geographies }) => {
            // We can't easily get the outer border from individual states,
            // so we use a merged look by drawing all states with thicker stroke
            return geographies.map((geo) => (
              <Geography
                key={`${geo.rsmKey}-border`}
                geography={geo}
                fill="none"
                stroke="#3d2818"
                strokeWidth={1.2}
                filter="url(#pen-rough)"
                style={{
                  default: { opacity: 0.6, outline: "none" },
                  hover: { opacity: 0.6, outline: "none" },
                  pressed: { opacity: 0.6, outline: "none" },
                }}
                tabIndex={-1}
              />
            ));
          }}
        </Geographies>

        {/* Layer 3: Map details — rivers, mountains, labels */}
        <MapDetails />

        {/* Layer 4: Journey routes */}
        {ROUTES.map((route) => {
          const style = getJourneyStyle(route.journey);
          return (
            <Line
              key={route.journey}
              coordinates={route.waypoints}
              stroke={style.color}
              strokeWidth={journeysActive ? 3.5 : style.width}
              strokeDasharray={style.dasharray}
              strokeLinecap="round"
              fill="none"
              style={{
                opacity: journeysActive ? 1 : 0.65,
                transition: "opacity 0.4s, stroke-width 0.4s",
              }}
            />
          );
        })}

        {/* Layer 5: Song markers */}
        {SONGS.map((song) => (
          <Marker key={song.slug} coordinates={song.coords}>
            <SongMarker
              song={song}
              isHovered={hoveredSong === song.slug}
              onHover={() => setHoveredSong(song.slug)}
              onLeave={() => setHoveredSong(null)}
            />
          </Marker>
        ))}
      </ComposableMap>

      {/* UI overlays */}
      <JourneyToggle active={journeysActive} onToggle={handleToggle} />
      <MapLegend visible={journeysActive} />

      {/* Compass rose */}
      <div className="absolute bottom-[30px] right-[30px] z-[3] opacity-40 pointer-events-none">
        <svg width="70" height="70" viewBox="-40 -40 80 80">
          <circle cx="0" cy="0" r="26" stroke="#3d2818" strokeWidth="1" fill="var(--paper)" fillOpacity="0.85" />
          <circle cx="0" cy="0" r="20" stroke="#3d2818" strokeWidth="0.4" fill="none" opacity="0.5" />
          <path d="M 0 -22 L 5 0 L 0 22 L -5 0 Z" fill="#6e5235" />
          <path d="M 0 -22 L 5 0 L 0 0 Z" fill="#2b1d10" />
          <text x="0" y="-32" textAnchor="middle" fontFamily="var(--font-italiana), serif" fontSize="14" fill="#2b1d10">N</text>
          <text x="0" y="40" textAnchor="middle" fontFamily="var(--font-italiana), serif" fontSize="11" fill="#2b1d10" opacity="0.6">S</text>
          <text x="-32" y="3" textAnchor="middle" fontFamily="var(--font-italiana), serif" fontSize="11" fill="#2b1d10" opacity="0.6">W</text>
          <text x="32" y="3" textAnchor="middle" fontFamily="var(--font-italiana), serif" fontSize="11" fill="#2b1d10" opacity="0.6">E</text>
        </svg>
      </div>

      {/* Scale bar */}
      <div className="absolute bottom-[30px] left-[40px] z-[3] opacity-[0.55] pointer-events-none">
        <svg width="120" height="30" viewBox="0 0 120 30">
          <line x1="0" y1="15" x2="100" y2="15" stroke="#3d2818" strokeWidth="1.2" />
          <line x1="0" y1="10" x2="0" y2="20" stroke="#3d2818" strokeWidth="1.2" />
          <line x1="50" y1="12" x2="50" y2="18" stroke="#3d2818" strokeWidth="0.8" />
          <line x1="100" y1="10" x2="100" y2="20" stroke="#3d2818" strokeWidth="1.2" />
          <text x="50" y="8" textAnchor="middle" fontFamily="var(--font-courier-prime), monospace" fontSize="9" fill="#3d2818">
            1,000 miles
          </text>
        </svg>
      </div>
    </div>
  );
}
