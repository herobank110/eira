export const cardiff = { center: { lng: -3.18, lat: 51.48 }, zoom: 13 };

export type MarkerData = {
  name: string;
  position: google.maps.LatLngLiteral;
};

export const markers: MarkerData[] = [
  {
    name: "Cardiff Bay",
    position: { lat: 51.4539, lng: -3.1694 },
  },
  {
    name: "Roath Park",
    position: { lat: 51.5077, lng: -3.1739 },
  },
  {
    name: "Cardiff Castle",
    position: { lat: 51.4822, lng: -3.1812 },
  },
  {
    name: "St David's Shopping Centre",
    position: { lat: 51.4807, lng: -3.1752 },
  },
  {
    name: "Principality Stadium",
    position: { lat: 51.4782, lng: -3.1826 },
  },
  {
    name: "Wales Millennium Stadium",
    position: { lat: 51.4648, lng: -3.1632 },
  },
];
