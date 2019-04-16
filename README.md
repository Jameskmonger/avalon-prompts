# avalon-prompts

Generate prompts for the narration at the start of a "The Resistance: Avalon" game.

Written in TypeScript.

## Installation

```
npm install avalon-prompts
```

## Usage

### `getPrompts(characters) => string[]`

Get an array of strings for the narration. `characters` is an object with the following structure:

```typescript
interface Characters {
    percival?: boolean;
    mordred?: boolean;
    oberon?: boolean;
    morgana?: boolean;
}
```

Set the value to `true` to include that character in the game.

```typescript
getPrompts({ percival: true, oberon: true })
    // returns the narration for a game containing Percival and Oberon
```

## License

Licensed under the [MIT License](LICENSE).
