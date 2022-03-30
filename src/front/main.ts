import { cardiff, markers } from "./locations";
import { getMapsAPI } from "./mapsAPI";
import { registerMarkerInteraction } from "./markerControl";

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
    const mapMarker = new mapsAPI.Marker({
      map,
      position: markerData.position,
    });
    registerMarkerInteraction(mapMarker, markerData.name);
  }
}
