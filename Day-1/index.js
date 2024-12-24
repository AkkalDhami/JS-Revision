var a = 10;
myFunction();
function myFunction() {
  console.log("Js User");
}

//! Hoisting : The process of moving the variable declarations to the top of the scope
// 1. Variable Hoisting : Variables are moved to the top of the scope, but their
// initial values are set to undefined.
// 2. Function Hoisting : Function declarations are moved to the top of the scope,
// but their function bodies are not

console.log(z); // undefined
var z = 10;

greet();
function greet() {
  console.log("Hello World!");
}
