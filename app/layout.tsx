import type { Metadata } from "next";
import {
  Italiana,
  IM_Fell_English,
  Cormorant_Garamond,
  Courier_Prime,
  Reenie_Beanie,
  Homemade_Apple,
} from "next/font/google";
import LenisProvider from "@/components/shared/LenisProvider";
import "@/styles/globals.css";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italiana",
  display: "swap",
});

const imFellEnglish = IM_Fell_English({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-im-fell-english",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const courierPrime = Courier_Prime({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-courier-prime",
  display: "swap",
});

const reenieBeanie = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-reenie-beanie",
  display: "swap",
});

const homemadeApple = Homemade_Apple({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-homemade-apple",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hejira — Running Away With Honor",
  description:
    "An interactive museum dedicated to Joni Mitchell's Hejira (1976). Nine songs, three journeys, one map — trace the emotional geography of a woman in motion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${italiana.variable} ${imFellEnglish.variable} ${cormorantGaramond.variable} ${courierPrime.variable} ${reenieBeanie.variable} ${homemadeApple.variable}`}
    >
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
