import { Offcanvas } from "mdb-ui-kit";

type DetailsPanelProps = {
  title: string;
  thumbnail: string;
  desc: string;
};

export function setDetails(props: DetailsPanelProps) {
  const el = document.getElementById("details-panel");

  // TODO: insert data

  const offcanvas = new Offcanvas(el);
  if (!offcanvas._isShown) {
    offcanvas.show();
  }
}
