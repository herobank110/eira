import { Loader } from "@googlemaps/js-api-loader";

// const apiKey = "AIzaSyBb5wFapnvB4Z1lN9OA1ruUW6eQ65YebmU";
const apiKey = "ikashdkajshdajk";
let g_API: typeof google.maps | undefined = undefined;

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
