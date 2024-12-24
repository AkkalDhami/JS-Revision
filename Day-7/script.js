//? setTimeout

console.log("start");

setTimeout(function () {
  console.log("Welcome to js");
}, 2000);

console.log("end");

//? Output: starting, ending, Welcome to js

//! trust issue
console.log("starting");

setTimeout(function () {
  console.log("Welcome to js");
}, 2000);

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 5000) {
  endDate = new Date().getTime();
}

// console.log("ending");
//? Output: starting, ending, Welcome to js

console.log("start");
setTimeout(function () {
  console.log("Welcome to js");
}, 0);

console.log("end");
//? Output: starting, ending, Welcome to js

//! Higher Order Functions:
//* A function that take a anothr function as aan arguments or return a function.

const radius = [1, 2, 3, 4];

//? find area:
// const area = function (radius) {
//   let Output = [];
//   for (let i = 0; i < radius.length; i++) {
//     Output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return Output;
// };
// console.log(area(radius));

//? find diameter;
// const diameter = function (radius) {
//   let output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   return output;
// };
// console.log(diameter(radius));

//? find circumference:
// const circumference = function (radius) {
//   let output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };
// console.log(circumference(radius));

//! Optimized Code:

const calculate = (operation, radius) => {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(operation(radius[i]));
  }
  return output;
};

const area = (radius) => Math.PI * radius * radius;

const diameter = (radius) => 2 * radius;

const circumference = (radius) => 2 * Math.PI * radius;

// console.log(calculate(area, radius));
// console.log(calculate(diameter, radius));
// console.log(calculate(circumference, radius));

//! Using Map:

const areaMap = radius.map(area);
const diameterMap = radius.map(diameter);
const circumferenceMap = radius.map(circumference);

console.log(areaMap);
// console.log(diameterMap);
// console.log(circumferenceMap);

//! Advanced Optimized:

Array.prototype.calculate = function (operation) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(operation(this[i]));
  }
  return output;
};
console.log(radius.calculate(area));
