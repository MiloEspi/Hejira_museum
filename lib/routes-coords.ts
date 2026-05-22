import type { JourneySlug } from "./songs-data";

export interface RouteData {
  journey: JourneySlug;
  waypoints: [number, number][]; // [longitude, latitude]
}

export const ROUTES: RouteData[] = [
  {
    journey: "thunder",
    waypoints: [
      [-73.5, 45.5],
      [-71.0, 42.4],
      [-73.9, 40.7],
      [-74.0, 40.7],
      [-71.0, 42.4],
    ],
  },
  {
    journey: "guerin",
    waypoints: [
      [-118.2, 34.0],
      [-95.5, 29.7],
      [-90.0, 35.1],
      [-86.7, 36.1],
      [-90.0, 35.1],
    ],
  },
  {
    journey: "solo",
    waypoints: [
      [-69.0, 44.0],
      [-74.0, 40.7],
      [-79.0, 35.7],
      [-90.0, 35.1],
      [-94.5, 39.0],
      [-105.0, 39.7],
      [-115.0, 36.1],
      [-118.2, 34.0],
    ],
  },
];

export function getRouteByJourney(journey: JourneySlug): RouteData {
  const route = ROUTES.find((r) => r.journey === journey);
  if (!route) throw new Error(`Unknown route: ${journey}`);
  return route;
}
