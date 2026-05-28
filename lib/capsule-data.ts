/**
 * capsule-data.ts — Editorial content for the Black Crow capsule.
 * Contains story text, annotated lyrics, tech cards, thread connections, and gallery data.
 */

export interface LyricLine {
  text: string;
  annotation?: string;
}

export interface LyricSection {
  id: string;
  label?: string;
  lines: LyricLine[];
}

export interface TechCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface ThreadConnection {
  targetSlug: string;
  targetTitle: string;
  bridgeText: string;
  fragmentQuote: string;
  emotionalCore: string;
  color: string;
}

export interface PhotoSlot {
  id: string;
  caption: string;
  rotation: number;
}

/* ═══════════════════════════════════════════════════════════════
   BLACK CROW — CAPSULE DATA
   ═══════════════════════════════════════════════════════════════ */

export const BLACK_CROW_STORY = {
  title: "Black Crow",
  trackInfo: "vii / ix",
  duration: "4:20",
  journey: "cross-country",
  date: "Mar 1976",
  mainMusician: "Jaco Pastorius · fretless bass",

  heroQuote: {
    lines: [
      "In search of love and music",
      "my whole life has been",
      "illumination, corruption",
      "and diving, diving, diving, diving",
    ],
  },

  joniQuote:
    "I was driving back to L.A., and I saw a black crow flying. And I thought: that's me. That's exactly me. Looking for something shiny on the ground, picking it up, flying off again.",

  storyParagraphs: [
    "El único respiro conceptual fuera del espacio contiguo de los Estados Unidos se localiza en la escarpada costa oeste de Canadá. \"Black Crow\" aborda las barreras físicas que imponía la propiedad que Joni mantenía como segundo hogar en la remota Sunshine Coast de la Columbia Británica.",
    "En lugar de ofrecer una imagen idílica del refugio en el bosque, la canción disecciona con hiperrealismo pragmático la pesadilla logística de salir de un entorno tan aislado para reincorporarse a la implacable maquinaria de las giras musicales globales.",
    "La pista detalla una secuencia caótica de múltiples modos de transporte necesarios para escapar: \"Tomé un transbordador a la autopista / Luego conduje hasta un hidroavión / Tomé un avión a un taxi / Y un taxi a un tren.\"",
    "El agotamiento crónico inducido por este movimiento perpetuo y la \"fiebre de viaje\" provoca una profunda desorientación espacial. Mirando por la ventana, con el rostro demacrado por la falta de sueño, Joni se compara con el cuervo negro característico de la región.",
    "Observar cómo el ave carroñera se lanza en picada para recoger objetos brillantes en la costa se convierte en una alegoría cruda de su propia hambre por la fama, las ovaciones, los diamantes y los reconocimientos, admitiendo que es \"una debilidad que puedo comprender.\"",
  ],

  photoshootConnection:
    "Joel Bernstein fotografió a Joni patinando en Lake Mendota, Madison, Wisconsin, con una capa negra que el viento infló como vela. Esto le permitió deslizarse por la superficie congelada de manera espectral, sin fricción, evocando visualmente la figura de un cuervo oscuro en pleno vuelo impulsado por corrientes invisibles. Las imágenes capturaron una figura solitaria en tránsito perpetuo. El director artístico Norman Seeff integró 14 fotografías diferentes del Lago Mendota y de diversas carreteras en un solo negativo compuesto usando una Cámara Lúcida, creando un collage monocromático que simulaba ser una única fotografía surrealista de Joni literalmente poseída por la carretera.",
};

export const BLACK_CROW_LYRICS: LyricSection[] = [
  {
    id: "v1",
    label: "I",
    lines: [
      { text: "There's a crow flying" },
      { text: "Black and ragged" },
      { text: "Tree to tree" },
      {
        text: "He's as black as the highway that's leading me",
        annotation:
          "La carretera como extensión del cuervo — ambos negros, ambos interminables. Joni no viaja por la carretera; la carretera la posee.",
      },
    ],
  },
  {
    id: "v2",
    label: "II",
    lines: [
      { text: "Now he's diving down" },
      {
        text: "To pick up on something shiny",
        annotation:
          "Los objetos brillantes que el cuervo recoge son los equivalentes de la fama: aplausos, premios, diamantes. Una adicción que Joni reconoce compartir con el ave carroñera.",
      },
      { text: "I feel like that black crow" },
      { text: "In a blue sky" },
    ],
  },
  {
    id: "v3",
    label: "III",
    lines: [
      {
        text: "I took a ferry to the highway",
        annotation:
          "La secuencia caótica de transportes para salir de la Sunshine Coast: ferry → autopista → hidroavión → avión → taxi → tren. Cada modo de transporte es un eslabón de una cadena de escape.",
      },
      { text: "Then I drove to a seaside bar" },
      { text: "I took a plane to a taxi" },
      { text: "And a taxi to a train" },
    ],
  },
  {
    id: "v4",
    label: "IV",
    lines: [
      {
        text: "I've been travelling so long",
        annotation:
          "La 'fiebre de viaje' — travel fever — no es solo fatiga física sino una condición existencial. El movimiento perpetuo se convierte en identidad.",
      },
      { text: "How'm I ever going to know my home" },
      { text: "When I see it again" },
      { text: "I'm like a black crow flying" },
    ],
  },
  {
    id: "chorus",
    label: "V",
    lines: [
      {
        text: "In search of love and music",
        annotation:
          "El verso central del álbum entero. Amor y música como los dos polos magnéticos que mantienen a Joni en movimiento perpetuo. No busca uno o el otro — busca ambos simultáneamente, y esa búsqueda dual es lo que hace imposible aterrizar.",
      },
      { text: "My whole life has been" },
      { text: "Illumination, corruption" },
      {
        text: "And diving, diving, diving, diving",
        annotation:
          "La repetición de 'diving' cuatro veces — como las cuatro estaciones, como los cuatro modos de transporte, como el cuervo que no puede dejar de lanzarse. El movimiento es compulsión, no elección.",
      },
    ],
  },
];

export const BLACK_CROW_TECH_CARDS: TechCard[] = [
  {
    id: "jaco",
    title: "Jaco Pastorius",
    subtitle: "fretless bass",
    description:
      "Su bajo fretless — al que le sacó los trastes con un cuchillo de manteca — no marca el tiempo: nada debajo de la canción. Le da al cuervo un cielo líquido sobre el que volar. Sus líneas sinuosas, expansivas e impredecibles deambulaban por el registro sonoro como corrientes de agua en la Bahía de Fundy.",
    icon: "bass",
  },
  {
    id: "carlton",
    title: "Larry Carlton",
    subtitle: "lead guitar",
    description:
      "Entra con su lead guitar y traza líneas curvas que se parecen a un pájaro. No solea sobre la canción: la dibuja. Sus frases son arcos migratorios, no solos — cada nota es una corriente ascendente que el cuervo cabalga.",
    icon: "guitar",
  },
  {
    id: "tunings",
    title: "Afinaciones Abiertas",
    subtitle: "open tunings",
    description:
      "Joni usaba afinaciones inventadas por ella misma — cientos a lo largo de su carrera. Los acordes flotan sin gravedad armónica clásica — por eso la canción parece que vuela: no aterriza en una tónica obvia. Sin batería: la ausencia permite que la pista simule la energía cinética ininterrumpida del movimiento.",
    icon: "tuning",
  },
];

export const BLACK_CROW_THREADS: ThreadConnection[] = [
  {
    targetSlug: "amelia",
    targetTitle: "Amelia",
    bridgeText:
      "Las dos canciones son sobre mujeres que vuelan solas. Amelia Earhart desapareció en el cielo; el cuervo es Joni eligiendo no aterrizar. El álbum hace eco entre la aviadora perdida y la mujer-pájaro que se acepta.",
    fragmentQuote: "A ghost of aviation / she was swallowed by the sky",
    emotionalCore: "mujeres que vuelan solas",
    color: "#c89554",
  },
  {
    targetSlug: "hejira",
    targetTitle: "Hejira",
    bridgeText:
      "Black Crow es Hejira destilado en cuatro minutos. La canción título despliega la filosofía del álbum; Black Crow la encarna en una sola imagen. Si tuvieras que explicar el disco con una sola canción, sería esta.",
    fragmentQuote:
      "I'm porous with travel fever / but you know I'm so glad to be on my own",
    emotionalCore: "la fuga destilada",
    color: "#8aa4b8",
  },
  {
    targetSlug: "coyote",
    targetTitle: "Coyote",
    bridgeText:
      "Coyote abre el álbum con Joni siendo cazada por un hombre; Black Crow lo cierra con Joni siendo el animal. La transformación es la travesía. De presa a ave de presa, en nueve canciones.",
    fragmentQuote:
      "No regrets, Coyote / we just come from such different sets of circumstance",
    emotionalCore: "de presa a depredadora",
    color: "#8a6a3a",
  },
];

export const BLACK_CROW_PHOTOS: PhotoSlot[] = [
  { id: "mendota-1", caption: "Lake Mendota, skating — Joel Bernstein, 1976", rotation: -3 },
  { id: "mendota-2", caption: "The black cape, inflated like a sail", rotation: 2 },
  { id: "mendota-3", caption: "Norman Seeff composite — 14 negatives", rotation: -1 },
  { id: "highway-1", caption: "On the road between cities", rotation: 4 },
];
