import { readEntries } from "../storage.js";

const DATE_FORMAT = {
                year: 'numeric', 
                month: 'long', 
                day:'2-digit', 
                hour: '2-digit', 
                minute: '2-digit', 
            }

export function list() {
    const entriesJSON = readEntries();

    if (entriesJSON.length === 0) {
        console.log('There are no entries');
    } else {
        for (const entry of entriesJSON) {
            const date = new Date(entry.date);
            console.log(date.toLocaleString('en-US', DATE_FORMAT));
            console.log(`Entry ID: ${entry.id}`);
            console.log(`\t${entry.text}\n`);
        }
    }
}