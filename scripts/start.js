import { REPO_ROOT } from "./constants.js";
import { exec } from "./utils.js";

exec("parcel --cache-dir=build/cache --dist-dir=build/dev/front src/front/index.html", { cwd: REPO_ROOT });
