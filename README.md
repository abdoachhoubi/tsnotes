# Typescript notes

## What is Typescript?

It's a programming language to address shortcoming of JavaScript.

## Features of TypeScript:

- Static Typing
- Code completion
- Refactoring
- Shorthand notations

# Downbacks?

- Compilation process (can take time)
- Discipline in coding (Which seems to be frasturating somehow)

## Compile .ts files

We need to install typescript globally using:

```bash
npm i -g typescript
```

Now, we have the tsc compiler, we can compile .ts file into .js files using:

```bash
tsc file.ts
```

This will produce a .js file (ES5 version), which is an old version of JavaScrip!

To compile .ts files into a newer version of .js we need to configure the tsc compiler.

## Configure the tsc compiler

open the terminal and run this cmd:

```bash
tsc --init
```

This will produce a `tsconfig.json` file, from which we can configure our `tsc` compiler.

Lines that need to be configured:

```json
/* Line 14 */ "target": "ES6" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
/* Line 29 */ "rootDir": "./src" /* Specify the root folder within your source files. */,
/* Line 52 */ "outDir": "./dist" /* Specify an output folder for all emitted files. */,
/* Line 53 */ "removeComments": true /* Disable emitting comments. */,
/* Line 66 */ "noEmitOnError": true /* Disable emitting files if any type checking errors are reported. */,
```
