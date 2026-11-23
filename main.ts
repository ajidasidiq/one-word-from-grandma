// One Word From Grandma — entry program.
//
// The single word my grandma would text about AI: "beepboop".
// She has no idea how the robot works, so she just imitates the
// noise it makes. Warm, baffled, and unmistakably about a machine.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "beepboop";

// The gate wants 1-30 UTF-8 characters, one word, not only whitespace.
if (WORD.length < 1 || WORD.length > 30) {
  throw new Error(`entry must be 1-30 characters, got ${WORD.length}`);
}
if (/\s/.test(WORD)) {
  throw new Error("entry must be exactly one word (no whitespace)");
}
if (WORD.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`wrote entry: ${WORD}`);
