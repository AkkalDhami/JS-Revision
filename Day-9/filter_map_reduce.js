//! Map : creates a new array populated with the results of calling a provided function on every element in the original array.

const members = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];

const announcements = members.map((member) => {
  return member + " joined the contest.";
});

console.log(announcements);

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num ** 2);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

const users1 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
  { name: "David", age: 15 },
];

const names = users1.map((user) => user.name);
console.log(names);
// Output: ["Alice", "Bob", "Charlie", "David"]

//! Filter: creates a new array containing all elements from the original array that pass a specific test (provided by a function).

const number = [1, 2, 3, 4, 5];
const evenNumbers = number.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
  { name: "David", age: 15 },
];

const adults = users.filter((user) => user.age > 18);
console.log(adults);
// Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 19 }]

//! Reduce : applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
const number1 = [1, 2, 3, 4, 5];
const sum = number1.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

const users3 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
  { name: "David", age: 15 },
];

const totalAge = users3.reduce((acc, user) => acc + user.age, 0);
console.log(totalAge);
// Output: 76


const user4 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 15 }
  ];
  
  const totalAdultAge = user4
    .filter(user => user.age > 18)
    .reduce((acc, user) => acc + user.age, 0);
  
  console.log(totalAdultAge); 
  // Output: 44 (25 + 19)
  