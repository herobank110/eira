import tippy, { followCursor, Instance as TippyInstance } from "tippy.js";

type MarkerType = google.maps.Marker;

let g_tooltip: TippyInstance | null = null;

export function registerMarkerInteraction(marker: MarkerType, name: string) {
  marker.addListener("click", () => console.log("click", name));

  marker.addListener("mouseover", (e: any) => {
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
    const [x, y] = [e.domEvent.clientX, e.domEvent.clientY];
    setTimeout(() => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
    }, 0);

    // save for destruction
    g_tooltip = tooltip;
  });

  marker.addListener("mouseout", () => {
    if (g_tooltip) {
      g_tooltip.hide();
      setTimeout(g_tooltip.destroy, 200);
    }
  });
}
function getTooltipContent(name: string, hint: boolean) {
  return `<span class="marker-tooltip">
  ${name}
  ${hint ? "<br><em>Click for details</em>" : ""}
  </span>`;
}
