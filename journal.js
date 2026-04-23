import { add } from "./commands/add.js";
import { list } from "./commands/list.js";
import { deleteEntry } from "./commands/delete.js";

const [,, command, ...args] = process.argv;

switch (command) {
    case 'add':
        add(args.join(' '));
        break;

    case 'list':
        list();
        break;

    case 'delete':
        deleteEntry(args[0]);
        break;

    default:
        console.log(`Error: ${command} does not exist`);
        console.log(`Usage: node journal.js <add|list|delete> [args]`)
}
