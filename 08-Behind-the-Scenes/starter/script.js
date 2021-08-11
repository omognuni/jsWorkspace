'use strict';
/*
engine
call stack: execute code
heap: objects stored in mem

compilation vs interpretation
JIT(just in time) compilation

JIT compilation
1. parsed into abstract syntax tree (AST)
2. compilation: compile into machine code
3. execution

engine & runtime

*/
// // Scoping in practice

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;
//     function printAge() {
//         const output = `You are ${age}, born in ${birthYear}`;
//         console.log(output);
//     }

//     printAge();
//     return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// hoisting and TDZ

// this
// ** arrow functions do not get its own this keyword / use this keyword of parent scope **
// ** this does NOT point to the function itself, and also NOT the
// its variable environment



