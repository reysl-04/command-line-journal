/*

storage.js

The only file that touches entries.json. Exports two functions: one to read all entries,
one to write them back. Everything else in the app goes through these. If you ever swap JSON 
for a database, this is the only file that changes. That's the point of isolating it.

*/

import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const FILE_PATH = path.join(__dirname, 'entries.json');

export function readEntry() {
    if (!existsSync(FILE_PATH)) {
        return [];
    }
    const raw = await fs.readFile(FILE_PATH, 'utf-8')
    const parsed = JSON.parsed(raw)
    
    return parsed
}

export function writeEntry(entries) {
    fs.writeFile(FILE_PATH, JSON.stringify(entries));
}