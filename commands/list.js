import { readEntries } from "../storage.js";

export function list() {
    const entriesJSON = readEntries();

    if (entriesJSON.length === 0) {
        console.log('There are no entries');
    } else {
        for (let entry of entriesJSON) {
            const DATE = new Date(entry.date)
            console.log(DATE.toLocaleString('en-US', {
                year: 'numeric', 
                month: 'long', 
                day:'2-digit', 
                hour: '2-digit', 
                minute: '2-digit', 
            }));
            console.log(`Entry ID: ${entry.id}`)
            console.log(`\t${entry.text}\n`)
        }
    }
}