// Funniest Autocorrect Fail — entry r1
// One line, one slip: dinner became divorce. Writes it to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I meant to text 'see you at dinner' but my phone sent 'see you at the divorce' and my wife hasn't replied in three hours.";

// The entry is a single line, so the whole program is one write.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, LINE, "utf8");
