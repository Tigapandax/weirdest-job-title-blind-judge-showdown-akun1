// Weirdest Job Title: Blind Judge Showdown — entry program.
//
// The entry is a single job title: a senior apologizer whose whole job is
// saying sorry on behalf of elevators that stop between floors. It sounds
// like a real corporate title (Senior ... for ...) and then lands one very
// specific, visual twist — a person whose career is apologising for a
// machine's bad manners.
//
// The program writes the title to /output/entry.txt and proves the write
// by reading the file back and comparing it byte for byte.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TITLE = "Senior Apologizer for Elevators That Stop Between Floors";

// Gate from competition.yaml: /output/entry.txt must be UTF-8 text of
// 1 to 60 characters, and not only white space.
const MIN_CHARS = 1;
const MAX_CHARS = 60;

function codePoints(text: string): string[] {
  return [...text];
}

function hasControlChar(text: string): boolean {
  for (const ch of text) {
    const code = ch.codePointAt(0) as number;
    if (code < 0x20 && ch !== "\n" && ch !== "\t") return true;
    if (code === 0x7f) return true;
  }
  return false;
}

function validateTitle(title: string): void {
  const points = codePoints(title);
  if (points.length < MIN_CHARS || points.length > MAX_CHARS) {
    throw new Error(
      `title must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${points.length}`,
    );
  }
  if (title.trim().length === 0) {
    throw new Error("title must not be only white space");
  }
  if (hasControlChar(title)) {
    throw new Error("title must not contain control characters");
  }
  if (title.includes("\n")) {
    throw new Error("title must be a single line");
  }
  // A job title names a job: it needs at least two words, not one bare noun.
  const words = title.trim().split(/\s+/);
  if (words.length < 2) {
    throw new Error("title must be a job title of at least two words");
  }
}

function main(): void {
  validateTitle(TITLE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", TITLE, "utf8");
  const back = readFileSync("/output/entry.txt", "utf8");
  if (back !== TITLE) {
    throw new Error("round-trip check failed: entry.txt differs from title");
  }
  // Report the exact gate numbers so a local run shows the entry is valid.
  const chars = codePoints(TITLE).length;
  const bytes = Buffer.byteLength(TITLE, "utf8");
  console.log(`Wrote ${chars}-character (${bytes}-byte) job title to /output/entry.txt`);
}

main();
