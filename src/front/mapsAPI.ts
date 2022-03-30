import { Loader } from "@googlemaps/js-api-loader";

const apiKey = "AIzaSyBb5wFapnvB4Z1lN9OA1ruUW6eQ65YebmU";

export type MapsAPI = typeof google.maps;
let g_API: MapsAPI | undefined;

export async function getMapsAPI() {
  if (!g_API) {
    const loader = new Loader({ apiKey });
    try {
      g_API = (await loader.load()).maps;
    } catch (error) {
      console.error(`Failed to load maps API: ${error}`);
    }
  }
  return g_API;
}
