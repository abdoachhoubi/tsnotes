"use strict";

// We can annotate a variable by adding the ":" after its name and add it's type
let n: number = 12;

// Now we can't assign another data type to n
// n = "hi"; Type 'string' is not assignable to type 'number'.
console.log(n);

// Data Types
const nbr: number = 2; // Number
const str: string = "Hi"; // String
const bool: boolean = true; // Boolean
let a: any = "Hi"; // Any
const un: unknown = 0; // Uknown
