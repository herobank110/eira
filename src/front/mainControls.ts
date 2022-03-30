import $ from "jquery";
import { resetMapView, travelToLandmark } from "./commonControls";
import { getLandmarks, Landmark } from "./eiraAPI";
import { getOrCreateMap } from "./mapControls";
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
  resetMapView();
  for (const landmark of landmarks) {
    addMarker(map, landmark);
  }
}

function bindButtonReset() {
  $("#buttton-reset").on("click", resetMapView);
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
