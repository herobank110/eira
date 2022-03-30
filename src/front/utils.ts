import { Landmark } from "./eiraAPI";
import { setMapCenter } from "./mapControls";

export function travelToLandmark(landmark: Landmark) {
  setMapCenter(landmark.position, 13);
  // TODO: set details panel
}
