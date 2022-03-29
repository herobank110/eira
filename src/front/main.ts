import { getMapsAPI } from "./mapsAPI";

main();

async function main() {
  getMapsAPI().then((maps) => {
    new maps.Map(document.getElementById("map-root"), {
      center: { lat: 51.4539, lng: 3.1694 },
      zoom: 3
    });
  });
}
