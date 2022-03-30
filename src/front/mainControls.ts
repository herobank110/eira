import $ from "jquery";
import { cardiff, getLandmarks, Landmark } from "./eiraAPI";
import { getOrCreateMap, setMapView } from "./mapControls";
import { addMarker } from "./markerControl";

export async function initGUI() {
  bindReset();
  setRSSFeedURL();
  populateLandmarksList();

  const map = await getOrCreateMap();

  const landmarks = await getLandmarks();
  for (const landmark of landmarks) {
    addMarker(map, landmark);
  }
}

function bindReset() {
  $("#buttton-reset").on("click", () => {
    setMapView(cardiff.center, cardiff.zoom);
  });
}

function setRSSFeedURL() {
  $("#rss-url").text(window.location.origin + "/api/rss.php");
}

function populateLandmarksList() {
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
}

function travelToLandmark(landmark: Landmark) {
  setMapView(landmark.position, 13);
  // TODO: set details panel
}