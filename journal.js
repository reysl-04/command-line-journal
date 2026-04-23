import { add } from "./commands/add";

const [,, command, ...args] = process.argv;

switch (command) {
    case 'add':
        add(args.join(' '));
        break;

    default:
        console.log(`Error: ${command} does not exist`);
        console.log(`Usage: node journal.js <add|list|delete> [args]`)
}
