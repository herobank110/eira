import $ from "jquery";
import { cardiff, getLandmarks, Landmark } from "./eiraAPI";
import { getOrCreateMap, setMapView } from "./mapControls";
import { addMarker } from "./markerControl";

export async function initGUI() {
  const [map, landmarks] = await Promise.all([
    getOrCreateMap(), // setup google maps widget
    getLandmarks(), // fetch our landmarks
  ]);

  // navbar controls
  bindButtonReset();
  populateLandmarksList(landmarks);
  setRSSFeedURL();

  // prepare map for use
  for (const landmark of landmarks) {
    addMarker(map, landmark);
  }
}

function bindButtonReset() {
  $("#buttton-reset").on("click", () => {
    setMapView(cardiff.center, cardiff.zoom);
  });
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

function travelToLandmark(landmark: Landmark) {
  setMapView(landmark.position, 13);
  // TODO: set details panel
}
