/** @file helpers for google maps API */

import { Loader } from "@googlemaps/js-api-loader";

// namespace alias
export import MapsAPI = google.maps;

const g_apiKey = "AIzaSyBb5wFapnvB4Z1lN9OA1ruUW6eQ65YebmU";
let g_API: typeof MapsAPI | undefined;

export async function getMapsAPI() {
  if (!g_API) {
    const loader = new Loader({ apiKey: g_apiKey });
    try {
      g_API = (await loader.load()).maps;
    } catch (error) {
      console.error("Failed to load maps API");
      throw error;
    }
  }
  return g_API;
}
