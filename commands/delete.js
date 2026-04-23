import { readEntries, writeEntries } from "../storage.js";

export function deleteEntry(id) {
    if (!id) {
        console.error('No Entry ID provided');
        process.exit(1);
    }

    const entries = readEntries();
    const parsedID = Number(id);

    const newEntries = entries.filter(entry => {
        return entry.id !== parsedID;
    });

    if (entries.length === newEntries.length) {
        console.error('Entry ID not found');
        process.exit(1);

    } else {
        writeEntries(newEntries);
        console.log(`Removed entry ${id}`);
    }
}