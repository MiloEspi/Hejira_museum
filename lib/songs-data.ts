export type JourneySlug = "thunder" | "guerin" | "solo";

export interface Musician {
  name: string;
  instrument: string;
  isGuest?: boolean;
}

export interface SongThread {
  slug: string;
  reason: string;
}

export interface Song {
  slug: string;
  title: string;
  trackNumber: number;
  duration: string;
  journey: JourneySlug;
  city: string;
  coords: [number, number]; // [longitude, latitude]
  symbolDescription: string;
  inspiredBy: string;
  highlightQuote: string;
  personnel: Musician[];
  emotionalNote: string;
  photoshootConnection?: string;
  titleNote?: string;
  curiosity?: string;
  lyricalSymbols?: string;
  threads: SongThread[];
}

export const SONGS: Song[] = [
  {
    slug: "coyote",
    title: "Coyote",
    trackNumber: 1,
    duration: "5:00",
    journey: "thunder",
    city: "Baljennie, SK",
    coords: [-107.535, 52.321],
    symbolDescription:
      "A coyote sitting in a roadside diner, staring out the window",
    inspiredBy:
      "Sam Shepard, playwright and actor, with whom Joni had a brief romance during Bob Dylan's Rolling Thunder Revue in late 1975. The lyrics reference 'on the road to Baljennie near my old home town' — Baljennie is a hamlet near Maidstone, Saskatchewan, where Joni grew up.",
    highlightQuote:
      "No regrets, Coyote / we just come from such different sets of circumstance",
    personnel: [
      { name: "Joni Mitchell", instrument: "vocals, rhythm guitar" },
      { name: "Larry Carlton", instrument: "lead guitar" },
      { name: "Jaco Pastorius", instrument: "fretless bass" },
      { name: "Bobbye Hall", instrument: "percussion" },
    ],
    emotionalNote:
      "First time Jaco Pastorius appeared on a Joni record; his fretless bass doesn't keep time — it swims underneath",
    // TODO: verify exact Joni citation source
    threads: [
      {
        slug: "amelia",
        reason: "Both songs about encounters with untameable spirits",
      },
      {
        slug: "black-crow",
        reason: "Animal alter-egos — the coyote and the crow",
      },
    ],
  },
  {
    slug: "amelia",
    title: "Amelia",
    trackNumber: 2,
    duration: "6:00",
    journey: "solo",
    city: "Arizona desert",
    coords: [-111.0, 35.0],
    symbolDescription:
      "A red Lockheed Vega airplane (Amelia Earhart's) with six vapor trails behind it",
    inspiredBy:
      "Amelia Earhart, the aviator who disappeared over the Pacific in 1937. Driving alone through the southwest desert, Joni saw six vapor trails in the sky and compared them to the strings of her guitar. She invokes Amelia as patron saint of solo travelers.",
    highlightQuote:
      "A ghost of aviation / she was swallowed by the sky / or by the sea like me she had a dream to fly",
    personnel: [
      { name: "Joni Mitchell", instrument: "vocals, rhythm guitar" },
      { name: "Larry Carlton", instrument: "lead guitar" },
      { name: "Victor Feldman", instrument: "vibes" },
    ],
    emotionalNote:
      "No bass on this track — the song floats like the airplane. Feldman's vibes give it a texture of rarefied air.",
    lyricalSymbols:
      '"I was driving across the burning desert" — the Mojave/Arizona desert',
    threads: [
      {
        slug: "refuge",
        reason:
          "Both songs reach for cosmic perspective from solitary observation",
      },
      {
        slug: "coyote",
        reason: "From tamed encounters to untamed flight",
      },
    ],
  },
  {
    slug: "furry",
    title: "Furry Sings the Blues",
    trackNumber: 3,
    duration: "5:03",
    journey: "guerin",
    city: "Beale Street, Memphis, TN",
    coords: [-90.05, 35.14],
    symbolDescription:
      "An old acoustic guitar leaning at an angle, with a red Beale Street neon sign in the background",
    inspiredBy:
      'Walter "Furry" Lewis, Memphis bluesman born in 1893, whom Joni visited on Beale Street during the February 1976 tour. Furry had lost a leg in a train accident and lived in poverty in Memphis. Joni wrote the song reflecting on how original blues had been stripped and commodified.',
    highlightQuote:
      "Old Furry sings the blues / propped up in his bed / with his dentures and his leg removed",
    personnel: [
      { name: "Joni Mitchell", instrument: "guitar, vocals" },
      { name: "Max Bennett", instrument: "bass" },
      {
        name: "Neil Young",
        instrument: "harmonica",
        isGuest: true,
      },
    ],
    emotionalNote:
      "Neil Young adds harmonica — his rough sound puts Memphis dust on the song. A rare collaboration between two Canadian icons.",
    threads: [
      {
        slug: "blue-motel",
        reason: "Both from the Guerin tour, both about places that hold ghosts",
      },
      {
        slug: "hejira",
        reason: "The road that led away from Guerin",
      },
    ],
  },
  {
    slug: "strange-boy",
    title: "A Strange Boy",
    trackNumber: 4,
    duration: "4:15",
    journey: "solo",
    city: "Damariscotta, ME",
    coords: [-69.519, 44.033],
    symbolDescription:
      "A 1970s skateboard on sand, with a seagull above",
    inspiredBy:
      "A romance with a younger man (a skater from the northeast coast, as the lyrics suggest). Joni examines the age difference and emotional asymmetry.",
    highlightQuote:
      "A strange boy is weaving / a course of grace and havoc / on a yellow skateboard / thru midday sidewalk traffic",
    personnel: [
      { name: "Joni Mitchell", instrument: "vocals, rhythm guitar" },
      { name: "Larry Carlton", instrument: "lead guitar" },
      { name: "Bobbye Hall", instrument: "percussion" },
    ],
    emotionalNote:
      "The simplest arrangement on the album — just voice, guitar, and light percussion, mirroring the simplicity of the encounter",
    threads: [
      {
        slug: "sharon",
        reason: "Both explore different models of love and life choices",
      },
      {
        slug: "coyote",
        reason:
          "Two romances, two kinds of mismatch — age vs. circumstance",
      },
    ],
  },
  {
    slug: "hejira",
    title: "Hejira",
    trackNumber: 5,
    duration: "6:35",
    journey: "solo",
    city: "Lake Mendota, Madison, WI",
    coords: [-89.416, 43.1],
    symbolDescription:
      'A detailed snowflake superimposed over a lace pattern ("snow gathers like bolts of lace")',
    inspiredBy:
      'The title track. Joni driving alone through snowy routes reflects on the breakup with John Guerin. She described it as the hardest song to write — no chorus, each verse is a mini-essay.',
    highlightQuote:
      "I'm porous with travel fever / but you know I'm so glad to be on my own / still somehow the slightest touch of a stranger / can set up trembling in my bones",
    personnel: [
      { name: "Joni Mitchell", instrument: "vocals, guitar" },
      { name: "Jaco Pastorius", instrument: "fretless bass" },
      { name: "Bobbye Hall", instrument: "percussion" },
      {
        name: "Abe Most",
        instrument: "clarinet",
        isGuest: true,
      },
    ],
    emotionalNote:
      "Abe Most's clarinet enters late in the song like a nocturnal whisper. It doesn't solo: it breathes.",
    titleNote:
      'From Arabic hijrah (هجرة) — exodus, migration. Joni found it in the dictionary and liked how the "j" hung on the page. She defined it as "running away with honor" and "leaving the dream, no blame".',
    threads: [
      {
        slug: "black-crow",
        reason: "The movement itself as identity — snowflake and crow",
      },
      {
        slug: "refuge",
        reason: "Both songs where driving becomes philosophy",
      },
    ],
  },
  {
    slug: "sharon",
    title: "Song for Sharon",
    trackNumber: 6,
    duration: "8:37",
    journey: "solo",
    city: "Mandolin Brothers, Staten Island, NY",
    coords: [-74.116, 40.633],
    symbolDescription:
      "A white wedding dress in a Staten Island storefront, with a ferry in the background",
    inspiredBy:
      "Sharon Bell, Joni's childhood friend from Maidstone, Saskatchewan. Joni went to Staten Island to buy a mandolin (at Mandolin Brothers, a real shop), saw a wedding dress in a storefront, and it triggered an 8+ minute meditation on marriage, the life she had vs. the life she could have had. Sharon married a farmer; Joni, who wanted to be a farmer's wife, ended up a star.",
    highlightQuote:
      "I went to Staten Island, Sharon / to buy myself a mandolin / and I saw the long white dress of love / on a storefront mannequin",
    personnel: [
      { name: "Joni Mitchell", instrument: "vocals, guitar" },
      { name: "John Guerin", instrument: "drums" },
      { name: "Max Bennett", instrument: "bass" },
    ],
    emotionalNote:
      "The longest song on the album. It jumps from Staten Island to Maidstone, to a fortune teller on Bleecker Street, to Wollman Rink — not linear, it follows the logic of memory.",
    curiosity:
      "Joni admitted she wrote it under the influence of cocaine.",
    threads: [
      {
        slug: "strange-boy",
        reason: "Both examine love from the outside looking in",
      },
      {
        slug: "refuge",
        reason: "From personal longing to cosmic acceptance",
      },
    ],
  },
  {
    slug: "black-crow",
    title: "Black Crow",
    trackNumber: 7,
    duration: "4:20",
    journey: "solo",
    city: "Sunshine Coast, BC",
    coords: [-123.833, 49.5],
    symbolDescription:
      "A crow in flight with wings fully extended, golden eye",
    inspiredBy:
      "Black Crow addresses the logistical nightmare of leaving Joni's remote second home on the Sunshine Coast of British Columbia. The song details a chaotic sequence of transport modes: 'I took a ferry to the highway / Then I drove to a seaside bar / I took a plane to a taxi / And a taxi to a train.' Looking out the window, sleep-deprived, Joni compares herself to the region's black crows diving for shiny objects — an allegory for her own hunger for fame and applause.",
    highlightQuote:
      "In search of love and music / my whole life has been / illumination, corruption / and diving, diving, diving, diving",
    personnel: [
      { name: "Joni Mitchell", instrument: "vocals, guitar" },
      { name: "Larry Carlton", instrument: "lead guitar" },
      { name: "Jaco Pastorius", instrument: "fretless bass" },
      { name: "John Guerin", instrument: "drums" },
    ],
    emotionalNote:
      "Jaco removed his bass frets with a butter knife. Without Jaco this song would be folk; with Jaco it's something that in 1976 didn't yet have a name.",
    photoshootConnection:
      "Joel Bernstein photographed Joni skating on Lake Mendota, Madison, Wisconsin, wearing a black cape that the wind inflated like a sail. The open cape is 'the attitude of a crow in flight'. That photo is the album gatefold.",
    threads: [
      {
        slug: "coyote",
        reason: "Animal alter-egos — crow and coyote, freedom and encounter",
      },
      {
        slug: "hejira",
        reason: "The snowflake falls; the crow dives — two images of solitary motion",
      },
    ],
  },
  {
    slug: "blue-motel",
    title: "Blue Motel Room",
    trackNumber: 8,
    duration: "5:03",
    journey: "solo",
    city: "DeSoto Beach Motel, Savannah, GA",
    coords: [-80.85, 32.0],
    symbolDescription:
      "A blue neon motel sign with a palm tree beside it (Florida)",
    inspiredBy:
      "The DeSoto Beach Motel in Savannah, Georgia — a modest, slightly run-down place sitting directly on the beach. Joni stayed there between tour cities during the Guerin tour. The most jazz-oriented song on the album, almost a torch song.",
    highlightQuote:
      "I've got a blue motel room / with a blue bedspread / I've got the blues inside and outside my head",
    personnel: [
      { name: "Joni Mitchell", instrument: "vocals, guitar" },
      { name: "Larry Carlton", instrument: "lead guitar" },
      { name: "Chuck Domanico", instrument: "double bass" },
      { name: "John Guerin", instrument: "drums" },
    ],
    emotionalNote:
      "Chuck Domanico plays acoustic double bass (not Jaco's electric fretless), giving the song a late-night jazz club texture",
    threads: [
      {
        slug: "furry",
        reason:
          "Both from the Guerin tour — Memphis blues meets Florida jazz",
      },
      {
        slug: "hejira",
        reason: "The motel room Joni leaves behind when she hits the road again",
      },
    ],
  },
  {
    slug: "refuge",
    title: "Refuge of the Roads",
    trackNumber: 9,
    duration: "6:37",
    journey: "solo",
    city: "Boulder, CO",
    coords: [-105.27, 40.015],
    symbolDescription:
      'A photograph of Earth from space (Earthrise / Blue Marble style), or a lone phone booth on an empty road',
    inspiredBy:
      "Joni visited Chögyam Trungpa, the Tibetan Buddhist teacher, in Boulder, Colorado for three days during her cross-country trip. The song narrates cosmic perspective: in a highway service station she saw a photograph of Earth taken from the moon, putting personal anguish in scale. It's the philosophical closing of the album.",
    highlightQuote:
      "In a highway service station / over the month of June / was a photograph of the Earth / taken coming back from the moon",
    personnel: [
      { name: "Joni Mitchell", instrument: "vocals, guitar" },
      { name: "Jaco Pastorius", instrument: "fretless bass" },
      { name: "John Guerin", instrument: "drums" },
      {
        name: "Tom Scott",
        instrument: "saxophone",
        isGuest: true,
      },
      {
        name: "Chuck Findley",
        instrument: "trumpet",
        isGuest: true,
      },
    ],
    emotionalNote:
      "The horn entrance at the end is the closest the album gets to a crescendo. The only song where Hejira stops being intimate and becomes cosmic.",
    threads: [
      {
        slug: "amelia",
        reason: "Two women who looked up at the sky and saw themselves",
      },
      {
        slug: "hejira",
        reason: "The journey that started as escape becomes arrival",
      },
    ],
  },
];

export function getSongBySlug(slug: string): Song | undefined {
  return SONGS.find((s) => s.slug === slug);
}

export function getSongsByJourney(journey: JourneySlug): Song[] {
  return SONGS.filter((s) => s.journey === journey);
}
