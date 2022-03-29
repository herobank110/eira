import { cardiff } from "./locations";
import { getMapsAPI } from "./mapsAPI";

main();

async function main() {
  const mapsAPI = await getMapsAPI();

  const map = new mapsAPI.Map(document.getElementById("map-root"), {
    center: cardiff.center,
    zoom: cardiff.zoom,
  });

  const marker = new mapsAPI.Marker({
    map,
    position: { lng: -3.1632, lat: 51.4648 },
  });
  marker.addListener("click", () => console.log("click"));
  marker.addListener("mouseover", () => console.log("mouseover"));
  marker.addListener("mouseout", () => console.log("mouseout"));
}
