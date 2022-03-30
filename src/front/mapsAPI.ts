/** @file helpers for google maps API */

import { Loader } from "@googlemaps/js-api-loader";

export type MapsAPI = typeof google.maps;
export type MapsMouseEvent = { domEvent: MouseEvent };
export type MapsMap = google.maps.Map;
export type MapsMarker = google.maps.Marker

const g_apiKey = "AIzaSyBb5wFapnvB4Z1lN9OA1ruUW6eQ65YebmU";
let g_API: MapsAPI | undefined;

export async function getMapsAPI() {
  if (!g_API) {
    const loader = new Loader({ apiKey: g_apiKey });
    try {
      g_API = (await loader.load()).maps;
    } catch (error) {
      console.error(`Failed to load maps API: ${error}`);
    }
  }
  return g_API;
}
