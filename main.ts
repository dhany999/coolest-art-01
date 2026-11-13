// main.ts — make.fun coolest-art-01 entry (Node 22, standard library only).
// Copies entry.png (the elegant red-crowned crane in flight over misty water
// at dusk, beside this file) to the output directory the grader provides.
//
// The grader runs this program twice and compares the outputs, so it must
// write identical bytes every time: a plain copy does exactly that. The
// picture is a single PNG, 1024x683, under the 1 MiB gate.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outputDir, 'entry.png'));
