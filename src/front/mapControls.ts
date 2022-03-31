import $ from "jquery";
import { showDetailsPanel } from "./detailsPanel";
import { cardiff, Landmark } from "./eiraAPI";
import { getMapsAPI, MapsAPI } from "./mapsAPI";

type LatLng = MapsAPI.LatLngLiteral;

let g_map: MapsAPI.Map | undefined;

export async function getOrCreateMap() {
  if (!g_map) {
    const mapsAPI = await getMapsAPI();
    const map = new mapsAPI.Map($("#map-root")[0], {
      mapId: "3f60a325ef504f09",
      disableDefaultUI: true,
    });
    g_map = map;
  }
  return g_map;
}

export async function setMapView(center: LatLng, zoom: number) {
  const map = await getOrCreateMap();
  map.setCenter(center);
  map.setZoom(zoom);
}


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
