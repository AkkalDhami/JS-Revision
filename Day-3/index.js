// ! let and const declaration are hoisted

//   console.log(x); // referenceError : Cannot access 'x' before initialization
//   let x = 10;
//   console.log(x); // 10

//   x = 20;
//   console.log(x); // 20

//! Temporal Dead Zone: a phase where let ans const declarations are hoisted

//! block: used to combine multiple statements

{
  var a = 10;
  let y = 20;
  const c = 30;
  // console.log(y); // 20
  // console.log(a);
  // console.log(c);
}
//   console.log(y); //  ReferenceError: y is not defined

//! shadowening in js
var num = 10;
{
  var num = 20;
  console.log(num); // 20
}
console.log(num); // 20

//! ReferenceError: not defined, cannot access 'x' before initialization
//! SyntaxError: const b;
//! TypeError: const b; b = 12;

//! Destructing in JS

const person = {
  name: "John",
  age: 30,
  city: "New York",
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

const { name, age } = person;
console.log(name); // John
console.log(age); // 30

const {
  address: { street },
} = person;
console.log(street); // 123 Main St

function x({ address: { street, city } }) {
  console.log(street); // 123 Main St
  console.log(city); // New York
}

x(person);

const array = ["John", "Ram", "Shyam", "Shyam"];

const [first, second, third, fourth] = array;

console.log(first); // John
console.log(second); // Ram

const [, , , arr1] = array;
console.log(arr1); // Shyam

const { 1: arr2 } = array;

console.log("arr2: ", arr2); // Ram
