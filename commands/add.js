import { readEntry, writeEntry } from "storage.js";

export function add(text) {
    if (!text || text.trim() === '') {
        console.error("Error: entry text can't be empty")
        process.exit(1)
    }

    const entries = readEntry();
    const entry = {
        id: Date.name(),
        date: new Date().toISOString(),
        text: text.trim()
    };

    entries.push(entry);
    writeEntry(entries);
    console.log(`Added entry [${entry.id}]`)
}
