# Journal CLI
A command-line tool to add, list, and delete journal entries. Entries are stored locally in a JSON file.

## Requirements
- Node.js 18 or higher

## Usage

```bash
node journal.js add "Today I learned about process.argv"
node journal.js list
node journal.js delete 1714123456789
```

## Limitations
- `delete` only accepts a single ID. Any additional arguments are ignored.
- Entries cannot be edited after creation. To modify an entry, open the `entries.json` file directly.
- The `entries.json` file is created in the script directory. Moving the script elsewhere will create a new empty file rather than carry the existing entries over.
- `list` has no filter or sort options.

## Why this exists
Built as a warm-up project to practice shell, Node's `fs` module, and argv parsing without the noise of HTTP or a framework.