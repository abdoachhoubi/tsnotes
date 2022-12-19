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

```xml
{
  /* Line 14 */ "target": "ES6" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
  /* Line 29 */ "rootDir": "./src" /* Specify the root folder within your source files. */,
  /* Line 52 */ "outDir": "./dist" /* Specify an output folder for all emitted files. */,
  /* Line 53 */ "removeComments": true /* Disable emitting comments. */,
  /* Line 66 */ "noEmitOnError": true /* Disable emitting files if any type checking errors are reported. */
}
```

Now after we finished ssetting up the `tsconfig` file, we can easily compile all of our `.ts` file by running the command `tsc` without adding any arguments.

I created a `package.json` file that comes in handy when dealing with scripts and package managing.

I added some useful scripts:

```json
"scripts": {
	"start":	"tsc",
	"clean":	"rm -rf src/*.js",
	"fclean":	"npm run clean; rm -rf dist",
	"re":		"npm run fclean; npm start"
}
```

Now:

```bash
$ npm start			# compiles all .ts files
$ npm run clean		# removes all .js files from src folder
$ npm run fclean	# removes all .js files
$ npm run re		# revoves all .js files and recompiles all .ts files
```
