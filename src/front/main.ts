import { cardiff } from "./locations";
import { getMapsAPI } from "./mapsAPI";

import tippy, { followCursor } from "tippy.js";
import "tippy.js/dist/tippy.css";
setTimeout(() => {
  let a = tippy(document.body, {
    followCursor: true,
    content: "hello there",
    plugins: [followCursor],
    showOnCreate: true,
    placement: "bottom",
    offset: [0, 20],
    arrow: false,
  });
  const el = document.getElementById("tippy-" + a.id);
  setTimeout(() => {
    el.style.transform = "translate3d(100px, 100px, 0px)";
  }, 0);
}, 2000);

// main();

async function main() {
  const mapsAPI = await getMapsAPI();

  const map = new mapsAPI.Map(document.getElementById("map-root"), {
    center: cardiff.center,
    zoom: cardiff.zoom,
    mapId: "3f60a325ef504f09",
  });

  const marker = new mapsAPI.Marker({
    map,
    position: { lng: -3.1632, lat: 51.4648 },
  });
  marker.addListener("click", () => console.log("click"));
  marker.addListener("mouseover", () => console.log("mouseover"));
  marker.addListener("mouseout", () => console.log("mouseout"));
  const m2 = new mapsAPI.Marker({
    map,
    position: { lng: -3.18, lat: 51.4648 },
  });
  m2.addListener("click", () => console.log("click"));
  m2.addListener("mouseover", () => console.log("mouseover"));
  m2.addListener("mouseout", () => console.log("mouseout"));
}
