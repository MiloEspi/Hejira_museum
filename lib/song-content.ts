import { lyrics } from "./lyrics";

export interface LyricLine {
  text: string;
  annotation?: string;
  annotationSpan?: number;
}

export interface LyricSection {
  id: string;
  label: string;
  lines: LyricLine[];
}

export interface Reference {
  id: string;
  term: string;
  category: "person" | "place" | "object" | "event" | "concept";
  summary: string;
  details: string;
  date?: string;
  location?: string;
}

export interface SongContent {
  slug: string;
  heroGradient: [string, string, string];
  storyParagraphs: string[];
  joniQuote?: string;
  lyrics: LyricSection[];
  references: Reference[];
  photoshootNote?: string;
}

type AnnotationMap = Record<string, string | { text: string, span: number }>; // "stanza-line" -> annotation

function buildLyrics(slug: string, annotations: AnnotationMap = {}): LyricSection[] {
  const stanzas = lyrics[slug];
  if (!stanzas) return [];
  const ROMAN = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI"];
  return stanzas.map((lines, si) => ({
    id: `v${si + 1}`,
    label: ROMAN[si] || `${si + 1}`,
    lines: lines.map((text, li) => {
      const key = `${si}-${li}`;
      const val = annotations[key];
      if (val) {
        return typeof val === "string" 
          ? { text, annotation: val } 
          : { text, annotation: val.text, annotationSpan: val.span };
      }
      return { text };
    }),
  }));
}

export const ALL_SONG_CONTENT: Record<string, SongContent> = {
  coyote: {
    slug: "coyote",
    heroGradient: ["#8B7355", "#C4A265", "#F5F0E8"],
    storyParagraphs: [
      "\"Coyote\" se erige como un retrato cinético y de fuego rápido de un enredo romántico breve pero intenso con el aclamado dramaturgo y actor Sam Shepard. Este encuentro se produjo durante la caravana caótica y alimentada por narcóticos de la Rolling Thunder Revue de Bob Dylan a finales de 1975, donde Shepard había sido comisionado para escribir un guion y llevar un diario de la gira.",
      "La arquitectura lírica utiliza la figura del coyote como un símbolo multifacético para Shepard: una fuerza de la naturaleza esquiva, nómada, tramposa y depredadora. La canción enmarca la incompatibilidad final de los amantes contrastando sus anclajes geográficos y psicológicos: el aislamiento rural y agrario de la crianza canadiense de Mitchell choca violentamente con el nomadismo intelectual y los retiros marítimos de Shepard en la costa este.",
      "Musicológicamente, la pista es impulsada por una afinación de guitarra abierta altamente idiosincrásica (CGDFCE), que facilita un patrón rítmico percusivo, operando en un diálogo asombroso con las líneas de bajo sin trastes voladoras y armónicamente ricas de Jaco Pastorius. Las letras subvierten magistralmente las expectativas del oyente, pivotando rápidamente entre intimidad física y alienación emocional."
    ],
    joniQuote: "He's a coyote. He picks up the scent of something and he follows it. That's what attracted me — that animal quality. But you can't domesticate a coyote.",
    lyrics: buildLyrics("coyote", {
      "0-0": "El apodo de Sam Shepard. Joni lo compara con un coyote: astuto, esquivo, imposible de domesticar. 'Sin arrepentimientos' establece el tono del álbum entero.",
      "2-3": "Las líneas blancas de la autopista como prisión — la carretera que libera también atrapa, una metáfora constante.",
      "5-1": "Baljennie, Saskatchewan: una aldea agrícola cerca de Maidstone, representando las raíces agrarias de la narradora frente al mundo de Shepard.",
      "7-0": { text: "Joni observa al Coyote observar a otra mujer. La escena del diner es cinematográfica...", span: 4 },
      "7-4": "El Coyote está demasiado lejos de la Bahía de Fundy en Nueva Escocia (donde Shepard pasaba sus veranos), lo que subraya la incompatibilidad geográfica de ambos."
    }),
    references: [
      {
        id: "sam-shepard",
        term: "Sam Shepard",
        category: "person",
        summary: "Dramaturgo y actor, musa principal de la pista.",
        details: "Samuel Shepard Rogers III (1943-2017) pasó los veranos de 1972-1973 retirándose a una cabaña remota en West Advocate, Nueva Escocia, situada sobre la Bahía de Fundy.",
        date: "1975",
      },
      {
        id: "rolling-thunder",
        term: "Rolling Thunder Revue",
        category: "event",
        summary: "Gira caótica liderada por Bob Dylan (1975).",
        details: "El circo itinerante de Dylan caracterizado por su ambiente bohemio, un elenco rotativo de luminarias, y un consumo rampante de cocaína que definiría el ritmo maníaco de la canción.",
        date: "Fines de 1975",
      },
      {
        id: "baljennie",
        term: "Baljennie",
        category: "place",
        summary: "Aldea agrícola en Saskatchewan, Canadá.",
        details: "Representa las raíces agrarias de la narradora, una aldea escasamente poblada que choca culturalmente con la intelectualidad de la costa este de Shepard.",
      },
      {
        id: "bay-of-fundy",
        term: "Bahía de Fundy",
        category: "place",
        summary: "Bahía en Nueva Escocia con las mareas más extremas.",
        details: "Conocida por las mareas más extremas del planeta, referenciada explícitamente para posicionar a Shepard geográfica y psicológicamente 'demasiado lejos' de su entorno natural estabilizador.",
      }
    ],
  },

  amelia: {
    slug: "amelia",
    heroGradient: ["#C4A265", "#D4915A", "#F5F0E8"],
    storyParagraphs: [
      "Concebida durante un viaje solitario y agotador a través de las extensiones quemadas por el sol del suroeste de Estados Unidos, \"Amelia\" es un soliloquio magistral y melancólico dirigido hacia la pionera de la aviación perdida, Amelia Earhart. La génesis visual de la pista se produjo cuando la narradora, conduciendo sola, observó seis estelas de vapor de jets surcando el sombrío cielo del desierto, asociándolas con las seis cuerdas de su guitarra.",
      "Este estímulo desencadena un diálogo interior profundo, elevando a la aviadora al estatus de santa patrona de los viajeros solitarios. La canción opera como una meditación sobre el costo de la ambición incesante y el miedo al compromiso interpersonal. El vuelo en \"altitudes heladas\" funciona como una metáfora vital del aislamiento emocional necesario para preservar la libertad artística.",
      "Musicalmente, \"Amelia\" está caracterizada por una estructura armónica desamarrada; se construye alrededor de un bucle de 23 compases que fluctúa constantemente entre Fa mayor y Sol mayor sin alcanzar nunca una resolución genuina o catártica. Esta ambigüedad armónica refleja perfectamente la temática de un viaje continuo sin llegada definitiva."
    ],
    joniQuote: "I was driving through the desert and I saw six jet planes leaving six long white vapor trails across the sky. And I thought of the six strings of my guitar. And I thought of Amelia Earhart.",
    lyrics: buildLyrics("amelia", {
      "0-0": { text: "El desierto de Mojave o Arizona, donde la escala abrumadora y la monotonía sirven de espejo del agotamiento emocional. Las seis estelas equivalentes a seis cuerdas; interconexión entre la maquinaria del vuelo y la creación musical.", span: 3 },
      "4-1": "Amelia desapareció sobre el Océano Pacífico en 1937, 'tragada por el cielo'. Un espejo mitológico de las compulsiones nómadas.",
      "5-2": "El vuelo en altitudes heladas es la metáfora central del aislamiento emocional y el miedo al compromiso.",
      "6-0": "Cactus Tree Motel, un modesto establecimiento de carretera, respiro temporal a su sed de vagabundeo."
    }),
    references: [
      {
        id: "earhart",
        term: "Amelia Earhart",
        category: "person",
        summary: "Aviadora pionera desaparecida en 1937.",
        details: "Funciona como un espejo mitológico para las propias compulsiones nómadas de la narradora. Desapareció en un vuelo sobre el Pacífico en 1937.",
        date: "1897-1937",
      },
      {
        id: "mojave",
        term: "Desierto de Mojave / Arizona",
        category: "place",
        summary: "Topografía árida del suroeste de EE.UU.",
        details: "El lienzo de fondo para esta revelación. Su escala abrumadora y su monotonía implacable sirven como espejo del agotamiento emocional.",
      },
      {
        id: "vapor-trails",
        term: "Las 6 estelas de jets",
        category: "concept",
        summary: "Imagen visual de aviones cruzando el cielo desértico.",
        details: "Las estelas de vapor equivalen a las seis cuerdas de una guitarra, representando la interconexión entre la maquinaria del vuelo y la maquinaria musical.",
      },
      {
        id: "cactus-tree",
        term: "Cactus Tree Motel",
        category: "place",
        summary: "Motel de carretera mencionado en la letra.",
        details: "Modesto establecimiento a la orilla de la carretera donde intenta lavar el polvo del camino y encontrar respiro temporal.",
      }
    ],
  },

  furry: {
    slug: "furry-sings-the-blues",
    heroGradient: ["#6B8FA3", "#8B7355", "#F5F0E8"],
    storyParagraphs: [
      "Funcionando como una pieza de periodismo documental sonoro crudo, \"Furry Sings the Blues\" registra la decadencia física y cultural de Beale Street en Memphis. El 5 de febrero de 1976, aprovechando un hueco en la gira de The Hissing of Summer Lawns, Mitchell se desvió para visitar a la luminaria del blues, Walter E. 'Furry' Lewis.",
      "La canción resultante es implacable en su detalle urbano, capturando un vecindario que se enfrenta a la demolición inminente, custodiado únicamente por la estatua de bronce inerte de W.C. Handy. La narrativa se centra en Furry, representado como una reliquia orgullosa pero postrada en la pobreza, reducido a tocar por whisky y cigarrillos.",
      "Históricamente, Lewis le expresó abiertamente que ella no le agradaba, y tras el lanzamiento, reclamó regalías—una coda amarga que prueba la realidad de la viñeta. La pesadez atmosférica está anclada por la rara colaboración de Neil Young en la armónica."
    ],
    joniQuote: "I went to see old Furry in his room. He was propped up in his bed, his teeth and his leg removed. And he played and he sang, and it was authentic — but it was also heartbreaking to see what had become of the source.",
    lyrics: buildLyrics("furry-sings-the-blues", {
      "0-0": "Beale Street en Memphis, la cuna histórica del blues, enfrentándose a demoliciones y decadencia total en 1976.",
      "0-4": "La estatua de W.C. Handy, el 'Padre del Blues', testigo inerte de cómo la historia cede paso a centros comerciales.",
      "1-0": "Walter 'Furry' Lewis, nacido hacia 1893, un maestro del estilo slide viviendo en pobreza extrema.",
      "4-0": "El New Daisy Theatre, reflejo de la demolición urbana y la gentrificación inminente.",
      "5-1": "La tensión cruda del encuentro. Furry le expresó abiertamente que ella no le agradaba; la canción no romantiza esto.",
      "7-4": "El contraste económico y la ironía de la observación documental."
    }),
    references: [
      {
        id: "furry-lewis",
        term: "Furry Lewis",
        category: "person",
        summary: "Músico de blues de Memphis (c. 1893–1981).",
        details: "Maestro del estilo slide y fingerpicking. Vivía en pobreza absoluta al momento de la visita y luego reclamaría regalías, confirmando la cruda fricción del encuentro.",
        date: "c. 1893–1981",
      },
      {
        id: "beale-street",
        term: "Beale Street",
        category: "place",
        summary: "Histórica calle cuna del blues, Memphis.",
        details: "En 1976 se encontraba en plena decadencia y demolición, aunque más tarde en la década de 1980 sería revitalizada como un Distrito Histórico Nacional.",
      },
      {
        id: "wc-handy",
        term: "W.C. Handy",
        category: "person",
        summary: "Conocido como el 'Padre del Blues'.",
        details: "Su estatua de bronce es el vigilante inerte del deterioro general, presenciando cómo la historia es reemplazada por estacionamientos.",
      },
      {
        id: "neil-young",
        term: "Neil Young (armónica)",
        category: "person",
        summary: "Colaborador clave en esta pista.",
        details: "Aportó la armónica, infundiendo a la pista una resonancia fantasmal y polvorienta, y sellando una rara colaboración entre ambos íconos canadienses.",
      }
    ],
  },

  "strange-boy": {
    slug: "a-strange-boy",
    heroGradient: ["#6B8FA3", "#8B9A7A", "#F5F0E8"],
    storyParagraphs: [
      "\"A Strange Boy\" relata un enredo romántico pasajero y psicológicamente complejo con un auxiliar de vuelo masculino. Este episodio se desarrolló durante la primera etapa del viaje en solitario hacia la costa este, tras abandonar Los Ángeles. El entorno es un estricto Bed & Breakfast en Maine.",
      "El 'chico extraño' es examinado con una mezcla de afecto maternal y escrutinio clínico. Es descrito como un hombre en sus treintas que aún vive con sus padres, poseedor de una 'sabiduría loca' pero obstaculizado por una negativa adolescente a madurar.",
      "La estructura lírica expone un giro dialéctico brillante: primero se drogan con viajes, luego con alcohol, para concluir que el amor es el veneno y la medicina más fuerte de todos. Esta narrativa cristaliza la tensión de desafiar las reglas rígidas de una posada puritana mientras se entrega a una pasión condenada."
    ],
    lyrics: buildLyrics("a-strange-boy", {
      "0-0": { text: "La musa de la canción, inspirada en un auxiliar de vuelo que viajó con Joni.", span: 2 },
      "1-1": { text: "La inmadurez del chico es un tema central; vive con sus padres y se aferra a la infancia.", span: 3 },
      "3-3": { text: "Intoxicación Dialéctica: la euforia cambia de fuente (viajes → alcohol → amor) en tres líneas consecutivas.", span: 3 },
      "5-10": "El choque entre las 'rígidas reglas de la casa de las mujeres de cabello azul' puritana y la moral libre nómada."
    }),
    references: [
      {
        id: "flight-attendant",
        term: "El Auxiliar de Vuelo",
        category: "person",
        summary: "La inspiración directa detrás de la letra.",
        details: "Un compañero de viaje real de unos treinta años que funcionó como el catalizador de la canción, exhibiendo una madurez atrofiada.",
      },
      {
        id: "maine-bb",
        term: "Bed & Breakfast de Nueva Inglaterra",
        category: "place",
        summary: "Hospedaje de moral estricta en Maine.",
        details: "El escenario de confinamiento moral, ubicado en la región de Damariscotta. Su barrera puritana choca de frente con los impulsos hedonistas.",
      },
      {
        id: "dialectical",
        term: "Intoxicación Dialéctica",
        category: "concept",
        summary: "Viaje, alcohol y amor entrelazados.",
        details: "La progresión lírica donde la fuente de intoxicación evoluciona de la geografía a las sustancias, y finalmente a la emoción humana, mostrando volatilidad.",
      }
    ],
  },

  hejira: {
    slug: "hejira",
    heroGradient: ["#6B8FA3", "#A0B8C8", "#F5F0E8"],
    storyParagraphs: [
      "La extensa pista que da título al álbum sirve como la tesis filosófica de todo el proyecto: una meditación inquebrantable, lúgubre y profunda sobre el movimiento geográfico, la melancolía y la compulsión humana por huir. El título es una transliteración inusual de la palabra árabe Hijra.",
      "Para Mitchell, el término representaba un concepto profundamente específico: 'escapar con honor', una noción que resonó en ella mientras navegaba por las secuelas de una vida doméstica y relacional fracturada con el baterista John Guerin.",
      "La génesis física de la canción y del álbum visual está íntimamente ligada a un período desolador en Madison, Wisconsin. Tras una severa tormenta de hielo, la artista se aventuró sobre el congelado Lago Mendota, permitiendo que los vientos cortantes la impulsaran sobre el vacío blanco 'con la actitud de un cuervo'."
    ],
    joniQuote: "I found the word 'hejira' in the dictionary. It said: 'running away, with honor.' I thought, that's perfect. That's exactly what I'm doing.",
    lyrics: buildLyrics("hejira", {
      "0-2": "La deserción de las 'pequeñas guerras' domésticas. Elige la carretera como territorio de escape con honor.",
      "3-7": "Entre los fórceps del parto y la lápida de piedra — la inmensidad y superficialidad del arco de la vida humana resumida en una línea.",
      "4-0": { text: "Los marcadores de granito: una meditación sobre la finalidad, la muerte y la permanencia frente a lo efímero de la gira.", span: 2 },
      "4-3": "La admisión franca del propósito último del artista: documentar el sufrimiento para lograr la 'inmortalidad' a través de las obras.",
      "6-2": { text: "Aceptar la necesidad de huir 'hasta que el amor vuelva a succionarme hacia ese camino'.", span: 2 }
    }),
    references: [
      {
        id: "hijrah",
        term: "Hijra / Etimología",
        category: "concept",
        summary: "Origen lingüístico árabe: escape con honor.",
        details: "Designa históricamente el éxodo del profeta Mahoma. Para Mitchell, significaba dejar una situación insostenible sin culpa, 'escapar con honor'.",
      },
      {
        id: "lake-mendota",
        term: "Lago Mendota",
        category: "event",
        summary: "Sesión fotográfica icónica sobre hielo en Wisconsin.",
        details: "En febrero de 1976, Joel Bernstein capturó a Joni patinando en el lago helado. Estas imágenes se fusionaron con retratos de Norman Seeff en el montaje final de la tapa.",
        location: "Madison, Wisconsin",
      },
      {
        id: "abe-most",
        term: "Abe Most (clarinete)",
        category: "person",
        summary: "Sus interjecciones espectrales acompañan el bajo.",
        details: "Aporta interjecciones espectrales y nostálgicas que dialogan con el bajo sin trastes inquieto de Jaco Pastorius, encapsulando el aislamiento gélido.",
      },
      {
        id: "granite-markers",
        term: "Marcadores de Granito",
        category: "concept",
        summary: "Reflexiones líricas sobre lápidas y finalidad.",
        details: "Contrastan la inmovilidad de las lápidas de piedra con el intento humano y artístico de buscar la inmortalidad raspando la superficie de la vida.",
      }
    ],
    photoshootNote: "Joel Bernstein fotografió a Joni patinando en el Lago Mendota, Wisconsin, en 1976. La imagen de portada es un complejo fotomontaje dirigido por Glen Christensen, mezclando retratos de estudio de Norman Seeff con el ambiente helado de Bernstein.",
  },

  sharon: {
    slug: "song-for-sharon",
    heroGradient: ["#8B7355", "#9A7A50", "#F5F0E8"],
    storyParagraphs: [
      "Alcanzando más de ocho minutos de duración sin un estribillo tradicional, \"Song for Sharon\" es una epopeya epistolar; una carta extensa de flujo de conciencia dirigida a Sharon Bell, su íntima amiga de la infancia en la agraria Saskatchewan.",
      "El detonante narrativo que enciende esta reflexión es una excursión a Staten Island para comprar una mandolina en la legendaria tienda Mandolin Brothers. A bordo del ferry de regreso, la espuma blanca de la estela del barco le evoca instantáneamente el encaje de un vestido de novia.",
      "Esta asociación visual dispara una meditación sobre los destinos invertidos de ambas mujeres. De niñas, Sharon soñaba con el estrellato vocal y Joni con la estabilidad doméstica; ahora, sus roles están cruzados. La canción sopesa la ilusión del romance contra la dura realidad de la fama, ensombrecida por el suicidio de una conocida."
    ],
    joniQuote: "I went to Staten Island to buy myself a mandolin. And I saw the long white dress of love on a storefront mannequin. And I thought of Sharon.",
    lyrics: buildLyrics("song-for-sharon", {
      "0-0": "El viaje a Mandolin Brothers (629 Forest Ave) en Staten Island para comprar una mandolina.",
      "0-2": "El vestido de novia en el escaparate que desencadena todo el flujo de conciencia sobre el matrimonio vs. el arte.",
      "1-0": "El Ferry de Staten Island, cuya estela espumosa es comparada metafóricamente con un largo vestido de encaje nupcial.",
      "2-3": "Los Trabajadores Mohawk: indígenas canadienses famosos por construir rascacielos sin vértigo, un símbolo de equilibrio frente a la caída.",
      "13-0": "Wollman Rink en Central Park: la cifra de 29 patinadores como prueba del estado de hiperconciencia neurótica en medio del anonimato."
    }),
    references: [
      {
        id: "sharon-bell",
        term: "Sharon Bell",
        category: "person",
        summary: "Amiga de la infancia de Maidstone, Saskatchewan.",
        details: "Destinataria de la carta musical. Representa la bifurcación del destino femenino: eligió la granja y la familia, mientras Joni eligió la carretera y el estrellato.",
      },
      {
        id: "mandolin-brothers",
        term: "Mandolin Brothers",
        category: "place",
        summary: "Tienda de instrumentos legendaria.",
        details: "Ubicada en Staten Island, el destino literal del viaje que funcionó como punto de partida físico del flujo de conciencia.",
        location: "Staten Island, NY",
      },
      {
        id: "staten-ferry",
        term: "Ferry de Staten Island",
        category: "place",
        summary: "El 'gran barco' cruzando la bahía de NY.",
        details: "Su estela en el agua inspira la metáfora visual del vestido nupcial de encaje.",
      },
      {
        id: "mohawk-workers",
        term: "Trabajadores Mohawk",
        category: "concept",
        summary: "Constructores de acero indígenas.",
        details: "Referenciados por su aparente inmunidad al vértigo trabajando en la altura del 'Manhattan skyline'.",
      }
    ],
  },

  "black-crow": {
    slug: "black-crow",
    heroGradient: ["#2C2416", "#4A3520", "#F5F0E8"],
    storyParagraphs: [
      "\"Black Crow\" es una exploración profundamente ansiosa y cinética de la pesadilla logística que implica salir de un refugio remoto en la Sunshine Coast para volver a la maquinaria corporativa de las giras.",
      "En lugar de pintar su residencia costera como un santuario idílico, la canción enumera implacablemente el caos desorientador de los transbordos múltiples. El 'cuervo negro' funciona como una alegoría dura de la propia narradora: una criatura impulsada por el hambre, obligada a lanzarse en picada tras cualquier 'objeto brillante'.",
      "Esta imagen reconoce una sed inagotable de validación artística y fama, asumiendo que la búsqueda de la iluminación está indisolublemente unida a la corrupción del ego. Sonoramente es la pista más agresiva del disco, carente de batería, impulsada ferozmente por la guitarra rítmica de Joni y el bajo implacable de Jaco Pastorius."
    ],
    joniQuote: "I was driving back to L.A., and I saw a black crow flying. And I thought: that's me. That's exactly me. Looking for something shiny on the ground, picking it up, flying off again.",
    lyrics: buildLyrics("black-crow", {
      "0-4": { text: "El cuervo que se lanza en picada tras objetos brillantes, metáfora cruda de la búsqueda del artista por aplausos y recompensas efímeras.", span: 2 },
      "1-0": { text: "La enumeración implacable y logística del caos y el agotamiento crónico de una vida en movimiento perpetuo lejos de la Sunshine Coast: transbordador a la autopista, avión a taxi y taxi a tren.", span: 4 },
      "2-0": { text: "El núcleo temático del disco: la dualidad entre el deseo de iluminación puramente espiritual y la corrupción egocéntrica que conlleva el negocio musical.", span: 4 }
    }),
    references: [
      {
        id: "sunshine-coast",
        term: "Sunshine Coast, BC",
        category: "place",
        summary: "El refugio remoto en Canadá.",
        details: "Una región boscosa y dependiente de transbordadores que fracasa en proporcionar paz mental sostenida.",
        location: "Columbia Británica, Canadá",
      },
      {
        id: "transport-chain",
        term: "Secuencia de Transportes",
        category: "concept",
        summary: "Ferry → Autopista → Hidroavión → Avión → Taxi → Tren.",
        details: "Una enumeración ansiosa que subraya el caos logístico y la neurosis de salir del 'refugio' para volver a la civilización.",
      },
      {
        id: "crow-metaphor",
        term: "La Metáfora del Cuervo",
        category: "concept",
        summary: "El artista como ave carroñera tras objetos brillantes.",
        details: "Aceptación de que el alma está obligada a lanzarse tras ilusiones corporativas (corrupción) en su búsqueda de arte (iluminación).",
      }
    ],
  },

  "blue-motel": {
    slug: "blue-motel-room",
    heroGradient: ["#6B8FA3", "#7A9A8A", "#F5F0E8"],
    storyParagraphs: [
      "Operando deliberadamente como la gran anomalía estilística del álbum, \"Blue Motel Room\" introduce una estética de jazz-blues polvorienta a un disco lúgubre. Se desarrolla durante una convalecencia en un viejo motel costero en Savannah, Georgia.",
      "El omnipresente azul de la habitación se convierte en una metáfora tangible de la melancolía de la narradora. Sin embargo, respira con un tono pragmático y sarcástico. Dirigiéndose a una pareja intermitente en Los Ángeles (presumiblemente John Guerin), compara sus luchas de poder de pareja con el choque geopolítico de la Guerra Fría.",
      "Musicalmente se destaca por el contrabajo acústico de Chuck Domanico, que reemplaza al fretless de Pastorius, brindando una textura tradicional de club de posguerra que ancla las armonías irónicas de la oferta de tregua."
    ],
    lyrics: buildLyrics("blue-motel-room", {
      "0-0": { text: "El DeSoto Beach Motel en Savannah, Georgia. El color físico de la decoración refuerza la depresión emocional.", span: 2 },
      "1-0": "Savannah, la geografía de cuarentena y limbo durante la gira.",
      "6-0": { text: "Metáfora de la Guerra Fría: comparando el puntaje y los egos de la pareja con la tensión nuclear entre EE.UU. y la URSS.", span: 2 },
      "7-0": { text: "La Oferta de Tregua: un pacto condicionado de dejar el 'refugio de las carreteras' si él abandona las trampas en la ciudad.", span: 4 }
    }),
    references: [
      {
        id: "desoto-motel",
        term: "DeSoto Beach Motel",
        category: "place",
        summary: "Alojamiento costero modesto en Georgia.",
        details: "El lugar de la cuarentena emocional y descanso, cuya estética azul barata mimetiza la fatiga de la viajera.",
        location: "Savannah, Georgia",
      },
      {
        id: "cold-war",
        term: "Metáfora de la Guerra Fría",
        category: "concept",
        summary: "Dinámica relacional equiparada a tensión geopolítica.",
        details: "Ingenioso dispositivo lírico que equipara la política internacional de disuasión con el mantenimiento de puntajes dentro de la relación con John Guerin.",
      },
      {
        id: "chuck-domanico",
        term: "Chuck Domanico",
        category: "person",
        summary: "Contrabajista acústico en la grabación.",
        details: "Proporciona una calidez de madera que contrasta profundamente con la urgencia eléctrica y los bajos sin trastes presentes en el resto de Hejira.",
      }
    ],
  },

  refuge: {
    slug: "refuge-of-the-roads",
    heroGradient: ["#8B7355", "#96785A", "#F5F0E8"],
    storyParagraphs: [
      "Sirviendo como el cierre magistral y filosófico del álbum, \"Refuge of the Roads\" sintetiza los temas de escape, neurosis y vastedad continental. La narrativa está firmemente anclada en un encuentro de tres días con Chögyam Trungpa, un influyente y controversial maestro budista en Boulder, Colorado.",
      "Mitchell lo buscó para curar una adicción a la cocaína de la época del Rolling Thunder Revue. Las letras relatan el choque ideológico: mientras él abogaba por la disolución del ego, Mitchell reconocía que su arte dependía enteramente de diseccionar sus neurosis. Decidió volver a las carreteras.",
      "La canción concluye expandiéndose a una escala cósmica al observar, en los fríos baños de una estación de servicio, la famosa fotografía de la 'Tierra Elevándose'. Esta revelación final empequeñece la angustia personal contra el vacío del universo, ofreciendo la única paz verdadera."
    ],
    joniQuote: "In a highway service station, I saw a photograph of the earth taken coming back from the moon. And I thought: if we could see ourselves from that distance, all our petty wars would end.",
    lyrics: buildLyrics("refuge-of-the-roads", {
      "0-0": { text: "Chögyam Trungpa, maestro budista que bebía, era mujeriego pero poseía una brillante 'cordura' clarificadora.", span: 3 },
      "2-4": { text: "El conflicto Iluminación vs. Neurosis Artística: la artista debe sobreanalizar todo, espantando a los que le rodean.", span: 4 },
      "5-0": "La estación de servicio donde se encuentra el clímax visual de todo el peregrinaje.",
      "5-2": { text: "La fotografía Earthrise del Apolo 8, que aporta la perspectiva cósmica final. La Tierra vista como una bola de boliche jaspeada, reduciendo la importancia de las fronteras y el dolor humano.", span: 4 }
    }),
    references: [
      {
        id: "trungpa",
        term: "Chögyam Trungpa",
        category: "person",
        summary: "Maestro del budismo tibetano en Colorado.",
        details: "Reflejó la complejidad y la neurosis de Mitchell. Lo visitó en un intento por rehabilitarse temporalmente del agotamiento de la gira.",
        location: "Boulder, Colorado",
      },
      {
        id: "earthrise",
        term: "Fotografía 'Earthrise' / Apolo 8",
        category: "object",
        summary: "La Tierra elevándose sobre la Luna (1968).",
        details: "Vista en una estación de servicio, enfatiza la insignificancia de las preocupaciones humanas frente a la escala cósmica y sirve como conclusión espiritual al disco.",
      },
      {
        id: "boulder",
        term: "Boulder, Colorado",
        category: "place",
        summary: "Sede del encuentro budista.",
        details: "Donde la viajera detuvo temporalmente su 'Hejira' para evaluar las raíces de su inquietud y la naturaleza de su inspiración artística.",
      }
    ],
  }
};

export function getSongContent(slug: string): SongContent | undefined {
  return ALL_SONG_CONTENT[slug];
}
