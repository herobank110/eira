import { cardiff, markers } from "./locations";
import { getMapsAPI } from "./mapsAPI";

import tippy, { followCursor, Instance as TippyInstance } from "tippy.js";
import "tippy.js/dist/tippy.css";

import "./eiraStyle.sass";

// setTimeout(() => {
//   let a = tippy(document.body, {
//     followCursor: true,
//     content: "hello there",
//     plugins: [followCursor],
//     showOnCreate: true,
//     placement: "bottom",
//     offset: [0, 20],
//     arrow: false,
//   });
//   const el = document.getElementById("tippy-" + a.id);
//   setTimeout(() => {
//     el.style.transform = "translate3d(100px, 100px, 0px)";
//   }, 0);
// }, 2000);

main();

async function main() {
  const mapsAPI = await getMapsAPI();

  const map = new mapsAPI.Map(document.getElementById("map-root"), {
    center: cardiff.center,
    zoom: cardiff.zoom,
    mapId: "3f60a325ef504f09",
  });

  for (const markerData of markers) {
    const mapMarker = new mapsAPI.Marker({
      map,
      position: markerData.position,
    });
    mapMarker.addListener("click", () => console.log("click", markerData.name));

    let lastTooltip: TippyInstance | null = null;

    mapMarker.addListener("mouseover", (e: any) => {
      const tooltip = tippy(document.body, {
        followCursor: true,
        content: `<span class="marker-tooltip">${markerData.name}</span>`,
        allowHTML: true,
        plugins: [followCursor],
        showOnCreate: true,
        placement: "bottom",
        offset: [0, 20],
        arrow: false,
      });
      // for better UX let the user figure out they can click marker but show a hint after a delay
      setTimeout(() => {
        tooltip.setContent(
          `<span class="marker-tooltip">${markerData.name}<br><em>Click for details</em></span>`
        );
      }, 3000);

      // set initial position - required since adding to body it always puts at (0, 0)
      const el = document.getElementById("tippy-" + tooltip.id);
      const [x, y] = [e.domEvent.clientX, e.domEvent.clientY];
      setTimeout(() => {
        el.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
      }, 0);

      // save for destruction
      lastTooltip = tooltip;
    });
    mapMarker.addListener("mouseout", () => {
      if (lastTooltip) {
        lastTooltip.hide();
        setTimeout(lastTooltip.destroy, 200);
      }
    });
  }
}
