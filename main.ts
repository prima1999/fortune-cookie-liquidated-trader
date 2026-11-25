import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "Your lucky numbers are 0, 0, 0, and 0 — the exchange has already played them for you.";

const WORD_COUNT = FORTUNE.trim().split(/\s+/).length;

if (FORTUNE.length > 160 || WORD_COUNT > 20) {
  throw new Error("Fortune breaks the gate: too long or too many words.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
