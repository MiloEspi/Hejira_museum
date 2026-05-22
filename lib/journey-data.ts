import type { JourneySlug } from "./songs-data";

export interface Journey {
  slug: JourneySlug;
  name: string;
  dateRange: string;
  colorToken: string;
  glowToken: string;
  strokeDasharray: string;
  fontFamily: string;
  vibe: string;
}

export const JOURNEYS: Journey[] = [
  {
    slug: "thunder",
    name: "Rolling Thunder Revue",
    dateRange: "Oct–Dec 1975",
    colorToken: "var(--thunder)",
    glowToken: "var(--thunder-glow)",
    strokeDasharray: "2,3",
    fontFamily: "var(--font-italiana), serif",
    vibe: "Bohemian, electric, nocturnal",
  },
  {
    slug: "guerin",
    name: "Tour with Guerin",
    dateRange: "Feb 1976",
    colorToken: "var(--guerin)",
    glowToken: "var(--guerin-glow)",
    strokeDasharray: "6,5",
    fontFamily: "var(--font-cormorant-garamond), serif",
    vibe: "Breakup, grey cities, farewell",
  },
  {
    slug: "solo",
    name: "Cross-country solo",
    dateRange: "Mar 1976",
    colorToken: "var(--solo)",
    glowToken: "var(--solo-glow)",
    strokeDasharray: "none",
    fontFamily: "var(--font-courier-prime), monospace",
    vibe: "Luminous solitude, contemplation",
  },
];

export function getJourneyBySlug(slug: JourneySlug): Journey {
  const journey = JOURNEYS.find((j) => j.slug === slug);
  if (!journey) throw new Error(`Unknown journey: ${slug}`);
  return journey;
}
