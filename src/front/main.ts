import { getMapsAPI } from "./mapsAPI";

getMapsAPI().then((maps) => {
  console.log("maps:", maps);
});
    