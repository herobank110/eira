import { getMapsAPI } from "./mapsAPI";

main();

async function main() {
  const mapsAPI = await getMapsAPI();
  const map = new mapsAPI.Map(document.getElementById("map-root"), {
    center: { lat: 51.4539, lng: 3.1694 },
    zoom: 3,
  });

  ["lng", "lat", "zoom"].map((s) => {
    document.getElementById(s).onchange = () => {
      map.setCenter({
        lng: parseFloat(document.getElementById("lng").value),
        lat: parseFloat(document.getElementById("lat").value),
      });
      map.setZoom(parseFloat(document.getElementById("zoom").value));
    };
  });
}
