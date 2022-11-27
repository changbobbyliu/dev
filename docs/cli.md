## Instruction

### Add New

1. Export `NSBin.TCommand` and add to `commands` in [bin/commands.ts](../bin/commands.ts)
2. Add command name in `options` in [bin/commands.ts](../bin/commands.ts)

## Enquire

### [Built-in prompt types](https://www.npmjs.com/package/enquirer#built-in-prompts)

- input
- password -> display stars
- confirm -> boolean
- numeral

## UI libs

- boxen

## Tips

### ts-node namespace

use namespace in .d.ts. Ref: https://stackoverflow.com/a/65564218

```json
// tsconfig.json
"ts-node": {
    "files": true
},
```
