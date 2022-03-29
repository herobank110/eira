import child_process from "child_process";
import process from "process";

export function exec(command, options) {
    const proc = child_process.exec(command, options);
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
}