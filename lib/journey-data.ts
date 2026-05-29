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
      "El carnaval itinerante de músicos de Bob Dylan recorrió el noreste en el otoño de 1975. Joni se unió a la gira por Nueva Inglaterra —desde Montreal hasta los pequeños pueblos de Maine— rodeada de poetas, pintores y viejos amigos. Las noches eran eléctricas y caóticas, los días borrosos. Sam Shepard estaba allí. También lo estaban las máscaras, la espontaneidad y las últimas brasas de los años sesenta.",
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
      "Una gira por el sur de los Estados Unidos con el baterista John Guerin —su amante y colaborador— que poco a poco se desmoronó. La ruta serpenteaba desde Los Ángeles a través de ciudades desérticas hasta el sur profundo. Para cuando llegaron a Nashville, la gira fue cancelada. Joni siguió adelante sola. Las canciones escritas en este tramo cargan el peso particular de un final que también era un comienzo.",
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
      "Después de que la gira con Guerin se deshiciera, Joni condujo sola desde la costa de Maine hasta Los Ángeles, cruzando el ancho entero del país. Se detuvo en Staten Island para comprar una mandolina, visitó a Chögyam Trungpa en Boulder, condujo por el desierto de Arizona viendo las estelas de vapor de los aviones. La soledad no era vacío; era el punto de todo. Hejira es esta carretera.",
  },
];

export function getJourneyBySlug(slug: JourneySlug): Journey {
  const journey = JOURNEYS.find((j) => j.slug === slug);
  if (!journey) throw new Error(`Unknown journey: ${slug}`);
  return journey;
}
