import tippy, { followCursor, Instance as TippyInstance } from "tippy.js";
import { MarkerData } from "./locations";
import { getMapsAPI } from "./mapsAPI";

type MapsMarker = google.maps.Marker;
type MapsMouseEvent = { domEvent: MouseEvent };

let g_tooltip: TippyInstance | undefined;

export async function addMarker(map: google.maps.Map, data: MarkerData) {
  const mapsAPI = await getMapsAPI();
  const markerGUI = new mapsAPI.Marker({ map, position: data.position });
  registerMarkerInteraction(markerGUI, data);
}

function registerMarkerInteraction(gui: MapsMarker, data: MarkerData) {
  gui.addListener("click", () => console.log("click", data.name));
  gui.addListener("mouseover", (e: MapsMouseEvent) => {
    addTooltip(data.name, e.domEvent.clientX, e.domEvent.clientY);
  });
  gui.addListener("mouseout", removeTooltip);
}

function addTooltip(name: string, x: number, y: number) {
  const tooltip = tippy(document.body, {
    followCursor: true,
    content: getTooltipContent(name, false),
    allowHTML: true,
    plugins: [followCursor],
    showOnCreate: true,
    placement: "bottom",
    offset: [0, 20],
    arrow: false,
  });
  // for better UX let the user figure out they can click marker but show a hint after a delay
  setTimeout(() => tooltip.setContent(getTooltipContent(name, true)), 3000);

  // set initial position - required since adding to body it always puts at (0, 0)
  const el = document.getElementById("tippy-" + tooltip.id);
  setTimeout(() => {
    el.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }, 0);

  // save for destruction
  g_tooltip = tooltip;
}

function removeTooltip() {
  if (g_tooltip) {
    g_tooltip.hide();
    setTimeout(g_tooltip.destroy, 200);
    g_tooltip = undefined;
  }
}

function getTooltipContent(name: string, hint: boolean) {
  return `<span class="marker-tooltip">
  ${name}
  ${hint ? "<br><em>Click for details</em>" : ""}
  </span>`;
}
