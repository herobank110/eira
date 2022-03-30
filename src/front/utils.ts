import $ from "jquery";
import { cardiff, Landmark } from "./eiraAPI";
import { setMapView } from "./mapControls";

export function travelToLandmark(landmark: Landmark) {
  setMapView(landmark.position, 13);
  // TODO: set details panel
}

export function initGUI() {
  bindReset();
  setRSSFeedURL();
  populateLandmarksList();
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
