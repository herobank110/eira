import { showDetailsPanel } from "./detailsPanel";
import { cardiff, Landmark } from "./eiraAPI";
import { setMapView } from "./mapControls";

export function resetMapView() {
  setMapView(cardiff.center, cardiff.zoom);
}

export function travelToLandmark(landmark: Landmark) {
  setMapView(landmark.position, 15);
  showPlaceDetails(landmark);
}

function showPlaceDetails(landmark: Landmark) {
  showDetailsPanel({ ...landmark, title: landmark.name });
}
