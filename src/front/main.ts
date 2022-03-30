import { cardiff, markers } from "./locations";
import { getMapsAPI } from "./mapsAPI";

import tippy, { followCursor } from "tippy.js";
import "tippy.js/dist/tippy.css";
// setTimeout(() => {
//   let a = tippy(document.body, {
//     followCursor: true,
//     content: "hello there",
//     plugins: [followCursor],
//     showOnCreate: true,
//     placement: "bottom",
//     offset: [0, 20],
//     arrow: false,
//   });
//   const el = document.getElementById("tippy-" + a.id);
//   setTimeout(() => {
//     el.style.transform = "translate3d(100px, 100px, 0px)";
//   }, 0);
// }, 2000);

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
    mapMarker.addListener("click", () => console.log("click", markerData.name));
    mapMarker.addListener("mouseover", (e) =>
      console.log("mouseover", markerData.name, e)
    );
    mapMarker.addListener("mouseout", () =>
      console.log("mouseout", markerData.name)
    );
  }
}
