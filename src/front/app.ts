import { cardiff, getLandmarks } from "./eiraAPI";
import { getMapsAPI, MapsMap } from "./mapsAPI";
import { addMarker } from "./markerControl";

export class EiraApp {
  private map: MapsMap;

  async begin() {
    this.map = await createMap();

    $("#buttton-reset").on("click", () => {
      this.map.setCenter(cardiff.center);
      this.map.setZoom(cardiff.zoom);
    });

    const landmarks = await getLandmarks();
    for (const landmark of landmarks) {
      addMarker(this.map, landmark);
    }

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
  }
}

async function createMap() {
  const mapsAPI = await getMapsAPI();
  return new mapsAPI.Map(document.getElementById("map-root"), {
    center: cardiff.center,
    zoom: cardiff.zoom,
    mapId: "3f60a325ef504f09",
    disableDefaultUI: true,
  });
}
