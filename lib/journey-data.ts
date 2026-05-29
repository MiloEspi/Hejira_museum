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
  description: string;
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
    description:
      "Bob Dylan's itinerant carnival of musicians swept through the Northeast in the autumn of 1975. Joni joined the tour through New England — from Montréal to the small towns of Maine — surrounded by poets, painters, and old friends. The nights were electric and chaotic, the days blurred. Sam Shepard was there. So were masks, spontaneity, and the last embers of the sixties.",
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
    description:
      "A tour through the American South with drummer John Guerin — her lover and collaborator — that slowly fell apart. The route wound from Los Angeles through desert cities and into the deep South. By Nashville the tour was cancelled. Joni kept going alone. The songs written on this stretch carry the particular weight of an ending that was also a beginning.",
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
    description:
      "After the Guerin tour unraveled, Joni drove alone from the Maine coast all the way to Los Angeles — the full width of the country. She stopped in Staten Island to buy a mandolin, visited Chögyam Trungpa in Boulder, drove through the Arizona desert seeing vapor trails. The solitude was not emptiness; it was the whole point. Hejira is this road.",
  },
];

export function getJourneyBySlug(slug: JourneySlug): Journey {
  const journey = JOURNEYS.find((j) => j.slug === slug);
  if (!journey) throw new Error(`Unknown journey: ${slug}`);
  return journey;
}
