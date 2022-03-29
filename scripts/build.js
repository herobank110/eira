import { REPO_ROOT } from "./constants.js";
import { exec } from "./utils.js";

exec("parcel build --cache-dir=build/cache --dist-dir=build/front --public-url=. src/front/index.html", { cwd: REPO_ROOT });
