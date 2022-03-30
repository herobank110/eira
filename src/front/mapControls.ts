import $ from "jquery";
import { cardiff, Landmark } from "./eiraAPI";
import { getMapsAPI, MapsAPI } from "./mapsAPI";

type LatLng = MapsAPI.LatLngLiteral;

let g_map: MapsAPI.Map | undefined;

export async function getOrCreateMap() {
  if (!g_map) {
    const mapsAPI = await getMapsAPI();
    const map = new mapsAPI.Map($("#map-root")[0], {
      center: cardiff.center,
      zoom: cardiff.zoom,
      mapId: "3f60a325ef504f09",
      disableDefaultUI: true,
    });
    g_map = map;
  }
  return g_map;
}

export async function setMapCenter(center: LatLng, zoom: number) {
  const map = await getOrCreateMap();
  map.setCenter(center);
  map.setZoom(zoom);
}

export function travelToLandmark(landmark: Landmark) {
  setMapCenter(landmark.position, 13);
}
