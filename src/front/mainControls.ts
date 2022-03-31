import $ from "jquery";
import { getLandmarks, Landmark } from "./eiraAPI";
import { getOrCreateMap, resetMapView, travelToLandmark } from "./mapControls";
import { MapsAPI } from "./mapsAPI";
import { addMarker } from "./markerControl";

export async function startApp() {
  const [map, landmarks] = await Promise.all([
    getOrCreateMap(), // setup google maps widget
    getLandmarks(), // fetch our landmarks
  ]);
  initMap(map, landmarks);
  initNavbar(landmarks);
}

function initMap(map: MapsAPI.Map, landmarks: Landmark[]) {
  resetMapView();
  for (const landmark of landmarks) {
    addMarker(map, landmark);
  }
}

function initNavbar(landmarks: Landmark[]) {
  bindButtonReset();
  populateLandmarksList(landmarks);
  setRSSFeedURL();
}

function bindButtonReset() {
  $("#button-reset").on("click", resetMapView);
}

function setRSSFeedURL() {
  $("#rss-url").text(window.location.origin + "/api/rss.php");
}

function populateLandmarksList(landmarks: Landmark[]) {
  const el = $("#landmarks-list");
  el.append(
    ...landmarks.map((i) =>
      $("<li>").append(
        $("<button>", {
          class: "dropdown-item",
          text: i.name,
        }).on("click", () => travelToLandmark(i))
      )
    )
  );
}
