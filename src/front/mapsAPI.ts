/** @file helpers for google maps API */

import { Loader } from "@googlemaps/js-api-loader";
import { googleMapsAPIKey } from "../../eiraConfig.json";

// namespace alias
var google = { maps: null };
// @ts-ignore
export import MapsAPI = google.maps;

let g_API: typeof MapsAPI | undefined;

export async function getMapsAPI() {
  if (!g_API) {
    const loader = new Loader({ apiKey: googleMapsAPIKey });
    try {
      g_API = (await loader.load()).maps;
    } catch (error) {
      console.error("Failed to load maps API");
      throw error;
    }
  }
  return g_API;
}
