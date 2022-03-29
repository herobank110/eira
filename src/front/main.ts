import { cardiff } from "./locations";
import { getMapsAPI } from "./mapsAPI";

main();

async function main() {
  const mapsAPI = await getMapsAPI();
  const map = new mapsAPI.Map(document.getElementById("map-root"), {
    center: cardiff.center,
    zoom: cardiff.zoom,
  });
}
