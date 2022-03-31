import tippy, { followCursor, Instance as TippyInstance } from "tippy.js";

export let g_tooltip: TippyInstance | undefined;

/** Create a tooltip visible over the whole document body. */
export function setGlobalTooltip(content: string, x: number, y: number) {
  const tooltip = tippy(document.body, {
    followCursor: true,
    content,
    allowHTML: true,
    plugins: [followCursor],
    showOnCreate: true,
    placement: "bottom",
    offset: [0, 20],
    arrow: false,
  });

  // set initial position - required since adding to body it always puts at (0, 0)
  const el = document.getElementById("tippy-" + tooltip.id);
  if (!el) throw new Error("Couldn't find tooltip element");
  setTimeout(() => {
    el.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }, 0);

  // save for destruction
  g_tooltip = tooltip;
  return tooltip;
}

export function removeGlobalTooltip() {
  if (g_tooltip) {
    g_tooltip.hide();
    setTimeout(g_tooltip.destroy, 200);
    // immediately null to prevent double delete
    g_tooltip = undefined;
  }
}

export function isValidTooltip(tooltip: TippyInstance) {
  return g_tooltip === tooltip;
}
