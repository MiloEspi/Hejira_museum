import type { JourneySlug } from "./songs-data";

export interface RouteData {
  journey: JourneySlug;
  waypoints: [number, number][]; // [longitude, latitude]
  cities: string[]; // city name for each waypoint (same order)
}

export const ROUTES: RouteData[] = [
  {
    journey: "thunder",
    waypoints: [
      [-73.57, 45.50],
      [-71.80, 44.30],
      [-71.06, 42.36],
      [-72.68, 41.76],
      [-72.92, 41.30],
      [-73.94, 40.71],
      [-75.16, 39.95],
      [-74.00, 40.71],
      [-71.06, 42.36],
      [-70.26, 43.66],
      [-71.50, 43.20],
    ],
    cities: [
      "Montréal, QC",
      "Vermont",
      "Boston, MA",
      "Hartford, CT",
      "New Haven, CT",
      "New York City, NY",
      "Philadelphia, PA",
      "New York City, NY",
      "Boston, MA",
      "Portland, ME",
      "Southern NH",
    ],
  },
  {
    journey: "guerin",
    waypoints: [
      [-118.24, 34.05],
      [-115.14, 36.17],
      [-112.07, 33.45],
      [-106.65, 35.08],
      [-97.74, 30.27],
      [-95.37, 29.76],
      [-90.07, 29.95],
      [-90.05, 35.14],
      [-86.78, 36.16],
    ],
    cities: [
      "Los Angeles, CA",
      "Las Vegas, NV",
      "Phoenix, AZ",
      "Albuquerque, NM",
      "Austin, TX",
      "Houston, TX",
      "New Orleans, LA",
      "Memphis, TN",
      "Nashville, TN",
    ],
  },
  {
    journey: "solo",
    waypoints: [
      [-69.52, 44.03],
      [-70.26, 43.66],
      [-71.06, 42.36],
      [-73.94, 40.71],
      [-74.12, 40.63],
      [-75.16, 39.95],
      [-77.04, 38.90],
      [-79.94, 37.27],
      [-80.85, 32.00],
      [-82.46, 27.95],
      [-85.66, 30.44],
      [-90.07, 29.95],
      [-95.37, 29.76],
      [-97.74, 30.27],
      [-101.85, 33.58],
      [-105.27, 40.02],
      [-111.00, 35.00],
      [-115.14, 36.17],
      [-118.24, 34.05],
    ],
    cities: [
      "Damariscotta, ME",
      "Portland, ME",
      "Boston, MA",
      "New York City, NY",
      "Staten Island, NY",
      "Philadelphia, PA",
      "Washington DC",
      "Roanoke, VA",
      "Savannah, GA",
      "Tampa, FL",
      "Panama City, FL",
      "New Orleans, LA",
      "Houston, TX",
      "Austin, TX",
      "Lubbock, TX",
      "Boulder, CO",
      "Arizona",
      "Las Vegas, NV",
      "Los Angeles, CA",
    ],
  },
];

export function getRouteByJourney(journey: JourneySlug): RouteData {
  const route = ROUTES.find((r) => r.journey === journey);
  if (!route) throw new Error(`Unknown route: ${journey}`);
  return route;
}
