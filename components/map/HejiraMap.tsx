"use client";

import { useState, useCallback, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { geoAlbers } from "d3-geo";
import { SONGS } from "@/lib/songs-data";

import { ROUTES } from "@/lib/routes-coords";
import type { JourneySlug } from "@/lib/songs-data";
import SongMarker from "./SongMarker";
import JourneyToggle from "./JourneyToggle";
import MapLegend from "./MapLegend";
import MapDetails from "./MapDetails";
import JourneyDetailPanel from "./JourneyDetailPanel";

const US_TOPO_URL = "/maps/us-states-10m.json";
const WORLD_TOPO_URL = "/maps/countries-50m.json";

const MAP_WIDTH = 1400;
const MAP_HEIGHT = 820;

/* ───────── Projection config ───────── */
/* Zoomed in — US fills the viewport edge-to-edge, just enough Canada for Coyote */
const PROJECTION_CONFIG = {
  rotate: [97, 0, 0] as [number, number, number],
  center: [0, 39] as [number, number],
  parallels: [29, 55] as [number, number],
  scale: 1550,
};

/* ───────── Regional watercolor palette — high contrast ───────── */
const STATE_REGION_COLORS: Record<string, string> = {
  // Pacific NW — deep forest green
  "53": "#5e8c52", "41": "#5e8c52",
  // Southwest — warm terracotta / desert
  "04": "#d4915a", "32": "#c89554", "35": "#cf8a4e", "06": "#daa060",
  // Rockies — dusty slate brown
  "30": "#8a7055", "16": "#8a7055", "56": "#8a7055", "08": "#96785a", "49": "#937a58",
  // Great Plains — wheat gold
  "38": "#dcc06a", "46": "#dcc06a", "31": "#d8b85e", "20": "#d4b456", "40": "#d0b050",
  // Upper midwest — muted blue-green
  "27": "#7e9a6a", "19": "#7e9a6a", "29": "#8a9060", "17": "#7e9a6a", "18": "#7e9a6a", "39": "#7e9a6a",
  // Wisconsin/Michigan — cool blue
  "55": "#6a98b4", "26": "#6a98b4",
  // New England — amber brown
  "09": "#a88050", "25": "#a88050", "33": "#a88050", "44": "#a88050", "50": "#a88050",
  "23": "#a88050", "36": "#9a7a50", "34": "#9a7a50", "42": "#9a7a50",
  // Mid-Atlantic / Appalachia — warm grey-green
  "10": "#7a8a5a", "24": "#7a8a5a", "11": "#7a8a5a", "54": "#7a8a5a",
  "51": "#7a8a5a", "37": "#7a8a5a", "21": "#7a8a5a", "47": "#7a8a5a",
  // Deep South — rich moss
  "01": "#5a7a3a", "28": "#5a7a3a", "22": "#5a7a3a", "05": "#5a7a3a", "13": "#5a7a3a", "45": "#5a7a3a",
  // Texas — burnt sienna
  "48": "#c08a54",
  // Florida — tropical green
  "12": "#4a8a54",
  "15": "#4a8a54",
  "02": "#6a98b4",
};

/* ───────── Journey route styles ───────── */
const JOURNEY_STYLES: Record<string, {
  color: string;
  dasharray: string;
  width: number;
  glow: string;
  opacity: number;
  fadeEnd?: boolean;
}> = {
  thunder: {
    color: "#6b1f2a",
    dasharray: "2,3",
    width: 2.2,
    glow: "rgba(107,31,42,0.35)",
    opacity: 0.85,
  },
  guerin: {
    color: "#1f3a4a",
    dasharray: "6,5",
    width: 2.2,
    glow: "rgba(31,58,74,0.3)",
    opacity: 0.75,
    fadeEnd: true,
  },
  solo: {
    color: "#8a5a2b",
    dasharray: "",
    width: 3,
    glow: "rgba(138,90,43,0.3)",
    opacity: 1,
  },
};

/* ───────── Catmull-Rom spline ───────── */
function catmullRomSpline(points: [number, number][], tension = 0.5): string {
  if (points.length < 2) return "";
  if (points.length === 2) return `M${points[0][0]},${points[0][1]}L${points[1][0]},${points[1][1]}`;

  let d = `M${points[0][0]},${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(i - 1, 0)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(i + 2, points.length - 1)];

    const cp1x = p1[0] + (p2[0] - p0[0]) / (6 * tension);
    const cp1y = p1[1] + (p2[1] - p0[1]) / (6 * tension);
    const cp2x = p2[0] - (p3[0] - p1[0]) / (6 * tension);
    const cp2y = p2[1] - (p3[1] - p1[1]) / (6 * tension);

    d += ` C${cp1x},${cp1y} ${cp2x},${cp2y} ${p2[0]},${p2[1]}`;
  }
  return d;
}

const JOURNEY_ZOOMS: Record<string, { coordinates: [number, number]; zoom: number }> = {
  // Offset to the east so the Northeast is positioned on the left, not under the panel
  thunder: { coordinates: [-66, 41], zoom: 2.2 },
  // Fits Los Angeles (-118) and Nashville (-86)
  guerin: { coordinates: [-96, 35], zoom: 1.4 },
  // Full view
  solo: { coordinates: PROJECTION_CONFIG.center, zoom: 1 },
};

export default function HejiraMap() {
  const [journeysActive, setJourneysActive] = useState(false);
  const [hoveredSong, setHoveredSong] = useState<string | null>(null);
  const [selectedJourney, setSelectedJourney] = useState<JourneySlug | null>(null);
  const [position, setPosition] = useState({ coordinates: PROJECTION_CONFIG.center, zoom: 1 });

  const handleToggle = useCallback(() => {
    setJourneysActive((prev) => {
      if (prev) {
        setSelectedJourney(null);
        setPosition({ coordinates: PROJECTION_CONFIG.center, zoom: 1 });
      }
      return !prev;
    });
  }, []);

  const handleSelectJourney = useCallback((slug: JourneySlug | null) => {
    setSelectedJourney(slug);
    if (slug && JOURNEY_ZOOMS[slug]) {
      setPosition(JOURNEY_ZOOMS[slug]);
    } else {
      setPosition({ coordinates: PROJECTION_CONFIG.center, zoom: 1 });
    }
  }, []);

  const handleMoveEnd = useCallback((pos: { coordinates: [number, number]; zoom: number }) => {
    setPosition(pos);
  }, []);

  const projection = useMemo(() => {
    return geoAlbers()
      .center(PROJECTION_CONFIG.center)
      .rotate(PROJECTION_CONFIG.rotate as [number, number, number])
      .parallels(PROJECTION_CONFIG.parallels)
      .scale(PROJECTION_CONFIG.scale)
      .translate([MAP_WIDTH / 2, MAP_HEIGHT / 2]);
  }, []);

  const routePaths = useMemo(() => {
    return ROUTES.map((route) => {
      const projectedPoints: { coords: [number, number]; city: string }[] = [];
      route.waypoints.forEach((wp, i) => {
        const proj = projection(wp);
        if (proj) {
          projectedPoints.push({ coords: proj, city: route.cities[i] || "" });
        }
      });
      const coords = projectedPoints.map((pt) => pt.coords);

      return {
        journey: route.journey,
        d: catmullRomSpline(coords),
        lastPoint: coords.length > 0 ? coords[coords.length - 1] : null,
        waypoints: projectedPoints,
      };
    });
  }, [projection]);

  return (
    <div className="absolute inset-0">
      <ComposableMap
        projection="geoAlbers"
        projectionConfig={{
          rotate: PROJECTION_CONFIG.rotate,
          center: PROJECTION_CONFIG.center,
          parallels: PROJECTION_CONFIG.parallels,
          scale: PROJECTION_CONFIG.scale,
        }}
        width={MAP_WIDTH}
        height={MAP_HEIGHT}
        style={{ width: "100%", height: "100%" }}
      >
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
          <filter id="route-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="marker-halo">
            <stop offset="0%" stopColor="var(--paper)" stopOpacity="0.85" />
            <stop offset="55%" stopColor="var(--paper)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--paper)" stopOpacity="0" />
          </radialGradient>
          {/* Guerin fade gradient — fades out at the end (tour cancelled) */}
          <linearGradient id="guerin-fade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1f3a4a" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#1f3a4a" stopOpacity="0.7" />
            <stop offset="95%" stopColor="#1f3a4a" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#1f3a4a" stopOpacity="0" />
          </linearGradient>
        </defs>

        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
          translateExtent={[[0, 0], [MAP_WIDTH, MAP_HEIGHT]]}
        >
          {/* Layer 0: Canada + Mexico from world atlas */}
        <Geographies geography={WORLD_TOPO_URL}>
          {({ geographies }) =>
            geographies
              .filter((geo) => {
                const id = String(geo.id);
                return id === "124" || id === "484";
              })
              .map((geo) => {
                const id = String(geo.id);
                const isCanada = id === "124";
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isCanada ? "#bfb48c" : "#d4c8a0"}
                    stroke="none"
                    style={{
                      default: { opacity: isCanada ? 0.55 : 0.2, outline: "none" },
                      hover: { opacity: isCanada ? 0.55 : 0.2, outline: "none" },
                      pressed: { opacity: isCanada ? 0.55 : 0.2, outline: "none" },
                    }}
                    filter="url(#watercolor-soft)"
                    tabIndex={-1}
                  />
                );
              })
          }
        </Geographies>

        {/* Canada/Mexico outlines */}
        <Geographies geography={WORLD_TOPO_URL}>
          {({ geographies }) =>
            geographies
              .filter((geo) => {
                const id = String(geo.id);
                return id === "124" || id === "484";
              })
              .map((geo) => (
                <Geography
                  key={`${geo.rsmKey}-outline`}
                  geography={geo}
                  fill="none"
                  stroke="#3d2818"
                  strokeWidth={0.8}
                  filter="url(#pen-rough)"
                  style={{
                    default: { opacity: 0.4, outline: "none" },
                    hover: { opacity: 0.4, outline: "none" },
                    pressed: { opacity: 0.4, outline: "none" },
                  }}
                  tabIndex={-1}
                />
              ))
          }
        </Geographies>

        {/* Layer 1: US states — regional watercolor fill */}
        <Geographies geography={US_TOPO_URL}>
          {({ geographies }) =>
            geographies
              .filter((geo) => {
                const id = String(geo.id);
                return id !== "02" && id !== "15" && id !== "72" && id !== "78";
              })
              .map((geo) => {
                const stateId = geo.id as string;
                const regionColor = STATE_REGION_COLORS[stateId] || "#d9c8a6";
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={regionColor}
                    stroke="none"
                    style={{
                      default: { opacity: 0.5, outline: "none" },
                      hover: { opacity: 0.5, outline: "none" },
                      pressed: { opacity: 0.5, outline: "none" },
                    }}
                    filter="url(#watercolor-soft)"
                  />
                );
              })
          }
        </Geographies>

        {/* Layer 1b: second watercolor pass */}
        <Geographies geography={US_TOPO_URL}>
          {({ geographies }) =>
            geographies
              .filter((geo) => {
                const id = String(geo.id);
                return id !== "02" && id !== "15" && id !== "72" && id !== "78";
              })
              .map((geo) => {
                const stateId = geo.id as string;
                const regionColor = STATE_REGION_COLORS[stateId] || "#d9c8a6";
                return (
                  <Geography
                    key={`${geo.rsmKey}-overlay`}
                    geography={geo}
                    fill={regionColor}
                    stroke="none"
                    style={{
                      default: { opacity: 0.22, outline: "none" },
                      hover: { opacity: 0.22, outline: "none" },
                      pressed: { opacity: 0.22, outline: "none" },
                    }}
                    filter="url(#watercolor-soft)"
                    tabIndex={-1}
                  />
                );
              })
          }
        </Geographies>

        {/* Layer 2: State outlines */}
        <Geographies geography={US_TOPO_URL}>
          {({ geographies }) =>
            geographies
              .filter((geo) => {
                const id = String(geo.id);
                return id !== "02" && id !== "15" && id !== "72" && id !== "78";
              })
              .map((geo) => (
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

        {/* Layer 2b: Country borders — heavier */}
        <Geographies geography={US_TOPO_URL}>
          {({ geographies }) =>
            geographies
              .filter((geo) => {
                const id = String(geo.id);
                return id !== "02" && id !== "15" && id !== "72" && id !== "78";
              })
              .map((geo) => (
                <Geography
                  key={`${geo.rsmKey}-border`}
                  geography={geo}
                  fill="none"
                  stroke="#3d2818"
                  strokeWidth={1.2}
                  filter="url(#pen-rough)"
                  style={{
                    default: { opacity: 0.5, outline: "none" },
                    hover: { opacity: 0.5, outline: "none" },
                    pressed: { opacity: 0.5, outline: "none" },
                  }}
                  tabIndex={-1}
                />
              ))
          }
        </Geographies>

        {/* Layer 3: Map details */}
        <MapDetails />

        {/* Canadian province labels */}
        <g style={{ fontFamily: "var(--font-reenie-beanie), cursive" }} fill="#5a3a20" opacity="0.45">
          <Marker coordinates={[-123.0, 51.5]}>
            <text fontSize="14" textAnchor="middle" transform="rotate(-5)">
              British Columbia
            </text>
          </Marker>
          <Marker coordinates={[-115.0, 52.5]}>
            <text fontSize="13" textAnchor="middle">
              Alberta
            </text>
          </Marker>
          <Marker coordinates={[-106.0, 54.0]}>
            <text fontSize="14" textAnchor="middle" transform="rotate(-2)">
              Saskatchewan
            </text>
          </Marker>
          <Marker coordinates={[-97.0, 53.0]}>
            <text fontSize="13" textAnchor="middle">
              Manitoba
            </text>
          </Marker>
          <Marker coordinates={[-85.0, 51.0]}>
            <text fontSize="14" textAnchor="middle" transform="rotate(-3)">
              Ontario
            </text>
          </Marker>
          <Marker coordinates={[-72.0, 49.5]}>
            <text fontSize="13" textAnchor="middle" transform="rotate(-2)">
              Québec
            </text>
          </Marker>
        </g>

        {/* Layer 4: Journey routes — curved Catmull-Rom splines */}
        {routePaths.map(({ journey, d, waypoints }) => {
          const style = JOURNEY_STYLES[journey] || JOURNEY_STYLES.solo;
          const isActive = journeysActive;
          const isSelected = selectedJourney === journey;
          const isDeselected = selectedJourney !== null && !isSelected;
          const routeOpacity = isDeselected ? 0.08 : isActive ? style.opacity : style.opacity * 0.7;

          return (
            <g key={journey}>
              {/* Route glow shadow */}
              <path
                d={d}
                stroke={style.glow}
                strokeWidth={isSelected ? 10 : isActive ? 8 : 5}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                style={{
                  opacity: isDeselected ? 0.04 : isActive ? 0.6 : 0.3,
                  transition: "opacity 0.4s, stroke-width 0.4s",
                }}
                filter="url(#route-glow)"
              />
              {/* Main route line */}
              <path
                d={d}
                stroke={journey === "guerin" ? "url(#guerin-fade)" : style.color}
                strokeWidth={isSelected ? 4.5 : isActive ? 3.5 : style.width}
                strokeDasharray={style.dasharray}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                style={{
                  opacity: routeOpacity,
                  transition: "opacity 0.4s, stroke-width 0.4s",
                }}
              />
              {/* Waypoint dots — visible when this journey is selected */}
              {isSelected && waypoints.map((wp, i) => (
                <g key={i}>
                  <circle
                    cx={wp.coords[0]}
                    cy={wp.coords[1]}
                    r="5"
                    fill={style.color}
                    stroke="var(--paper)"
                    strokeWidth="1.5"
                    opacity="0.92"
                  />
                  <text
                    x={wp.coords[0]}
                    y={wp.coords[1] - 8}
                    textAnchor="middle"
                    style={{
                      fontFamily: "var(--font-courier-prime), monospace",
                      fontSize: "7.5px",
                      fill: style.color,
                      paintOrder: "stroke",
                      stroke: "var(--paper)",
                      strokeWidth: "2.5px",
                      strokeLinejoin: "round",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {wp.city}
                  </text>
                </g>
              ))}
            </g>
          );
        })}

        {/* Guerin route cancellation mark — X at the end */}
        {routePaths.map(({ journey, lastPoint }) => {
          if (journey !== "guerin" || !lastPoint) return null;
          return (
            <g key="guerin-cancel" opacity={journeysActive ? 0.7 : 0.4} style={{ transition: "opacity 0.4s" }}>
              <line
                x1={lastPoint[0] - 4} y1={lastPoint[1] - 4}
                x2={lastPoint[0] + 4} y2={lastPoint[1] + 4}
                stroke="#1f3a4a" strokeWidth="1.5" strokeLinecap="round"
              />
              <line
                x1={lastPoint[0] + 4} y1={lastPoint[1] - 4}
                x2={lastPoint[0] - 4} y2={lastPoint[1] + 4}
                stroke="#1f3a4a" strokeWidth="1.5" strokeLinecap="round"
              />
            </g>
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
              journeysActive={journeysActive}
            />
          </Marker>
        ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* UI overlays */}
      <JourneyToggle active={journeysActive} onToggle={handleToggle} />
      <MapLegend
        visible={journeysActive}
        selectedJourney={selectedJourney}
        onSelectJourney={handleSelectJourney}
      />
      {journeysActive && selectedJourney && (
        <JourneyDetailPanel
          journey={selectedJourney}
          onClose={() => {
            setSelectedJourney(null);
            setPosition({ coordinates: PROJECTION_CONFIG.center, zoom: 1 });
          }}
        />
      )}

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
