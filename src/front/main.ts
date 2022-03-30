import { getLandmarks } from "./eiraAPI";
import { addMarker } from "./markerControl";
import { getOrCreateMap } from "./mapControls";

import "tippy.js/dist/tippy.css";
import "./eiraStyle.sass";
import { initGUI } from "./utils";

main();

async function main() {
  initGUI();
  const map = await getOrCreateMap();

  const landmarks = await getLandmarks();
  for (const landmark of landmarks) {
    addMarker(map, landmark);
  }
}
