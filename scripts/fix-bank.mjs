// scripts/fix-bank.mjs
// Usage:  node scripts/fix-bank.mjs
// Rewrites data/questionBank/parabola.js in place. Commit first so you can diff/undo.

import fs from "node:fs";

const PATH = "data/questionBank/parabola.js";
let s = fs.readFileSync(PATH, "utf8");

// ---- 1. spacing: inline centering -> class="eq" ----
const before1 =
  (s.match(/style="text-align:center;margin-bottom:12px"/g) || []).length +
  (s.match(/style="text-align:center"/g) || []).length;
s = s
  .replace(/<p style="text-align:center;margin-bottom:12px">/g, '<p class="eq">')
  .replace(/<p style="text-align:center">/g, '<p class="eq">');

// ---- 2 & 3: per-entry fixes ----
// Split the file into entries at each `{ id: "..."` so edits stay inside one entry.
const entryRe = /\n(\s*)\{\s*\n\s*id: "[^"]+"[\s\S]*?(?=\n\s*\{\s*\n\s*id: "|\n\];)/g;
let filled = 0, fielded = 0;

s = s.replace(entryRe, (block, indent) => {
  const ind = indent + "  ";

  // 2. fill answer from the correct choice
  if (/answer: ""/.test(block)) {
    const m = block.match(/mc-choice correct">\s*<span class="mc-label">([A-D])<\/span>/);
    if (m) { block = block.replace('answer: ""', `answer: "${m[1]}"`); filled++; }
  }

  // 3. add any missing standard fields (inserted after questionType)
  let add = "";
  if (!/\n\s*difficulty:/.test(block)) add += `${ind}difficulty: 2,\n`;
  if (!/\n\s*tags:/.test(block)) add += `${ind}tags: [],\n`;
  if (!/\n\s*steps:/.test(block)) add += `${ind}steps: [],\n`;
  if (!/\n\s*screenshot:/.test(block)) add += `${ind}screenshot: "",\n`;
  if (!/\n\s*videoId:/.test(block)) add += `${ind}videoId: "",\n`;
  if (add) {
    block = block.replace(/(\n\s*questionType: "[A-Z]+",\n)/, (_, line) => line + add);
    fielded++;
  }
  return block;
});

fs.writeFileSync(PATH, s);
console.log(`centering tags reclassed: ${before1}`);
console.log(`answers filled from correct class: ${filled}`);
console.log(`entries given missing fields: ${fielded}`);
