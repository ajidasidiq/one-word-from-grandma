// One Word From Grandma — entry program.
//
// The single word my grandma would text about AI: "beepboop".
//
// Why this word, and not the obvious ones:
//   - "robot" / "AI" / "Alexa" are the first words anyone would send;
//     the judge rewards a fresh pick, so the obvious ones lose.
//   - "doohickey" is peak grandma voice, but it would fit any subject
//     at all — a toaster, a remote, a grandchild's haircut. This word
//     has to be about a machine.
//   - "witchcraft" is funny and baffled, but it is her verdict on AI,
//     not her voice. "beepboop" IS her voice: she has no idea how the
//     robot works, so she just imitates the noise it makes, the way
//     she would thumb-type it to a grandchild with a smile.
// Warm, a little baffled, funny with no caption needed, tied to
// robots in a way no other subject could be, and instantly readable.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "beepboop";

// Gate: /output/entry.txt must be UTF-8 text of 1-30 characters,
// exactly one word, and not only whitespace.
function validateEntry(word: string): void {
  if (word.length < 1 || word.length > 30) {
    throw new Error(`entry must be 1-30 characters, got ${word.length}`);
  }
  if (word.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (/\s/.test(word)) {
    throw new Error("entry must be exactly one word (no whitespace)");
  }
  if (/[\u0000-\u001f\u007f]/.test(word)) {
    throw new Error("entry must not contain control characters");
  }
}

validateEntry(WORD);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`wrote entry: ${WORD}`);
