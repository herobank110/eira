import $ from "jquery";
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
