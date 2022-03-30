import $ from "jquery";
import { cardiff } from "./eiraAPI";
import { getMapsAPI, MapsMap } from "./mapsAPI";

let g_map: MapsMap | undefined;

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

export async function setMapCenter() {
  // TODO:
}