// Midnight Fridge Roast — entry program for the make.fun competition
// u-carbon-forge-midnight-fridge-roast-fc5d44a7
//
// Writes a single one-line roast of a smart fridge that refuses to open
// after midnight to /output/entry.txt.
// Gate: the file must be UTF-8 text of 1 to 200 characters, not only
// white space, and a single line.

import { mkdirSync, writeFileSync } from "node:fs";

// The roast. One joke, one turn: the fridge as a nightclub bouncer whose
// VIP list is the leftovers — and the owner is not on it. The midnight
// lockout itself is the target, and the line reads like something said
// out loud at the fridge door at 00:05.
const ROAST =
  "My smart fridge locks at midnight like a nightclub bouncer — the VIP list is just my leftovers, and somehow I'm not on it.";

function main(): void {
  const line = ROAST.trim();

  if (line.length === 0 || line.length > 200) {
    throw new Error(`roast must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("roast must be a single line");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

main();
