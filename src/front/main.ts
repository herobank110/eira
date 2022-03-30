import { cardiff, markers } from "./locations";
import { getMapsAPI } from "./mapsAPI";
import { addMarker } from "./markerControl";

import "tippy.js/dist/tippy.css";
import "./eiraStyle.sass";

main();

async function main() {
  const mapsAPI = await getMapsAPI();

  const map = new mapsAPI.Map(document.getElementById("map-root"), {
    center: cardiff.center,
    zoom: cardiff.zoom,
    mapId: "3f60a325ef504f09",
  });

  for (const markerData of markers) {
    addMarker(map, markerData);
  }
}
