import tippy, { followCursor, Instance as TippyInstance } from "tippy.js";
import { Landmark } from "./eiraAPI";
import { getMapsAPI, MapsAPI } from "./mapsAPI";
import { travelToLandmark } from "./mapControls";

let g_tooltip: TippyInstance | undefined;

export async function addMarker(map: MapsAPI.Map, landmark: Landmark) {
  const mapsAPI = await getMapsAPI();
  const marker = new mapsAPI.Marker({ map, position: landmark.position });
  registerMarkerInteraction(marker, landmark);
}

function registerMarkerInteraction(marker: MapsAPI.Marker, landmark: Landmark) {
  marker.addListener("click", () => travelToLandmark(landmark));
  marker.addListener("mouseover", (e: MapsAPI.MapMouseEvent) => {
    const domEvent = e.domEvent as MouseEvent;
    addTooltip(landmark.name, domEvent.clientX, domEvent.clientY);
  });
  marker.addListener("mouseout", removeTooltip);
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
  setTimeout(() => {
    // only if the tooltip is still active!
    if (g_tooltip === tooltip) {
      tooltip.setContent(getTooltipContent(name, true));
    }
  }, 3000);

  // set initial position - required since adding to body it always puts at (0, 0)
  const el = document.getElementById("tippy-" + tooltip.id);
  if (!el) throw new Error("Couldn't find tooltip element");
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
