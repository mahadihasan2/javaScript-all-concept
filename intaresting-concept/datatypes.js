const a = 50;
const b = "Data type of String";
const c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// JavaScript Data Type

// Primitive Data Type 
/* 
 1. Number 
 2. String 
 3. Boolean 
 4. Undefined
 5. Null 
 6. Object (Non primitive)
 7, Symbol 

*/

// primitive Data type 
let u = "Hello";
let e = u;
// console.log(u, e);

u = "Web Developer";

console.log(u, e);

// Non-primitive 
const x = { job: "Web Developer " };
const y = x;
console.log(x, y);
x.job = "Front End WebDeveloper";
console.log(x, y);