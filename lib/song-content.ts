export interface LyricLine {
  text: string;
  annotation?: string;
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

export const ALL_SONG_CONTENT: Record<string, SongContent> = {
  coyote: {
    slug: "coyote",
    heroGradient: ["#8B7355", "#C4A265", "#F5F0E8"],
    storyParagraphs: [
      "\"Coyote\" abre el álbum con Joni en medio de la Rolling Thunder Revue de Bob Dylan, una caravana itinerante de músicos que recorrió el noreste de Estados Unidos y Canadá entre octubre y diciembre de 1975. En esa gira conoció a Sam Shepard, dramaturgo y actor, con quien tuvo un romance fugaz e intenso.",
      "La canción captura la tensión entre dos personas que se atraen profundamente pero provienen de mundos incompatibles. Shepard era un cowboy intelectual del teatro underground; Joni, una canadiense que había conquistado Laurel Canyon. La atracción era magnética pero los mundos, irreconciliables.",
      "La referencia a Baljennie — un caserío diminuto cerca de Maidstone, Saskatchewan — ancla la canción en la infancia de Joni. Es la primera vez en el álbum que la geografía funciona como máquina del tiempo: el paisaje de las praderas canadienses evoca simultáneamente el presente del romance y la memoria de la niñez.",
      "Musicalmente, es la primera aparición de Jaco Pastorius en un disco de Joni. Su bajo fretless no mantiene el tiempo: nada debajo de la canción como una corriente subterránea, estableciendo el sonido que definirá todo el álbum.",
    ],
    joniQuote: "He's a coyote. He picks up the scent of something and he follows it. That's what attracted me — that animal quality. But you can't domesticate a coyote.",
    lyrics: [
      {
        id: "v1", label: "I",
        lines: [
          { text: "No regrets, Coyote", annotation: "El apodo de Sam Shepard. Joni lo compara con un coyote: astuto, salvaje, imposible de domesticar. 'Sin arrepentimientos' establece el tono del álbum entero — cada encuentro vale por sí mismo." },
          { text: "We just come from such different sets of circumstance" },
          { text: "I'm up all night in the studios" },
          { text: "And you're up early on your ranch" },
        ],
      },
      {
        id: "v2", label: "II",
        lines: [
          { text: "You know it's not easy when you discover that" },
          { text: "He wasn't exactly all that you first thought" },
          { text: "He takes your voice and leaves you humming" },
          { text: "They warned me when I was young" },
        ],
      },
      {
        id: "v3", label: "III",
        lines: [
          { text: "A prisoner of the white lines on the freeway", annotation: "Las líneas blancas de la autopista como prisión — la carretera que libera también atrapa. Esta imagen reaparecerá en todo el álbum." },
          { text: "You went out on the horizon and back" },
          { text: "And you know every road and where it's going to" },
          { text: "And I don't want to live my life with boundaries" },
        ],
      },
      {
        id: "v4", label: "IV",
        lines: [
          { text: "Coyote's in the coffee shop" },
          { text: "He's staring a hole in his scrambled eggs" },
          { text: "He picks up my scent on his fingers" },
          { text: "While he's watching the waitresses' legs", annotation: "Joni observa al Coyote observar a otra mujer. La escena del diner es cinematográfica: huevos revueltos, la mesera, el rastro de intimidad aún en sus dedos. Realismo sin sentimentalismo." },
        ],
      },
      {
        id: "v5", label: "V",
        lines: [
          { text: "I'm on the road to Baljennie", annotation: "Baljennie es un caserío a pocos kilómetros de Maidstone, Saskatchewan, donde Joni creció. La mención convierte un romance presente en un viaje a la infancia." },
          { text: "Near my old home town" },
          { text: "I went to see a friend of mine" },
          { text: "There wasn't much left to talk about" },
        ],
      },
    ],
    references: [
      {
        id: "sam-shepard",
        term: "Sam Shepard",
        category: "person",
        summary: "Dramaturgo, actor y director estadounidense.",
        details: "Samuel Shepard Rogers III (1943-2017) era ya un dramaturgo reconocido cuando se unió a la Rolling Thunder Revue como guionista de la película Renaldo and Clara. Su relación con Joni fue breve pero electrizante. Shepard escribiría después sobre esa gira en su libro Rolling Thunder Logbook.",
        date: "1975",
      },
      {
        id: "rolling-thunder",
        term: "Rolling Thunder Revue",
        category: "event",
        summary: "Gira itinerante organizada por Bob Dylan en 1975-76.",
        details: "La Rolling Thunder Revue fue una gira de conciertos semi-improvisados organizada por Bob Dylan que recorrió el noreste de EE.UU. y Canadá. Participaron Joan Baez, Roger McGuinn, Allen Ginsberg, Mick Ronson y Joni Mitchell, entre otros. Los conciertos eran caóticos, comunales y deliberadamente anti-corporativos.",
        date: "Oct-Dic 1975",
        location: "Noreste de EE.UU. y Canadá",
      },
      {
        id: "baljennie",
        term: "Baljennie",
        category: "place",
        summary: "Caserío en Saskatchewan, cerca del pueblo natal de Joni.",
        details: "Baljennie es un diminuto asentamiento rural en la municipalidad rural de Eldon No. 471, Saskatchewan. Está a pocos kilómetros de Maidstone, donde Roberta Joan Anderson (Joni Mitchell) pasó parte de su infancia antes de mudarse a Saskatoon.",
        location: "Saskatchewan, Canadá",
      },
      {
        id: "bay-of-fundy",
        term: "Bay of Fundy",
        category: "place",
        summary: "Bahía entre Nueva Escocia y Nuevo Brunswick con las mareas más altas del mundo.",
        details: "La Bahía de Fundy, mencionada en la canción, tiene las mareas más extremas del planeta — hasta 16 metros de diferencia entre marea alta y baja. Joni la usa como metáfora de las fuerzas naturales incontrolables, como la atracción entre ella y el Coyote.",
        location: "Nueva Escocia / Nuevo Brunswick, Canadá",
      },
    ],
  },

  amelia: {
    slug: "amelia",
    heroGradient: ["#C4A265", "#D4915A", "#F5F0E8"],
    storyParagraphs: [
      "\"Amelia\" es un soliloquio dirigido a Amelia Earhart mientras Joni conduce sola por el desierto del suroeste. La canción nació de una imagen real: seis estelas de aviones cruzando el cielo del desierto que Joni comparó con las seis cuerdas de una guitarra.",
      "La aviadora desaparecida funciona como espejo: ambas mujeres eligieron la soledad del viaje sobre la seguridad de lo doméstico. Earhart desapareció sobre el Pacífico en 1937; Joni se perdía deliberadamente en las autopistas del desierto americano, buscando una libertad que sabía transitoria.",
      "Musicalmente, es una de las canciones más desnudas del álbum. No hay bajo — la canción flota literalmente, como el avión que invoca. Victor Feldman aporta vibráfono, dándole una textura de aire rarificado, de altitud.",
      "La estructura es hipnótica: sin estribillo convencional, cada estrofa es una meditación independiente que regresa al mismo lugar emocional. Es el equivalente musical de conducir por una carretera recta que se extiende hasta el horizonte sin curvas.",
    ],
    joniQuote: "I was driving through the desert and I saw six jet planes leaving six long white vapor trails across the sky. And I thought of the six strings of my guitar. And I thought of Amelia Earhart.",
    lyrics: [
      {
        id: "v1", label: "I",
        lines: [
          { text: "I was driving across the burning desert", annotation: "El desierto de Mojave / Arizona. Joni conduce sola, la única persona en kilómetros de asfalto recto." },
          { text: "When I spotted six jet planes" },
          { text: "Leaving six white vapor trails across the bleak terrain", annotation: "Las seis estelas = las seis cuerdas de guitarra. Joni convierte el paisaje en instrumento musical." },
          { text: "It was the hexagram of the heavens" },
          { text: "It was the strings of my guitar" },
        ],
      },
      {
        id: "v2", label: "II",
        lines: [
          { text: "Amelia, it was just a false alarm" },
          { text: "The ambers turn to highlights in your hair" },
          { text: "A ghost of aviation" },
          { text: "She was swallowed by the sky", annotation: "Earhart desapareció en algún lugar sobre el Pacífico el 2 de julio de 1937. Nunca se encontraron restos confirmados. 'Tragada por el cielo' — la metáfora perfecta." },
          { text: "Or by the sea, like me she had a dream to fly" },
        ],
      },
      {
        id: "v3", label: "III",
        lines: [
          { text: "People will tell you where they've gone" },
          { text: "They'll tell you where to go" },
          { text: "But till you get there yourself you never really know" },
          { text: "Where some have found their paradise" },
          { text: "Others just come to harm" },
        ],
      },
      {
        id: "v4", label: "IV",
        lines: [
          { text: "I wish that he was here tonight" },
          { text: "It's so hard to obey" },
          { text: "His survey of distances", annotation: "El pronombre 'he' es ambiguo — puede referirse a un amante o a Dios. Joni deja la ambigüedad intacta." },
          { text: "And the heart that it is requiring" },
          { text: "I had no idea of the longitude and latitude" },
        ],
      },
      {
        id: "v5", label: "V",
        lines: [
          { text: "Maybe I've never really loved" },
          { text: "I guess that is the truth" },
          { text: "I've spent my whole life in clouds at icy altitude" },
          { text: "And looking down on everything" },
          { text: "I crashed into his arms", annotation: "El 'aterrizaje forzoso' en los brazos de alguien — contradicción entre el vuelo solitario y la necesidad de conexión. Es el dilema central de todo el álbum." },
        ],
      },
    ],
    references: [
      {
        id: "earhart",
        term: "Amelia Earhart",
        category: "person",
        summary: "Aviadora pionera estadounidense, desaparecida en 1937.",
        details: "Amelia Mary Earhart (1897-1937) fue la primera mujer en cruzar el Atlántico en solitario. Desapareció el 2 de julio de 1937 durante un intento de circunnavegar el globo por la línea ecuatorial. Su avión, un Lockheed Electra 10E, nunca fue encontrado. Se convirtió en símbolo de la aventura femenina y la libertad a cualquier precio.",
        date: "1897-1937",
      },
      {
        id: "mojave",
        term: "Desierto de Mojave",
        category: "place",
        summary: "Desierto árido del suroeste de EE.UU.",
        details: "El desierto de Mojave se extiende por partes de California, Nevada, Utah y Arizona. Sus carreteras rectas y horizontes infinitos lo convierten en un paisaje de meditación involuntaria. Joni conducía por la Ruta 66 o la Interstate 40 cuando vio las estelas que inspiraron la canción.",
        location: "Suroeste de EE.UU.",
      },
      {
        id: "vapor-trails",
        term: "Las 6 estelas de jets",
        category: "concept",
        summary: "Seis estelas de avión que Joni comparó con las cuerdas de su guitarra.",
        details: "La imagen central de la canción: seis aviones dejando estelas paralelas sobre el desierto. Joni las vio como las seis cuerdas de una guitarra dibujadas en el cielo — el paisaje convertido en instrumento. Es una de las metáforas más célebres de su carrera.",
      },
    ],
  },

  furry: {
    slug: "furry",
    heroGradient: ["#6B8FA3", "#8B7355", "#F5F0E8"],
    storyParagraphs: [
      "\"Furry Sings the Blues\" es un documental sonoro sobre Beale Street, Memphis, en febrero de 1976. Joni visitó a Walter 'Furry' Lewis, un bluesman nacido en 1893 que había perdido una pierna en un accidente de tren y vivía en la pobreza.",
      "La canción funciona como una caminata: Joni recorre Beale Street, pasa frente al New Daisy Theatre, la estatua de W.C. Handy, el Sweeties' Snack Bar. Todo está en decadencia. El blues original de Memphis ha sido despojado y comercializado, y los creadores originales viven olvidados.",
      "La grabación incluye a Neil Young en armónica — una colaboración rara entre dos iconos canadienses. El sonido áspero de la armónica de Young pone polvo de Memphis en la canción.",
      "Furry Lewis se enfureció cuando escuchó la canción. Sintió que Joni lo había retratado como un objeto de lástima, no como un artista. Es una de las tensiones no resueltas del álbum: la mirada documentalista de Joni chocando con la dignidad de su sujeto.",
    ],
    joniQuote: "I went to see old Furry in his room. He was propped up in his bed, his teeth and his leg removed. And he played and he sang, and it was authentic — but it was also heartbreaking to see what had become of the source.",
    lyrics: [
      {
        id: "v1", label: "I",
        lines: [
          { text: "Old Furry sings the blues", annotation: "Walter 'Furry' Lewis (1893-1981), bluesman de Memphis. Tocaba con un estilo de guitarra fingerpicking único, usando una botella como slide." },
          { text: "Propped up in his bed" },
          { text: "With his dentures and his leg removed" },
          { text: "And his sleep cap on his head" },
        ],
      },
      {
        id: "v2", label: "II",
        lines: [
          { text: "Pawn shops glitter like gold tooth caps" },
          { text: "In the grey decay" },
          { text: "They chew over the Handy trivia", annotation: "W.C. Handy (1873-1958), 'Padre del Blues', tiene una estatua en Beale Street. La 'trivia' sugiere que lo que queda del blues en Memphis es turismo, no música viva." },
          { text: "And they spit it back at you all day" },
        ],
      },
      {
        id: "v3", label: "III",
        lines: [
          { text: "Beale Street's coming down" },
          { text: "Walking one last time" },
          { text: "Past the boarded windows and the pawnshops", annotation: "En 1976, Beale Street estaba en plena decadencia urbana. Los edificios históricos del blues estaban abandonados o en ruinas. La revitalización turística vendría después." },
          { text: "The lucky dice and the leather" },
        ],
      },
      {
        id: "v4", label: "IV",
        lines: [
          { text: "Furry sings the blues" },
          { text: "Why should I expect" },
          { text: "That old Furry would be happy" },
          { text: "To see us" },
        ],
      },
    ],
    references: [
      {
        id: "furry-lewis",
        term: "Furry Lewis",
        category: "person",
        summary: "Bluesman de Memphis nacido en 1893.",
        details: "Walter 'Furry' Lewis (1893-1981) fue un guitarrista y cantante de blues de Memphis. Perdió una pierna en un accidente de tren en 1916. Grabó por primera vez en los años 1920, cayó en el olvido, y fue 'redescubierto' en los 1960s durante el folk revival. Trabajó como barrendero municipal durante décadas mientras era una leyenda viva del blues.",
        date: "1893-1981",
        location: "Memphis, Tennessee",
      },
      {
        id: "beale-street",
        term: "Beale Street",
        category: "place",
        summary: "Calle icónica del blues en Memphis, Tennessee.",
        details: "Beale Street fue el epicentro de la cultura afroamericana y del blues en Memphis desde finales del siglo XIX. En 1976, cuando Joni la visitó, estaba en plena decadencia urbana. Fue declarada Monumento Histórico Nacional y revitalizada en los 1980s como distrito de entretenimiento.",
        location: "Memphis, Tennessee",
      },
      {
        id: "wc-handy",
        term: "W.C. Handy",
        category: "person",
        summary: "Compositor conocido como 'el Padre del Blues'.",
        details: "William Christopher Handy (1873-1958) popularizó el blues como forma musical con composiciones como 'St. Louis Blues' y 'Memphis Blues'. Su estatua en Beale Street es uno de los pocos monumentos que sobrevivieron a la decadencia del barrio.",
        location: "Memphis, Tennessee",
      },
      {
        id: "neil-young",
        term: "Neil Young (armónica)",
        category: "person",
        summary: "Músico canadiense que aporta armónica en esta pista.",
        details: "Neil Young contribuye con armónica en 'Furry Sings the Blues', una de las pocas colaboraciones grabadas entre dos de los artistas canadienses más importantes del siglo XX. El sonido crudo y no pulido de su armónica aporta autenticidad — suena como Memphis, no como Los Ángeles.",
      },
    ],
  },

  "strange-boy": {
    slug: "strange-boy",
    heroGradient: ["#6B8FA3", "#8B9A7A", "#F5F0E8"],
    storyParagraphs: [
      "\"A Strange Boy\" narra un romance con un hombre más joven en un bed & breakfast de Nueva Inglaterra. La canción examina la asimetría emocional que surge de la diferencia de edad y experiencia.",
      "Damariscotta, Maine, es un pequeño pueblo costero de tradición puritana. El contraste entre la rigidez cultural del lugar y la libertad emocional de Joni genera una tensión que permea toda la canción.",
      "Es el arreglo más sencillo del álbum — solo voz, guitarra y percusión ligera de Bobbye Hall. La simplicidad del sonido refleja la simplicidad del encuentro: sin complicaciones, sin promesas, sin pretensiones de permanencia.",
      "La canción funciona como contrapunto a 'Coyote': donde el romance con Shepard era entre iguales que no encajaban por circunstancia, este es entre personas que no encajan por momento vital. Dos formas distintas de desencuentro amoroso.",
    ],
    lyrics: [
      {
        id: "v1", label: "I",
        lines: [
          { text: "He gave me clothes and he gave me eagles" },
          { text: "And he gave me roses and a heart-shaped locket", annotation: "Los regalos del Strange Boy son infantiles en su generosidad — águilas, rosas, un relicario. Joni los acepta con ternura pero también con distancia." },
          { text: "He said his mama was an Aquarian" },
          { text: "And his daddy was a Viking" },
        ],
      },
      {
        id: "v2", label: "II",
        lines: [
          { text: "A strange boy flew in on the wings of the dawn" },
          { text: "And he settled on my windowsill" },
          { text: "A strange boy from another zone" },
          { text: "He didn't know the customs here" },
        ],
      },
      {
        id: "v3", label: "III",
        lines: [
          { text: "He could make me feel so ashamed" },
          { text: "Of all my misery" },
          { text: "He wandered like a curious child", annotation: "La metáfora del niño curioso es literal y figurada. El Strange Boy explora el mundo de Joni como un niño en un museo — con asombro pero sin comprensión real." },
          { text: "Through the market place" },
        ],
      },
    ],
    references: [
      {
        id: "damariscotta",
        term: "Damariscotta, Maine",
        category: "place",
        summary: "Pequeño pueblo costero en la costa de Maine.",
        details: "Damariscotta es un pueblo de menos de 2,000 habitantes en la costa central de Maine. Sus bed & breakfasts y casas victorianas representan la Nueva Inglaterra más tradicional. Joni se detuvo allí durante su recorrido en solitario por la costa este.",
        location: "Maine, EE.UU.",
      },
      {
        id: "new-england-culture",
        term: "Cultura puritana de Nueva Inglaterra",
        category: "concept",
        summary: "La rigidez cultural del noreste como telón de fondo del romance.",
        details: "Nueva Inglaterra mantiene una cultura de reserva emocional heredada de los puritanos. El romance libre de Joni — una mujer de treinta y tantos años con un hombre más joven en un B&B — choca con esta tradición de decoro. La tensión no es explícita en la letra pero define el ambiente.",
      },
    ],
  },

  hejira: {
    slug: "hejira",
    heroGradient: ["#6B8FA3", "#A0B8C8", "#F5F0E8"],
    storyParagraphs: [
      "La canción titular del álbum es también su centro gravitacional. Joni conduce sola por rutas nevadas, procesando la ruptura con John Guerin. Describió esta canción como la más difícil de escribir: sin estribillo, cada estrofa es un mini-ensayo independiente.",
      "El título viene del árabe 'hijrah' (هجرة) — éxodo, migración. Joni lo encontró en el diccionario y le gustó cómo la 'j' colgaba en la página. Lo definió como 'huir con honor' y 'dejar el sueño, sin culpa'.",
      "Lake Mendota en Madison, Wisconsin, es donde Joel Bernstein fotografió a Joni patinando sobre el lago congelado para la portada del álbum. La sesión fotográfica ocurrió en un día de invierno donde Joni llevaba una capa negra que el viento inflaba como una vela.",
      "Musicalmente, Abe Most entra con clarinete al final de la canción como un susurro nocturno. No solea: respira. Es el momento más íntimo del álbum.",
    ],
    joniQuote: "I found the word 'hejira' in the dictionary. It said: 'running away, with honor.' I thought, that's perfect. That's exactly what I'm doing.",
    lyrics: [
      {
        id: "v1", label: "I",
        lines: [
          { text: "I'm travelling in some vehicle" },
          { text: "I'm sitting in some cafe" },
          { text: "A defector from the petty wars", annotation: "Joni como desertora de las 'guerras pequeñas' — las batallas domésticas, las peleas de pareja, la política de la industria musical. Elige la carretera como territorio neutral." },
          { text: "That shell shock love away" },
        ],
      },
      {
        id: "v2", label: "II",
        lines: [
          { text: "I'm porous with travel fever", annotation: "La 'fiebre de viaje' como condición existencial. No es solo fatiga — es una permeabilidad emocional que el movimiento constante provoca." },
          { text: "But you know I'm so glad to be on my own" },
          { text: "Still somehow the slightest touch of a stranger" },
          { text: "Can set up trembling in my bones" },
        ],
      },
      {
        id: "v3", label: "III",
        lines: [
          { text: "I know — no one's going to show me everything" },
          { text: "We all come and go unknown" },
          { text: "Each so deep and superficial" },
          { text: "Between the forceps and the stone", annotation: "Entre las pinzas del parto y la lápida — la vida humana resumida en una imagen. Una de las líneas más citadas de Joni." },
        ],
      },
      {
        id: "v4", label: "IV",
        lines: [
          { text: "There's comfort in melancholy" },
          { text: "When there's no need to explain" },
          { text: "It's just as natural as the weather" },
          { text: "In this moody sky today" },
        ],
      },
      {
        id: "v5", label: "V",
        lines: [
          { text: "Snow gathers like bolts of lace", annotation: "La nieve como encaje — una imagen que conecta con la sesión fotográfica en Lake Mendota. La nieve es simultáneamente bella y paralizante." },
          { text: "Wading through the Winter Court" },
          { text: "Two Mozarts on the wall" },
          { text: "And an open door into an empty hall" },
        ],
      },
    ],
    references: [
      {
        id: "hijrah",
        term: "Hejira / Hijrah",
        category: "concept",
        summary: "Del árabe: éxodo, migración. 'Huir con honor'.",
        details: "La palabra hijrah (هجرة) en árabe se refiere originalmente a la migración del profeta Mahoma de La Meca a Medina en 622 d.C. Joni la encontró en el diccionario y la adoptó como título: 'running away with honor' — la idea de que marcharse puede ser un acto de dignidad, no de cobardía.",
      },
      {
        id: "joel-bernstein",
        term: "Sesión fotográfica de Joel Bernstein",
        category: "event",
        summary: "Las fotos de la portada del álbum, tomadas en Lake Mendota.",
        details: "Joel Bernstein fotografió a Joni patinando en Lake Mendota, Madison, Wisconsin, durante el invierno de 1976. Joni llevaba una capa negra que el viento inflaba como una vela, permitiéndole deslizarse por la superficie congelada como un cuervo oscuro en vuelo. Norman Seeff luego integró 14 fotografías en un solo negativo compuesto usando una Cámara Lúcida.",
        location: "Lake Mendota, Madison, Wisconsin",
        date: "Invierno 1976",
      },
      {
        id: "john-guerin",
        term: "John Guerin",
        category: "person",
        summary: "Baterista de jazz y pareja de Joni durante 1974-76.",
        details: "John Guerin (1939-2004) fue un baterista de sesión de élite en Los Ángeles. Su relación con Joni duró aproximadamente dos años y su ruptura es el catalizador emocional de gran parte de Hejira. Guerin toca batería en tres canciones del álbum, una situación emocionalmente compleja.",
      },
      {
        id: "abe-most",
        term: "Abe Most (clarinete)",
        category: "person",
        summary: "Clarinetista que aparece al final de la canción.",
        details: "Abe Most (1920-2002) fue un clarinetista de jazz de Los Ángeles. Su entrada al final de 'Hejira' es uno de los momentos más delicados del álbum — el clarinete no solea sino que respira, como un susurro nocturno que acompaña sin invadir.",
      },
    ],
    photoshootNote: "Joel Bernstein fotografió a Joni patinando en Lake Mendota con una capa negra que el viento inflaba como vela. Norman Seeff integró 14 fotografías diferentes en un solo negativo compuesto usando una Cámara Lúcida, creando un collage monocromático que simulaba ser una única fotografía surrealista.",
  },

  sharon: {
    slug: "sharon",
    heroGradient: ["#8B7355", "#9A7A50", "#F5F0E8"],
    storyParagraphs: [
      "\"Song for Sharon\" es una carta de ocho minutos y medio dirigida a Sharon Bell, la amiga de infancia de Joni en Maidstone, Saskatchewan. Sharon se casó con un granjero; Joni, que soñaba con ser esposa de granjero, terminó siendo una estrella.",
      "La canción nació en Staten Island. Joni fue a Mandolin Brothers, una tienda real en el 629 de Forest Avenue, a comprar una mandolina. En el camino vio un vestido de novia blanco en un escaparate y la imagen detonó toda la canción.",
      "La estructura es asociativa, no lineal: salta de Staten Island a Maidstone, de una adivina en Bleecker Street a la pista de patinaje de Wollman Rink, de los trabajadores Mohawk en los rascacielos a una tienda de novias llamada BN Bridal. Sigue la lógica de la memoria, no de la narrativa.",
      "Es la canción más larga del álbum y la más reveladora emocionalmente. Joni admitió haberla escrito bajo la influencia de cocaína, lo que puede explicar su flujo de conciencia vertiginoso y sus saltos geográficos.",
    ],
    joniQuote: "I went to Staten Island to buy myself a mandolin. And I saw the long white dress of love on a storefront mannequin. And I thought of Sharon.",
    lyrics: [
      {
        id: "v1", label: "I",
        lines: [
          { text: "I went to Staten Island, Sharon", annotation: "Sharon Bell, amiga de la infancia de Joni en Maidstone, Saskatchewan. Se casó con un granjero — el destino que Joni creía querer para sí misma." },
          { text: "To buy myself a mandolin" },
          { text: "And I saw the long white dress of love" },
          { text: "On a storefront mannequin", annotation: "El vestido de novia en el escaparate de Staten Island — la imagen que detona toda la canción. Un recordatorio físico de la vida que Joni no eligió." },
        ],
      },
      {
        id: "v2", label: "II",
        lines: [
          { text: "I know you've seen it all before" },
          { text: "Been all around the world" },
          { text: "The islands and the mainland too" },
          { text: "The Indian boys and the cowboys" },
        ],
      },
      {
        id: "v3", label: "III",
        lines: [
          { text: "There's a girl up on the ferry" },
          { text: "She looks just like a queen" },
          { text: "In a silver coat and silver shoes" },
          { text: "And the wind blows through her Vaseline" },
        ],
      },
      {
        id: "v4", label: "IV",
        lines: [
          { text: "A woman I knew just drowned herself", annotation: "Una referencia cruda a la desesperación que puede acompañar la vida artística. Joni inserta la muerte en medio de una canción sobre bodas y mandolinas." },
          { text: "The well was deep and black" },
          { text: "I was thinking about that woman" },
          { text: "We could call her back" },
        ],
      },
      {
        id: "v5", label: "V",
        lines: [
          { text: "Now there are twenty-nine skaters on Wollman Rink", annotation: "Wollman Rink en Central Park. Joni cuenta los patinadores — veintinueve — con la precisión obsesiva de alguien que observa el mundo desde fuera." },
          { text: "Circling in singles and in pairs" },
          { text: "In this vigorous anonymity" },
          { text: "A blank face that I stare at stares at me" },
        ],
      },
    ],
    references: [
      {
        id: "mandolin-brothers",
        term: "Mandolin Brothers",
        category: "place",
        summary: "Tienda de instrumentos en Staten Island donde Joni compró una mandolina.",
        details: "Mandolin Brothers estaba ubicada en el 629 de Forest Avenue, Staten Island. Era una de las tiendas de instrumentos de cuerda más respetadas de Estados Unidos. Joni fue allí a comprar una mandolina (posiblemente un mandocelo Gibson K-4) y el viaje en ferry a Staten Island detonó la canción.",
        location: "629 Forest Avenue, Staten Island, NY",
      },
      {
        id: "staten-island-ferry",
        term: "Ferry de Staten Island",
        category: "place",
        summary: "El servicio de ferry gratuito entre Manhattan y Staten Island.",
        details: "El Staten Island Ferry cruza la bahía de Nueva York entre Whitehall Terminal en Manhattan y St. George Terminal en Staten Island. Es gratuito desde 1997 (en 1976 costaba 5 centavos). Joni lo tomó para ir a Mandolin Brothers y la travesía contribuyó a la atmósfera contemplativa de la canción.",
        location: "Nueva York",
      },
      {
        id: "wollman-rink",
        term: "Wollman Rink",
        category: "place",
        summary: "Pista de patinaje sobre hielo en Central Park.",
        details: "Wollman Rink es una pista de patinaje al aire libre en la esquina sureste de Central Park. Joni observa 'veintinueve patinadores' dando vueltas — la precisión del número revela su estado de hiperconciencia y aislamiento.",
        location: "Central Park, Manhattan, NY",
      },
      {
        id: "gibson-k4",
        term: "Gibson K-4 mandocelo",
        category: "object",
        summary: "Instrumento que Joni posiblemente buscaba en Mandolin Brothers.",
        details: "El mandocelo Gibson K-4 es un instrumento raro de la familia de las mandolinas, con un registro más grave. Joni Mitchell era coleccionista de instrumentos inusuales y sus afinaciones abiertas experimentales se extendían a todo tipo de instrumentos de cuerda.",
      },
      {
        id: "bleecker-street",
        term: "Bleecker Street",
        category: "place",
        summary: "Calle del Greenwich Village mencionada en la canción.",
        details: "Bleecker Street es una de las arterias principales del Greenwich Village. En los años 70 aún mantenía el espíritu bohemio de la década anterior, con adivinas, cafés y tiendas esotéricas. Joni menciona una fortune teller (adivina) en Bleecker Street.",
        location: "Greenwich Village, Manhattan, NY",
      },
    ],
  },

  "black-crow": {
    slug: "black-crow",
    heroGradient: ["#2C2416", "#4A3520", "#F5F0E8"],
    storyParagraphs: [
      "\"Black Crow\" aborda la pesadilla logística de salir de la propiedad que Joni mantenía como segundo hogar en la remota Sunshine Coast de la Columbia Británica.",
      "En lugar de ofrecer una imagen idílica del refugio en el bosque, la canción disecciona con hiperrealismo pragmático la secuencia caótica de múltiples modos de transporte necesarios para escapar: 'Tomé un transbordador a la autopista / Luego conduje hasta un bar junto al mar / Tomé un avión a un taxi / Y un taxi a un tren.'",
      "El agotamiento crónico inducido por este movimiento perpetuo provoca una profunda desorientación espacial. Mirando por la ventana, con el rostro demacrado por la falta de sueño, Joni se compara con el cuervo negro de la región — un ave carroñera que se lanza en picada para recoger objetos brillantes.",
      "Observar al cuervo se convierte en alegoría cruda de su propia hambre por la fama, las ovaciones y los reconocimientos, admitiendo que es 'una debilidad que puedo comprender.'",
      "Musicalmente, es la canción donde Jaco Pastorius brilla con más claridad. Su bajo fretless — al que le sacó los trastes con un cuchillo de manteca — no marca el tiempo: nada debajo de la canción como corrientes invisibles. Sin Jaco, sería folk; con Jaco es algo que en 1976 no tenía nombre.",
    ],
    joniQuote: "I was driving back to L.A., and I saw a black crow flying. And I thought: that's me. That's exactly me. Looking for something shiny on the ground, picking it up, flying off again.",
    lyrics: [
      {
        id: "v1", label: "I",
        lines: [
          { text: "There's a crow flying" },
          { text: "Black and ragged" },
          { text: "Tree to tree" },
          { text: "He's as black as the highway that's leading me", annotation: "La carretera como extensión del cuervo — ambos negros, ambos interminables. Joni no viaja por la carretera; la carretera la posee." },
        ],
      },
      {
        id: "v2", label: "II",
        lines: [
          { text: "Now he's diving down" },
          { text: "To pick up on something shiny", annotation: "Los objetos brillantes que el cuervo recoge son equivalentes de la fama: aplausos, premios, diamantes. Una adicción que Joni reconoce compartir con el ave." },
          { text: "I feel like that black crow" },
          { text: "In a blue sky" },
        ],
      },
      {
        id: "v3", label: "III",
        lines: [
          { text: "I took a ferry to the highway", annotation: "La secuencia caótica de transportes para salir de Sunshine Coast: ferry → autopista → hidroavión → avión → taxi → tren. Cada modo es un eslabón de una cadena de escape." },
          { text: "Then I drove to a seaside bar" },
          { text: "I took a plane to a taxi" },
          { text: "And a taxi to a train" },
        ],
      },
      {
        id: "v4", label: "IV",
        lines: [
          { text: "I've been travelling so long", annotation: "La 'fiebre de viaje' no es solo fatiga física sino una condición existencial. El movimiento perpetuo se convierte en identidad." },
          { text: "How'm I ever going to know my home" },
          { text: "When I see it again" },
          { text: "I'm like a black crow flying" },
        ],
      },
      {
        id: "v5", label: "V",
        lines: [
          { text: "In search of love and music", annotation: "El verso central del álbum entero. Amor y música como los dos polos que mantienen a Joni en movimiento perpetuo." },
          { text: "My whole life has been" },
          { text: "Illumination, corruption" },
          { text: "And diving, diving, diving, diving", annotation: "La repetición de 'diving' cuatro veces — como los cuatro modos de transporte, como el cuervo que no puede dejar de lanzarse. El movimiento es compulsión, no elección." },
        ],
      },
    ],
    references: [
      {
        id: "sunshine-coast",
        term: "Sunshine Coast, BC",
        category: "place",
        summary: "Costa remota de la Columbia Británica donde Joni tenía una propiedad.",
        details: "La Sunshine Coast es una franja costera al noroeste de Vancouver, accesible solo por ferry o avión. Joni mantenía una propiedad allí como refugio creativo. La ironía de la canción es que el refugio requiere una odisea logística para abandonarlo.",
        location: "Columbia Británica, Canadá",
      },
      {
        id: "transport-sequence",
        term: "Secuencia ferry→autopista→avión→taxi→tren",
        category: "concept",
        summary: "La cadena de modos de transporte para salir de Sunshine Coast.",
        details: "La secuencia real para salir de la propiedad de Joni: tomar un ferry a la autopista, conducir hasta un hidroavión, volar a un aeropuerto, tomar un taxi, luego un tren. Cada eslabón representa un grado más de distancia del refugio y un paso más hacia la maquinaria del mundo profesional.",
      },
      {
        id: "jaco-fretless",
        term: "Jaco Pastorius",
        category: "person",
        summary: "Bajista revolucionario que redefinió el bajo eléctrico.",
        details: "John Francis Anthony Pastorius III (1951-1987) removió los trastes de su bajo Fender Jazz con un cuchillo de manteca y rellenó las ranuras con resina, creando el primer bajo fretless eléctrico práctico. Su técnica en 'Black Crow' da a la canción un cielo líquido sobre el que el cuervo puede volar. Sin Jaco, el álbum sería folk; con Jaco es algo sin nombre en 1976.",
      },
    ],
    photoshootNote: "Joel Bernstein fotografió a Joni patinando en Lake Mendota con una capa negra que el viento inflaba como vela — 'la actitud de un cuervo en vuelo'. Norman Seeff integró 14 negativos en un compuesto monocromático usando Cámara Lúcida.",
  },

  "blue-motel": {
    slug: "blue-motel",
    heroGradient: ["#6B8FA3", "#7A9A8A", "#F5F0E8"],
    storyParagraphs: [
      "\"Blue Motel Room\" es la canción más jazzística del álbum, casi un torch song. Joni se encuentra en el DeSoto Beach Motel en Savannah, Georgia — un lugar modesto directamente sobre la playa — entre ciudades de la gira con John Guerin.",
      "La repetición obsesiva del color azul — habitación azul, colcha azul, blues azules — convierte el color en un estado emocional. El motel es simultáneamente refugio y prisión, un espacio liminal donde Joni espera sin saber exactamente qué espera.",
      "Chuck Domanico toca contrabajo acústico (no el bajo eléctrico fretless de Jaco), dándole a la canción una textura de club de jazz a altas horas de la noche. Es el momento del álbum donde la carretera se detiene y el silencio se instala.",
      "La metáfora de la Guerra Fría que aparece en la canción — comparando la relación con Guerin con una negociación diplomática entre superpotencias — revela el humor intelectual de Joni incluso en sus momentos más vulnerables.",
    ],
    lyrics: [
      {
        id: "v1", label: "I",
        lines: [
          { text: "I've got a blue motel room", annotation: "El DeSoto Beach Motel en Savannah, Georgia. Un lugar real, modesto, directamente sobre la playa. El azul es el color del aislamiento." },
          { text: "With a blue bedspread" },
          { text: "I've got the blue blue blues" },
          { text: "Blue ribbons on my head" },
        ],
      },
      {
        id: "v2", label: "II",
        lines: [
          { text: "Sometimes a blond Italian boy will look at me" },
          { text: "I mean he'll really look at me" },
          { text: "But I'm holding myself watching TV" },
          { text: "It's like holding an armistice day", annotation: "La metáfora de la Guerra Fría — la relación como negociación diplomática entre superpotencias. Humor intelectual en medio de la vulnerabilidad." },
        ],
      },
      {
        id: "v3", label: "III",
        lines: [
          { text: "Just like they sing it in the old torch song" },
          { text: "My heart cries for you" },
          { text: "But my love lies there like a fold in the dough" },
          { text: "Waiting to rise" },
        ],
      },
    ],
    references: [
      {
        id: "desoto-motel",
        term: "DeSoto Beach Motel",
        category: "place",
        summary: "Motel de playa en Savannah, Georgia.",
        details: "El DeSoto Beach Motel era un establecimiento modesto ubicado directamente sobre la playa en la isla de Tybee, cerca de Savannah. Joni se quedó allí entre ciudades de la gira con Guerin. El lugar representaba un limbo geográfico y emocional.",
        location: "Tybee Island, Savannah, Georgia",
      },
      {
        id: "cold-war-metaphor",
        term: "Metáfora de la Guerra Fría",
        category: "concept",
        summary: "La relación con Guerin comparada con una negociación diplomática.",
        details: "Joni compara su relación deteriorándose con Guerin con las tensiones de la Guerra Fría — dos potencias que se necesitan pero no pueden coexistir pacíficamente. Es un ejemplo del humor intelectual que Joni usa para procesar dolor emocional.",
      },
      {
        id: "chuck-domanico",
        term: "Chuck Domanico (contrabajo)",
        category: "person",
        summary: "Contrabajista acústico que reemplaza a Jaco en esta pista.",
        details: "Chuck Domanico (1944-2002) fue un contrabajista de sesión en Los Ángeles. Su contrabajo acústico (no el bajo eléctrico fretless de Jaco) le da a 'Blue Motel Room' una textura de club de jazz nocturno — más íntima, más oscura, más cercana al suelo.",
      },
    ],
  },

  refuge: {
    slug: "refuge",
    heroGradient: ["#8B7355", "#96785A", "#F5F0E8"],
    storyParagraphs: [
      "\"Refuge of the Roads\" cierra el álbum con una perspectiva cósmica. Joni visitó a Chögyam Trungpa, maestro budista tibetano, en Boulder, Colorado, durante tres días de su viaje transcontinental.",
      "La canción narra un momento transformador en una estación de servicio: Joni vio una fotografía de la Tierra tomada desde la Luna (posiblemente la icónica 'Earthrise' del Apolo 8) que puso su angustia personal en escala planetaria.",
      "Es la canción donde el álbum deja de ser íntimo y se vuelve cósmico. La entrada de los metales al final — Tom Scott en saxofón y Chuck Findley en trompeta — es el momento más cercano a un crescendo en todo el disco.",
      "El título 'Refuge of the Roads' invierte la lógica habitual: normalmente uno busca refugio de los caminos. Aquí, los caminos mismos son el refugio. Es la conclusión filosófica del álbum: el viaje que comenzó como escape se convierte en llegada.",
    ],
    joniQuote: "In a highway service station, I saw a photograph of the earth taken coming back from the moon. And I thought: if we could see ourselves from that distance, all our petty wars would end.",
    lyrics: [
      {
        id: "v1", label: "I",
        lines: [
          { text: "In a highway service station", annotation: "Una parada de gasolina genérica en algún punto de la I-70 en Colorado. El momento trascendente ocurre en el lugar más banal posible." },
          { text: "Over the month of June" },
          { text: "Was a photograph of the Earth" },
          { text: "Taken coming back from the moon" },
        ],
      },
      {
        id: "v2", label: "II",
        lines: [
          { text: "And you couldn't see a city" },
          { text: "On that marbled bowling ball" },
          { text: "Or a forest or a highway", annotation: "Desde la distancia lunar, todo lo que define la vida cotidiana desaparece. Ciudades, bosques, autopistas — todo invisible. Es el momento donde la perspectiva personal de Joni se vuelve universal." },
          { text: "Or me here, least of all" },
        ],
      },
      {
        id: "v3", label: "III",
        lines: [
          { text: "You couldn't see the footsteps" },
          { text: "In any snow that fell" },
          { text: "You couldn't see a hotel & a taxi cab & a priest" },
          { text: "Heart of darkness, here I dwell" },
        ],
      },
      {
        id: "v4", label: "IV",
        lines: [
          { text: "In the refuge of the roads", annotation: "El título del álbum invertido: los caminos son el refugio, no aquello de lo que se huye. La conclusión filosófica de Hejira." },
          { text: "I encountered many things" },
          { text: "But nothing too heavy" },
          { text: "For a soul that can take wing" },
        ],
      },
    ],
    references: [
      {
        id: "trungpa",
        term: "Chögyam Trungpa",
        category: "person",
        summary: "Maestro budista tibetano en Boulder, Colorado.",
        details: "Chögyam Trungpa Rinpoche (1939-1987) fue un maestro budista tibetano que fundó la Universidad Naropa en Boulder, Colorado. Joni lo visitó durante tres días en su viaje transcontinental. Sus enseñanzas sobre la tensión entre iluminación y neurosis artística influyeron profundamente en esta canción.",
        location: "Boulder, Colorado",
        date: "1976",
      },
      {
        id: "earthrise",
        term: "Fotografía 'Earthrise' del Apolo 8",
        category: "object",
        summary: "Foto icónica de la Tierra vista desde la órbita lunar.",
        details: "La fotografía 'Earthrise' fue tomada por William Anders durante la misión Apolo 8 el 24 de diciembre de 1968. Muestra la Tierra emergiendo sobre el horizonte lunar. Es considerada una de las fotografías más influyentes de la historia — la primera vez que la humanidad se vio a sí misma desde fuera. Joni la vio en una estación de servicio y le cambió la perspectiva.",
        date: "24 de diciembre de 1968",
      },
      {
        id: "boulder",
        term: "Boulder, Colorado",
        category: "place",
        summary: "Ciudad universitaria al pie de las Rocosas.",
        details: "Boulder era en los 1970s un centro de contracultura y espiritualidad alternativa. La presencia de Chögyam Trungpa y la Universidad Naropa atraía a artistas, poetas y buscadores espirituales. Allen Ginsberg enseñaba allí. Joni pasó tres días con Trungpa, absorbiendo enseñanzas que le dieron perspectiva sobre su propia inquietud.",
        location: "Colorado, EE.UU.",
      },
      {
        id: "horn-section",
        term: "Entrada de metales (Tom Scott + Chuck Findley)",
        category: "concept",
        summary: "El único crescendo del álbum, al final de la última canción.",
        details: "Tom Scott en saxofón y Chuck Findley en trompeta entran al final de 'Refuge of the Roads'. Es el único momento del álbum donde la instrumentación se expande hacia algo orquestal. El álbum que comenzó íntimo y solitario termina con una apertura hacia algo más grande que el individuo.",
      },
    ],
  },
};

export function getSongContent(slug: string): SongContent | undefined {
  return ALL_SONG_CONTENT[slug];
}
