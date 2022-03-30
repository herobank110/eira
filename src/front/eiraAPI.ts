export const cardiff = { center: { lng: -3.18, lat: 51.48 }, zoom: 13 };

export type Landmark = {
  id: number;
  name: string;
  position: google.maps.LatLngLiteral;
  thumb: string;
  desc: string;
};

export async function getLandmarks() {
  try {
    return (await $.getJSON("api/landmarks.php")) as Landmark[];
  } catch (error) {
    console.error("Couldn't get landmarks", error);
  }
}
