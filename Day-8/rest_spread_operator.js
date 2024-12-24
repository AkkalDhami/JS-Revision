//! Spread Operator (...):
//   - The spread operator is used to expand an array or object

//? Use Cases of Spread Operator

//* Copying Arrays and Objects: Create a shallow copy of an array or object.
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// console.log(arr2);

//* Combining Arrays and Objects: Merge arrays or objects easily
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combinedArray = [...arr1, ...arr2];
// console.log(combinedArray);

const obj1 = { name: "Alice", age: 25 };
const obj2 = { job: "Developer" };
const combinedObject = { ...obj1, ...obj2 };
// console.log(combinedObject); // Output: { name: "Alice", age: 25, job: "Developer" }

//* Passing Elements as Arguments: Spread an array or object properties when passing arguments to a function.
function add(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
// console.log(add(...numbers));

//! Rest Operator:
//*  - collects multiple elements into a single array or object

//? Use Cases of Rest Operator
//* Function Parameters: Capture all arguments into an array in a function.
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
// console.log(sum(1, 2, 3, 4));

//* Destructuring Arrays and Objects: Extract some elements/properties and gather the rest into a new array or object.
// const [first, second, ...rest] = [10, 20, 30, 40, 50];
// console.log(first);
// console.log(second);
// console.log(rest);

const person = { name: "Alice", age: 25, job: "Developer" };
const { name, ...rest } = person;
console.log(name); 
console.log(rest); 

//! using both:
const people =[ "Bob" , "John"]
function greet(greetings, ...names) {
  console.log(`${greetings}, ${names.join(", ")}`);
}

greet("Hello", ...people); 