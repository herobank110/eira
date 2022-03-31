import { Landmark } from "./eiraAPI";
import { getMapsAPI, MapsAPI } from "./mapsAPI";
import { travelToLandmark } from "./mapControls";
import {
  setGlobalTooltip,
  isValidTooltip,
  removeGlobalTooltip,
} from "./globalTooltip";

export async function addMarker(map: MapsAPI.Map, landmark: Landmark) {
  const mapsAPI = await getMapsAPI();
  const marker = new mapsAPI.Marker({ map, position: landmark.position });
  registerMarkerInteraction(marker, landmark);
}

function registerMarkerInteraction(marker: MapsAPI.Marker, landmark: Landmark) {
  marker.addListener("click", () => travelToLandmark(landmark));
  marker.addListener("mouseover", (e: MapsAPI.MapMouseEvent) =>
    showMarkerTooltip(e.domEvent as MouseEvent, landmark)
  );
  marker.addListener("mouseout", removeGlobalTooltip);
}

export function getTooltipContent(name: string, hint: boolean) {
  return `<span class="marker-tooltip">
  ${name}
  ${hint ? "<br><em>Click for details</em>" : ""}
  </span>`;
}

function showMarkerTooltip(event: MouseEvent, landmark: Landmark) {
  const tooltip = setGlobalTooltip(landmark.name, event.clientX, event.clientY);

  // for better UX let the user figure out they can click marker but show a hint after a delay
  setTimeout(() => {
    if (isValidTooltip(tooltip)) {
      tooltip.setContent(getTooltipContent(landmark.name, true));
    }
  }, 3000);
}
