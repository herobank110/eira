/** @file API wrapper of project eira backend */

import $ from "jquery";
import { MapsAPI } from "./mapsAPI";

export const cardiff = { center: { lng: -3.18, lat: 51.48 }, zoom: 13 };

export type Landmark = {
  id: number;
  name: string;
  position: MapsAPI.LatLngLiteral;
  thumb: string;
  desc: string;
};

export async function getLandmarks() {
  try {
    return (await $.getJSON("api/landmarks.php")) as Landmark[];
  } catch (error) {
    console.error("Couldn't get landmarks");
    throw error;
  }
}
