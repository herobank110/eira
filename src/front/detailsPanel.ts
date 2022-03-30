import { Offcanvas } from "mdb-ui-kit";
import $ from "jquery";

type DetailsPanelProps = {
  title: string;
  thumb: string;
  desc: string;
};

export function setDetails(props: DetailsPanelProps) {
  const el = $("#details-panel");
  el.find(".offcanvas-title").text(props.title);
  el.find(".details-panel--thumb").css(
    "background-image",
    `url('${props.thumb}')`
  );
  el.find(".details-panel--desc").text(props.desc);

  const offcanvas = new Offcanvas(el[0]);
  offcanvas.show();
}
