// post-x-promote-make-your-own-bounty-01: the entry is an X post, and this
// program's only job is to hand the post's address to the house. It copies
// POST.json from the repository root into /output, where the gate reads it.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
const DEST = join(OUTPUT_DIR, 'POST.json');
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), DEST);
} catch (err) {
  console.error(`could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Read the copied file back and validate it, so a truncated or malformed
// POST.json fails loudly here instead of reaching the gate.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(DEST, 'utf8'));
} catch (err) {
  console.error(`copied POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
const url = (parsed as { url?: unknown } | null)?.url;
if (typeof url !== 'string' || url.length === 0) {
  console.error('copied POST.json has no non-empty string "url" field');
  process.exit(1);
}
console.log(`POST.json copied to ${DEST} — post: ${url}`);
