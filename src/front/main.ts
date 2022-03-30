import $ from "jquery";
import { cardiff, getLandmarks } from "./eiraAPI";
import { getMapsAPI } from "./mapsAPI";
import { addMarker } from "./markerControl";

import "tippy.js/dist/tippy.css";
import "./eiraStyle.sass";

const el = $("#landmarks-list");
el.append(
  ...[1, 2, 3].map((i) =>
    $("<li>").append(
      $("<button>", {
        class: "dropdown-item",
        text: "Action " + i,
      }).on("click", () => console.log("hi", i))
    )
  )
);

$("#rss-url").text(window.location.origin + "/api/rss.php");

main();

async function main() {
  const mapsAPI = await getMapsAPI();

  const map = new mapsAPI.Map(document.getElementById("map-root"), {
    center: cardiff.center,
    zoom: cardiff.zoom,
    mapId: "3f60a325ef504f09",
    disableDefaultUI: true,
  });

  $("#buttton-reset").on("click", () => {
    map.setCenter(cardiff.center);
    map.setZoom(cardiff.zoom);
  });

  const landmarks = await getLandmarks();
  for (const landmark of landmarks) {
    addMarker(map, landmark);
  }
}
