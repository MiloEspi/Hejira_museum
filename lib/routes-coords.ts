import type { JourneySlug } from "./songs-data";

export interface RouteData {
  journey: JourneySlug;
  waypoints: [number, number][]; // [longitude, latitude]
}

export const ROUTES: RouteData[] = [
  {
    // Rolling Thunder Revue (oct-dic 1975)
    // Montreal → Boston → Hartford → NYC → Philadelphia → NYC → Boston → Portland ME → Southern NH
    journey: "thunder",
    waypoints: [
      [-73.57, 45.50],   // Montreal
      [-71.80, 44.30],   // through Vermont
      [-71.06, 42.36],   // Boston
      [-72.68, 41.76],   // Hartford
      [-72.92, 41.30],   // New Haven
      [-73.94, 40.71],   // NYC
      [-75.16, 39.95],   // Philadelphia
      [-74.00, 40.71],   // back to NYC
      [-71.06, 42.36],   // back to Boston
      [-70.26, 43.66],   // Portland ME
      [-71.50, 43.20],   // Southern NH
    ],
  },
  {
    // Gira cancelada con Guerin (feb 1976)
    // LA → Las Vegas → Phoenix → Albuquerque → Austin → Houston → New Orleans → Memphis → Nashville
    journey: "guerin",
    waypoints: [
      [-118.24, 34.05],  // Los Angeles
      [-115.14, 36.17],  // Las Vegas
      [-112.07, 33.45],  // Phoenix
      [-106.65, 35.08],  // Albuquerque
      [-97.74, 30.27],   // Austin
      [-95.37, 29.76],   // Houston
      [-90.07, 29.95],   // New Orleans
      [-90.05, 35.14],   // Memphis
      [-86.78, 36.16],   // Nashville (tour cut short here)
    ],
  },
  {
    // Cross-country solo (marzo 1976)
    // Damariscotta ME → Portland → Boston → NYC → Staten Island → Philadelphia → DC → Roanoke →
    // Savannah → Tampa → Panhandle FL → New Orleans → Houston → Austin → Lubbock →
    // Boulder CO → Arizona → Las Vegas → LA
    journey: "solo",
    waypoints: [
      [-69.52, 44.03],   // Damariscotta, ME
      [-70.26, 43.66],   // Portland, ME
      [-71.06, 42.36],   // Boston
      [-73.94, 40.71],   // NYC
      [-74.12, 40.63],   // Staten Island (Mandolin Brothers)
      [-75.16, 39.95],   // Philadelphia
      [-77.04, 38.90],   // Washington DC
      [-79.94, 37.27],   // Roanoke, VA
      [-80.85, 32.00],   // Savannah, GA (DeSoto Beach Motel)
      [-82.46, 27.95],   // Tampa
      [-85.66, 30.44],   // Panama City / FL Panhandle
      [-90.07, 29.95],   // New Orleans
      [-95.37, 29.76],   // Houston
      [-97.74, 30.27],   // Austin
      [-101.85, 33.58],  // Lubbock, TX
      [-105.27, 40.02],  // Boulder, CO (Trungpa)
      [-111.00, 35.00],  // Arizona (Amelia's vapor trails)
      [-115.14, 36.17],  // Las Vegas
      [-118.24, 34.05],  // Los Angeles
    ],
  },
];

export function getRouteByJourney(journey: JourneySlug): RouteData {
  const route = ROUTES.find((r) => r.journey === journey);
  if (!route) throw new Error(`Unknown route: ${journey}`);
  return route;
}
