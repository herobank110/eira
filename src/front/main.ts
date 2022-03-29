import { cardiff } from "./locations";
import { getMapsAPI } from "./mapsAPI";

import tippy, { followCursor } from "tippy.js";
import "tippy.js/dist/tippy.css"; // optional for styling
setTimeout(() => {
  const el = document.createElement("div");
  el.style.position = "absolute";
  el.style.top = "200px";
  el.style.left = "200px";
  el.style.width = "20px";
  el.style.height = "20px";
  el.style.background = "red";
  document.body.append(el);
  let a = tippy(el, {
    followCursor: true,
    content: "hello there",
    plugins: [followCursor],
    showOnCreate: true,
  });
  // const el = document.getElementById("tippy-" + a.id);
  // setTimeout(() => {
  // el.style.transform = "translate3d(100px, 100px, 0px)"
  // }, 0)

  console.log(el);
  // console.log('di', el.getBoundingClientRect());
  // setTimeout(a.destroy, 2000);
}, 2000);
//   console.log("tooltip", a);
// });

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
