import { cardiff, getLandmarks } from "./eiraAPI";
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
    disableDefaultUI: true,
  });

  const landmarks = await getLandmarks();
  for (const landmark of landmarks) {
    addMarker(map, landmark);
  }
}
