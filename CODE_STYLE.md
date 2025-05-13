# Code style

In order to make the source code readable, try to fit to these guidelines:

# Table of contents

1. [Naming variables](#1-naming-variables)
2. [Writing scripts](#2-writing-scripts)
3. [Type checking] (#3-type-checking)

## 1. Naming variables

- Names should describe what the purpose of the variable is.

```js
// Do this
items.forEach((item) => {
  //...
});

// Don't do this
items.forEach((e) => {
  //...
});
```

- Variables should be initialized using `let` and named using camelCase:

```js
let sandStack = Item.of("minecraft:sand", 64);
```

- Constants should be initialized using `const` and named using either camelCase or SCREAMING_SNAKE_CASE:

```js
const incompleteTransitionalCircuit = "createastral:incomplete_transitional_electronic_circuit";
const BUCKET = 81000;
```

- Functions should be named using camelCase:

```js
function itemCount(itemName, count) {
  // ...
}
```

## 2. Writing Scripts

- Wrap every script inside an Immediately Invoked Function Expression ([IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)). This ensures no variables leak into global scope unless you really intend to by assigning to the `global` object:

```js
// Example of an IIFE
(function () {
  const private = "I'm not global and thus accessible only in this script!";
  global.globalString = "I'm global and thus accessible in every script!";
})()(
  // IIFEs can be named

  function myScript() {
    // ...
  }
)();
```

- For long lists of recipes, use an array of objects. Do not use arrays of arrays (tuples), as they are harder to document with JSDoc.

```js
// Do this
const hauntingRecipes = [
  {
    input: "naturalist:snail_shell",
    output: "minecraft:nautilus_shell",
  },
  // ...
];

hauntingRecipes.forEach((recipe) => {
  // ...
});
```

```js
// Don't do this
const hauntingRecipes = [
  ["naturalist:snail_shell", "minecraft:nautilus_shell"],
  // ...
];

hauntingRecipes.forEach((recipe) => {
  // ...
});
```

- For stacks of multiple items, prefer using `Item.of(item, count)` instead of `${count}x ${item}`, especially when you are dynamically creating the stacks. This makes it easier to type-check the source code against ProbeJS types.

```js
// Encouraged
{
  input: Item.of("techreborn:coal_dust", 2),
  output: "techreborn:coal_dust",
},
// Discouraged
{
  input: "2x minecraft:charcoal",
  output: "minecraft:coal",
},
```

- Use template literals instead of string concatenation whenever possible.
  This allows for type-checking all possible variants of a template literal against ProbeJS types.

```js
// TypeScript is able to type-check JavaScript code with JSDoc annotations.
// This one tells TypeScript that the array won't ever change, so each result can be type-checked.
const gems = /** @type {const} */ (["peridot", "red_garnet", "ruby", "sapphire", "yellow_garnet"]);
// Do this
gems.forEach((gem) => {
  HIDDEN_ITEMS.push(`techreborn:${gem}_storage_block`);
});

// Don't this
gems.forEach((gem) => {
  HIDDEN_ITEMS.push("techreborn:" + gem + "_storage_block");
});
```

## 3. Type checking

You can optionally type-check your script against ProbeJS scripts by doing the following:

- Add ProbeJS to the pack:<br>
  https://www.curseforge.com/minecraft/mc-mods/probejs/files/4365861
- Launch Minecraft
- For best possible dump:
  - `/kubejs reload client_scripts`
  - `/kubejs reload server_scripts`
  - `/kubejs reload startup_scripts`
  - Try to sleep in a bed
  - Right-click a block with an item
  - Left-click a block with an item
- Do `/probejs dump`
- Typings should appear in:

```
<instance>/minecraft/kubejs/probe/generated.
```

Because ProbeJS exports typings synthetic methods that contain dashes in names, generated `globals.d.ts` is broken because in JavaScript methods can't have dashes in names.

- Open up `globals.d.ts` in a text editor that supports replacing by regular expression. Instructions will assume VS Code or similar editor.
- Click on the "Use regular expression" button.
- Replace all `(?<!")((?=\S*['-])(?:[a-zA-Z$\d_'-]+))(?!")(?=\()` with `"$1"`.
- There should be no more syntax errors.
