import { cardiff } from "./locations";
import { getMapsAPI } from "./mapsAPI";

main();

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
