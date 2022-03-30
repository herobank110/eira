import $ from "jquery";
import { cardiff, getLandmarks } from "./eiraAPI";
import { addMarker } from "./markerControl";
import { getOrCreateMap } from "./mapControls";

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
  const map = await getOrCreateMap();

  $("#buttton-reset").on("click", () => {
  });

  const landmarks = await getLandmarks();
  for (const landmark of landmarks) {
    addMarker(map, landmark);
  }
}

