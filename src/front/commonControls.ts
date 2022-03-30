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
  const desc = `<p>${landmark.desc.replace("Fun fact - ", "</p><p>Fun fact - ")}</p>`;
  showDetailsPanel({ desc, title: landmark.name, thumb: landmark.thumb });
}
