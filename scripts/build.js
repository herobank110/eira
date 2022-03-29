import { REPO_ROOT } from "./constants";
import { exec } from "./utils";

exec("parcel build --cache-dir=build/cache --dist-dir=build/front --public-url=. src/front/index.html", { cwd: REPO_ROOT });
