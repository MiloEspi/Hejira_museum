"use client";

import { Marker } from "react-simple-maps";

interface CityDot {
  name: string;
  coords: [number, number];
}

const CITIES: CityDot[] = [
  { name: "Memphis", coords: [-90.05, 35.14] },
  { name: "New York", coords: [-74.0, 40.71] },
  { name: "Madison", coords: [-89.4, 43.08] },
  { name: "L.A.", coords: [-118.24, 34.05] },
  { name: "Boston", coords: [-71.06, 42.36] },
  { name: "Boulder", coords: [-105.27, 40.02] },
  { name: "New Orleans", coords: [-90.07, 29.95] },
  { name: "Savannah", coords: [-81.1, 32.08] },
  { name: "Montreal", coords: [-73.57, 45.5] },
  { name: "Nashville", coords: [-86.78, 36.16] },
  { name: "Vancouver", coords: [-123.1, 49.28] },
  { name: "Saskatoon", coords: [-106.67, 52.13] },
];

interface RegionLabel {
  text: string;
  coords: [number, number];
  fontSize?: number;
  rotation?: number;
}

const REGION_LABELS: RegionLabel[] = [
  { text: "pacific NW", coords: [-121.0, 45.5], fontSize: 14, rotation: -3 },
  { text: "the desert southwest", coords: [-112.0, 33.0], fontSize: 15, rotation: -5 },
  { text: "the rockies", coords: [-109.0, 43.0], fontSize: 13, rotation: -75 },
  { text: "the plains", coords: [-100.0, 40.0], fontSize: 16 },
  { text: "great lakes · winter", coords: [-86.0, 44.5], fontSize: 14 },
  { text: "the deep south", coords: [-88.0, 33.0], fontSize: 14, rotation: 2 },
  { text: "new england", coords: [-71.5, 43.5], fontSize: 13, rotation: -4 },
  { text: "texas", coords: [-99.0, 32.0], fontSize: 15, rotation: -2 },
  { text: "florida", coords: [-82.0, 28.5], fontSize: 13 },
];

export default function MapDetails() {
  return (
    <g>
      {/* Regional labels — handwritten */}
      <g style={{ fontFamily: "var(--font-reenie-beanie), cursive" }} fill="#5a3a20" opacity="0.5">
        {REGION_LABELS.map((label) => (
          <Marker key={label.text} coordinates={label.coords}>
            <text
              fontSize={label.fontSize || 14}
              textAnchor="middle"
              transform={label.rotation ? `rotate(${label.rotation})` : undefined}
            >
              {label.text}
            </text>
          </Marker>
        ))}
      </g>

      {/* City dots */}
      <g fill="#3d2818" opacity="0.55">
        {CITIES.map((city) => (
          <Marker key={city.name} coordinates={city.coords}>
            <circle cx="0" cy="0" r="1.8" />
            <text
              x="6"
              y="-3"
              fontFamily="var(--font-courier-prime), monospace"
              fontSize="7"
              fill="#3d2818"
            >
              {city.name}
            </text>
          </Marker>
        ))}
      </g>

      {/* ─── TOPOGRAPHY ─── */}

      {/* Rockies — illustrated triangular peaks with snow */}
      <Marker coordinates={[-108.5, 44.0]}>
        <g stroke="#3d2818" strokeWidth="0.7" fill="none" opacity="0.35">
          <path d="M -5 6 L 0 -4 L 5 6" />
          <path d="M 0 -4 L 1 -1 L -1 -1 Z" fill="#d8d0c0" stroke="none" />
          <path d="M 8 6 L 14 -5 L 20 6" />
          <path d="M 14 -5 L 15 -2 L 13 -2 Z" fill="#d8d0c0" stroke="none" />
          <path d="M 0 16 L 7 6 L 14 16" />
          <path d="M 7 6 L 8 9 L 6 9 Z" fill="#d8d0c0" stroke="none" />
          <path d="M 18 16 L 26 5 L 34 16" />
          <path d="M 26 5 L 27 8 L 25 8 Z" fill="#d8d0c0" stroke="none" />
          <path d="M 5 26 L 13 16 L 21 26" />
        </g>
      </Marker>

      {/* Appalachians */}
      <Marker coordinates={[-80.0, 37.5]}>
        <g stroke="#3d2818" strokeWidth="0.7" fill="none" opacity="0.25">
          <path d="M 0 0 L 6 -8 L 12 0 M 5 10 L 12 2 L 19 10" />
          <path d="M 3 20 L 10 12 L 17 20" />
        </g>
      </Marker>

      {/* ─── FLORA — Regional vegetation ─── */}

      {/* Southwest — Cactus & desert wildflowers */}
      <Marker coordinates={[-113.0, 34.5]}>
        <g opacity="0.3">
          {/* Saguaro */}
          <rect x="-1" y="-8" width="2" height="10" fill="#4a6a3a" rx="1" />
          <path d="M 1 -4 Q 4 -4 4 -7" stroke="#4a6a3a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M -1 -2 Q -3 -2 -3 -5" stroke="#4a6a3a" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          {/* Wildflowers */}
          <circle cx="8" cy="0" r="1" fill="#c86040" opacity="0.6" />
          <circle cx="12" cy="-2" r="0.8" fill="#d4a040" opacity="0.5" />
        </g>
      </Marker>

      {/* More cactus in AZ */}
      <Marker coordinates={[-109.5, 32.0]}>
        <g opacity="0.2">
          <rect x="-0.8" y="-6" width="1.6" height="8" fill="#4a6a3a" rx="0.8" />
          <path d="M 0.8 -3 Q 3 -3 3 -5" stroke="#4a6a3a" strokeWidth="1" fill="none" strokeLinecap="round" />
        </g>
      </Marker>

      {/* Pacific NW / Rockies — Conifers */}
      <Marker coordinates={[-120.0, 47.0]}>
        <g opacity="0.25">
          <path d="M 0 0 L 3 -8 L 6 0 Z" fill="#3a5a3a" />
          <path d="M 10 2 L 12 -4 L 14 2 Z" fill="#3a5a3a" />
          <rect x="2" y="0" width="2" height="3" fill="#4a3520" />
          <rect x="11" y="2" width="1.5" height="2" fill="#4a3520" />
        </g>
      </Marker>

      <Marker coordinates={[-116.0, 48.5]}>
        <g opacity="0.2">
          <path d="M 0 0 L 2 -6 L 4 0 Z" fill="#3a5a3a" />
          <path d="M 6 1 L 8 -3 L 10 1 Z" fill="#3a5a3a" />
        </g>
      </Marker>

      {/* Gulf Coast — Palm trees */}
      <Marker coordinates={[-87.0, 30.5]}>
        <g opacity="0.2">
          <path d="M 0 6 Q 0.5 0 0 -4" stroke="#5a4020" strokeWidth="1.5" fill="none" />
          <path d="M 0 -4 Q -5 -6 -6 -3" stroke="#3a5a2a" strokeWidth="0.8" fill="none" />
          <path d="M 0 -4 Q 5 -6 6 -3" stroke="#3a5a2a" strokeWidth="0.8" fill="none" />
          <path d="M 0 -4 Q 0 -9 2 -6" stroke="#3a5a2a" strokeWidth="0.8" fill="none" />
        </g>
      </Marker>

      {/* Florida — Palm */}
      <Marker coordinates={[-82.5, 27.0]}>
        <g opacity="0.2">
          <path d="M 0 4 Q 0.5 0 0 -3" stroke="#5a4020" strokeWidth="1" fill="none" />
          <path d="M 0 -3 Q -4 -5 -5 -2" stroke="#3a5a2a" strokeWidth="0.7" fill="none" />
          <path d="M 0 -3 Q 4 -5 5 -2" stroke="#3a5a2a" strokeWidth="0.7" fill="none" />
        </g>
      </Marker>

      {/* New England — Deciduous trees */}
      <Marker coordinates={[-72.0, 42.5]}>
        <g opacity="0.2">
          <circle cx="0" cy="-4" r="3" fill="#7a8a4a" />
          <rect x="-0.5" y="-1" width="1" height="4" fill="#4a3520" />
          <circle cx="8" cy="-3" r="2.5" fill="#8a7a3a" />
          <rect x="7.5" y="-0.5" width="1" height="3" fill="#4a3520" />
        </g>
      </Marker>

      {/* ─── ROAD SIGNS ─── */}

      {/* Speed limit sign — Plains */}
      <Marker coordinates={[-100.0, 36.0]}>
        <g opacity="0.2">
          <rect x="-3" y="-5" width="6" height="8" fill="#ede1c8" stroke="#1a1208" strokeWidth="0.3" rx="0.3" />
          <text x="0" y="-2" textAnchor="middle" fontSize="2" fill="#1a1208" fontFamily="monospace">SPEED</text>
          <text x="0" y="0" textAnchor="middle" fontSize="2" fill="#1a1208" fontFamily="monospace">LIMIT</text>
          <text x="0" y="2.5" textAnchor="middle" fontSize="3" fill="#1a1208" fontFamily="monospace" fontWeight="bold">55</text>
          <line x1="0" y1="3" x2="0" y2="8" stroke="#4a4a4a" strokeWidth="0.5" />
        </g>
      </Marker>

      {/* Next Exit sign — near highway */}
      <Marker coordinates={[-95.0, 33.0]}>
        <g opacity="0.18">
          <rect x="-5" y="-3" width="10" height="5" fill="#2a5a2a" rx="0.3" />
          <text x="0" y="0" textAnchor="middle" fontSize="2.2" fill="#ede1c8" fontFamily="monospace">NEXT EXIT</text>
          <text x="0" y="2" textAnchor="middle" fontSize="1.5" fill="#ede1c8" fontFamily="monospace">½ MILE</text>
          <line x1="0" y1="2" x2="0" y2="7" stroke="#4a4a4a" strokeWidth="0.5" />
        </g>
      </Marker>

      {/* ─── RIVERS ─── */}

      {/* Mississippi */}
      <g stroke="#5a7a90" strokeWidth="0.8" fill="none" opacity="0.3">
        <Marker coordinates={[-91.0, 44.0]}>
          <path d="M 0 0 Q 3 30 -2 60 Q -4 90 2 120 Q 5 150 0 180" />
        </Marker>
      </g>

      {/* Missouri River hint */}
      <g stroke="#5a7a90" strokeWidth="0.5" fill="none" opacity="0.2">
        <Marker coordinates={[-104.0, 48.0]}>
          <path d="M 0 0 Q 10 20 30 40 Q 50 55 70 60" />
        </Marker>
      </g>

      {/* ─── CROW FEATHER — decorative corner element ─── */}
      <Marker coordinates={[-68.0, 30.0]}>
        <g opacity="0.25" transform="rotate(25)">
          {/* Feather shaft */}
          <path d="M 0 -20 Q 1 0 0 20" stroke="#0a0a0a" strokeWidth="0.8" fill="none" />
          {/* Barbs */}
          <path d="M 0 -16 Q -6 -14 -8 -10" stroke="#0a0a0a" strokeWidth="0.3" fill="none" />
          <path d="M 0 -12 Q -5 -10 -7 -6" stroke="#0a0a0a" strokeWidth="0.3" fill="none" />
          <path d="M 0 -8 Q -4 -6 -6 -2" stroke="#0a0a0a" strokeWidth="0.3" fill="none" />
          <path d="M 0 -4 Q -3 -2 -5 2" stroke="#0a0a0a" strokeWidth="0.3" fill="none" />
          <path d="M 0 -16 Q 5 -14 7 -10" stroke="#0a0a0a" strokeWidth="0.3" fill="none" />
          <path d="M 0 -12 Q 4 -10 6 -6" stroke="#0a0a0a" strokeWidth="0.3" fill="none" />
          <path d="M 0 -8 Q 3 -6 5 -2" stroke="#0a0a0a" strokeWidth="0.3" fill="none" />
          <path d="M 0 -4 Q 2 -2 4 2" stroke="#0a0a0a" strokeWidth="0.3" fill="none" />
          {/* Feather shape fill */}
          <path d="M 0 -18 Q -6 -8 -4 4 Q 0 8 0 12 Q 0 8 4 4 Q 6 -8 0 -18 Z" fill="#0a0a0a" opacity="0.15" />
        </g>
      </Marker>
    </g>
  );
}
