# Typescript notes

Just my TypeScript course notes ^\_^

## Table of content

1. [What is Typescript?](#what-is-typescript)
2. [Features of TypeScript:](#features-of-typeScript)
3. [Downbacks?](#downbacks?)
4. [Compile .ts files](#compile-.ts-files)
5. [Configure the tsc compiler](#configure-the-tsc-compiler)
6. [Debugging](#debugging)
7. [Data Types](#data-types)
8. [Functions](#functions)
9. [Objects](#objects)
10. [Advanced Types](#advanced-types)

## What is Typescript?

TypeScript is a programming language that is a super set of JavaScript. It is developed and maintained by Microsoft. TypeScript adds optional static typing and class-based object-oriented programming to JavaScript.

TypeScript is designed to be a typed superset of JavaScript that compiles to plain JavaScript, which means that any valid JavaScript code is also valid TypeScript code. This makes it easy for developers to incorporate TypeScript into their existing JavaScript codebase, as well as use existing JavaScript libraries in their TypeScript code.

## Features of TypeScript:

- Static Typing
- Code completion
- Refactoring
- Shorthand notations

## Downbacks?

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
$ npm run dev		# compiles all .ts files
$ npm run clean		# removes all .js files from src folder
$ npm run fclean	# removes all .js files
$ npm run re		# revoves all .js files and recompiles all .ts files
```

## Debugging:

We need to go back to `tsconfig.json` and activate the line:

```xml
{
	/* Line 50 */ "sourceMap": true	/* Create source map files for emitted JavaScript files. */
}
```

That line will create source map files for emitted `.js` files, and they will be used by debuggers!

Now to start debugging our code, we need to open the debuggging panel and create a `lunch.json`, file wich will contain all our debugging configurations.

Now, we need to add the following configurations:

```json
"configurations": [
	{
	  "type": "node",
	  "request": "launch",
	  "name": "Launch Program",
	  "skipFiles": [
		"<node_internals>/**"
		],
	  "program": "${workspaceFolder}/src/index.ts",
	  "preLaunchTask": "tsc: build - tsconfig.json",
	  "outFiles": [
		"${workspaceFolder}/**/*.js"
		]
  	}
]
```

- `type` used to specify the type of configuration for the debugger
- `request` used to specify the type of debugging action to be taken when the debugger starts
- `name` just an alias of the benugging session
- `skipFiles` array of files that shouldn't be included in the debugging session
- `program` used to specify the file that the debugger should launch or attach to when it starts
- `preLaunchTask` used to specify a task that should be run before the debugger starts.
- `outFiles` used to specify a list of files that should be excluded from the debugger's source map

## Data Types:

### Javascript primitive data types:

- `boolean`: Represents a true or false value.
- `number`: Represents integers and floating point numbers.
- `string`: Represents a sequence of characters.
- `null`: Represents the absence of a value.
- `undefined`: Represents the absence of a value or a value that has not been initialized.

### Javascript complex data types:

- `object`: Represents a collection of key-value pairs.
- `array`: Represents a collection of values of the same data type.
- `function`: Represents a block of code that can be called by name.

### TypeScript introduces new types:

- `tuple`: Represents a fixed-size collection of values of different data types.
- `enum`: Represents a set of named constants.
- `any`: Represents a value of any data type.
- `void`: Represents the absence of a value or the lack of a return type for a function.

Be careful from the `any` type because it must not be used unless it's necessary, because it disables the major feature of TypeScript which is type annotation.

And you should be aware that even though `tuple` is a fixed sized array, you can still use the array `push()` method on it which my cause bugs or errors.

### The `number` data type in Typescript:

In TypeScript we can separate big numbers using an unserscore `_`

Example:

```ts
const n: number = 123_456_789_0;
```

### The `unknown` data type

In TypeScript, the `unknown` type is a type that represents a value that could be anything. It is similar to the `any` type, but it is more strict in that it requires you to perform type checking before using the value in a type-safe way.

Example:

```ts
let x: unknown;

x = "hello";
x = 123;

console.log(x.toUpperCase()); // Error: x could be a number, which does not have a toUpperCase method

if (typeof x === "string") {
  console.log(x.toUpperCase()); // OK
}
```

### The `enum` data type

An enum is a way to define a set of named constants in TypeScript.

Example:

```ts
const enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const day: DaysOfWeek = DaysOfWeek.Monday;

if (day === DaysOfWeek.Monday) {
  console.log("It is Monday");
}
```

## Functions

In TypeScript we can annotate function parameters and also the return value.

Example:

```ts
// By adding the type after the params list we can define our return value type
function multiply(num1: number, num2: number): number {
  return num1 * num2;
}
```

We can also use a compiler option in `tsconfig.json` called `noUnusedParameters` to avoid declaring a param without using it in a function.

```xml
/* Line 89 */	"noUnusedParameters": true /* Raise an error when a function parameter isn't read. */,
```

There's also an option that detects unused local variables:

```xml
/* Line 88 */	"noUnusedLocals": true,	/* Enable error reporting when local variables aren't read. */
```

In JavaScript, if a function doesn't reach the `return` statement it returns `undefined` by default. But that may cause a lot of bugs and troubles.

To avoid facing that problem in TypeScript we can use another compiler option:

```xml
/* Line 91 */	"noImplicitReturns": true,	/* Enable error reporting for codepaths that do not explicitly return in a function. */
```

We can make an argument optional by adding a `?` next to it, or we can assign to it a default value:

```ts
// We can do it this way
function multiply(num1: number, num2?: number): number {
  return num2 ? num1 * num2 : num1;
}

// Or this way
function multiply(num1: number, num2?: number): number {
  return num1 * (num2 || 1);
}

// Or this way
function multiply(num1: number, num2 = 1): number {
  return num1 * num2;
}
```

## Objects

Objects in TypeScript are more fun!

We can annotate each property, make it optional, or even read only!

Example:

```ts
const user: {
  readonly id: number;
  name: string;
  email?: string;
  multiply: (num1: number, num2: number) => void;
} = {
  id: 0,
  name: "Astro",
  multiply: (num1: number, num2: number) => {
    console.log(num1 * num2);
  },
};

user.email = "aachhoub@gmail.com";
```

## Advanced Types

In this part we'll get to know more advanced types concepts:

- [Type Aliases](#type-aliases)
- [Unions and Intersections](#unions-and-intersections)
- [Type Narrowing](#type-narrowing)
- [Nullable Types](#nullable-types)

### Type Aliases

A Type Alias is a TypeScript featue that allow us to make our own custom types, it's like the `typedef in C`

Example:

```ts
type User = {
  readonly id: number;
  name: string;
  email?: string;
  multiply: (num1: number, num2: number) => void;
};

// Now we can go back to our objects and redefine it using this alias
const user: User = {
  id: 0,
  name: "Astro",
  multiply: (num1: number, num2: number) => {
    console.log(num1 * num2);
  },
};

user.email = "aachhoub@gmail.com";
```

### Unions and Intersections

In TypeScript we can give a variable two different types:

```ts
let x: number | boolean;
// This is what's called type union
```

An intersection in typescript is when a variable can have more than one type at the same time.

Example:

```ts
type Movable = {
  move: () => void;
};

type Removable = {
  remove: () => void;
};

// Wrraping both types into one tyle
type UIObject = Movable & Removable;

// The `card` variable is both Movable and Removable
let card: UIObject = {
  move: () => {
    console.log("Moving the object!");
  },
  remove: () => {
    console.log("Removing the object! ");
  },
};
```

We can use unions with Literal types:

```ts
type Quantity = 10 | 30 | 50 | 70 | 100;
type Metric = "cm" | "inch";

let quantity: Quantity = 30;
let metric: Metric = "cm";

// Now `quantity` can only accept the values: 10 ,30, 50, 70 and 100.
// Amd `metric` can either be 'cm' or 'inch'.
```

### Type Narrowing

It's a trick we use when we don't know exactly what's the type of a variable.

Example:

```ts
type Weight = number | string;

function sqr(num1: Weight): number {
  if (typeof num1 === number) return num1 * num1;
  return parseInt(num1) * parseInt(num1);
}
```

### Nullable Types

In JavaScript `null` and `undefined` are the Number One source of bugs!<br />
But in Typescript, thanks to the `strict` config rule, we can avoid that!<br />
in case you're not using the `strict` rule, you can activate the rule `strictNullChecks`.

```xml
/* Line 89 */	"strictNullChecks": true	/* When type checking, take into account 'null' and 'undefined'. */,
```
