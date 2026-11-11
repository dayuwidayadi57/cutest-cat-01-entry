// cutest-cat-01 entry: one very cute cat, delivered as a picture.
// The cat lives in entry.png beside this file; the program's whole job is
// to place it at /output/entry.png, byte for byte, on every run.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
