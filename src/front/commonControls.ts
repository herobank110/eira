import { cardiff, Landmark } from "./eiraAPI";
import { setMapView } from "./mapControls";

export function resetMapView() {
  setMapView(cardiff.center, cardiff.zoom);
}

export function travelToLandmark(landmark: Landmark) {
  setMapView(landmark.position, 13);
  // TODO: set details panel
}
