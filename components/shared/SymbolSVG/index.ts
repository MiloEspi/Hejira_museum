import CoyoteSVG from "./CoyoteSVG";
import AmeliaPlaneSVG from "./AmeliaPlaneSVG";
import FurryGuitarSVG from "./FurryGuitarSVG";
import StrangeBoySVG from "./StrangeBoySVG";
import HejiraSnowflakeSVG from "./HejiraSnowflakeSVG";
import SharonDressSVG from "./SharonDressSVG";
import BlackCrowSVG from "./BlackCrowSVG";
import BlueMotelSVG from "./BlueMotelSVG";
import RefugeEarthSVG from "./RefugeEarthSVG";
import { ComponentType } from "react";

export const SYMBOL_MAP: Record<string, ComponentType<{ size?: number }>> = {
  coyote: CoyoteSVG,
  amelia: AmeliaPlaneSVG,
  furry: FurryGuitarSVG,
  "strange-boy": StrangeBoySVG,
  hejira: HejiraSnowflakeSVG,
  sharon: SharonDressSVG,
  "black-crow": BlackCrowSVG,
  "blue-motel": BlueMotelSVG,
  refuge: RefugeEarthSVG,
};

export {
  CoyoteSVG,
  AmeliaPlaneSVG,
  FurryGuitarSVG,
  StrangeBoySVG,
  HejiraSnowflakeSVG,
  SharonDressSVG,
  BlackCrowSVG,
  BlueMotelSVG,
  RefugeEarthSVG,
};
