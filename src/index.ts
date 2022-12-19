"use strict";

// We can annotate a variable by adding the ":" after its name and add it's type
let n: number = 12;

// Now we can't assign another data type to n
// n = "hi"; Type 'string' is not assignable to type 'number'.
console.log(n);

// Data Types
let nbr: number; // Number
let str: string; // String
let bool: boolean; // Boolean
let a: any; // Any
let un: unknown; // Unknown
let arr: number[]; // Array (can only hold numbers)
let tup: [string, number]; // Tuple that can only hold two elements
