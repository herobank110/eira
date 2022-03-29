import fsExtra from "fs-extra";
import path from "path";
import { REPO_ROOT } from "./constants.js";
import { exec } from "./utils.js";

const build = path.join(REPO_ROOT, "build");
const cache = path.join(build, "cache");
const prod = path.join(build, "prod");
const api = path.join(prod, "api");
const src = path.join(REPO_ROOT, "src");

exec(`parcel build --cache-dir="${cache}" --dist-dir="${prod}" --public-url=. ${src}/front/index.html`, { cwd: REPO_ROOT });

if (!fsExtra.existsSync(api)) {
    console.log('Creating API link');
    fsExtra.createSymlinkSync(path.join(src, "api"), api, "junction");
}
