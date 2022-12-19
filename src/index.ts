"use strict";

// We can annotate a variable by adding the ":" after its name and add it's type
let n: number = 12;

// Now we can't assign another data type to n
// n = "hi"; Type 'string' is not assignable to type 'number'.

// We can also annotate arguments of functions
const add = (num1: number, num2: number) => {
  return num1 + num2;
};

console.log(add(4, 2));
