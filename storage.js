/*

storage.js

The only file that touches entries.json. Exports two functions: one to read all entries,
one to write them back. Everything else in the app goes through these. If you ever swap JSON 
for a database, this is the only file that changes. That's the point of isolating it.

*/

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE_PATH = path.join(__dirname, 'entries.json');

export function readEntries() {
    if (!fs.existsSync(FILE_PATH)) {
        return [];
    }
    const raw = fs.readFileSync(FILE_PATH, 'utf-8');
    const parsed = JSON.parse(raw);
    
    return parsed
}

export function writeEntries(entries) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(entries, null, "\t"));
}