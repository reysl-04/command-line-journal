import { readEntries, writeEntries } from "../storage.js";

export function add(text) {
    const cleanText = text?.trim()
    if (!cleanText) {
        console.error("Error: entry text can't be empty")
        process.exit(1)
    }

    const entries = readEntries();
    const entry = {
        id: Date.now(),
        date: new Date().toISOString(),
        text: text.trim()
    };

    entries.push(entry);
    writeEntries(entries);
    console.log(`Added entry [${entry.text}]`)
}
