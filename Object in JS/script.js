//?  Question 1 - Create a function multiply By Two (obj) that multiplies all numeric property values of nums by 2.

let nums = {
    a: 100,
    b: 200,
    title: "My nums",
};

multiplyNumeric(nums);
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
    console.log(obj);
}

//? Question 3 What's the output of the following code?
const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 456;
console.log(a[b]); // 456

//? Question 4 - Guess the output
console.log(..."AKKAL");

//? Question 5 - Guess the output
const settings = {
    username: "Piyush",
    level: 19,
    health: 90,
};
const data = JSON.stringify(settings, ["level", "health"]);
console.log(data); // {"level":19,"health":90}

//? Question 6 - Guess the output
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};
console.log(shape.diameter()); // 20
console.log(shape.perimeter());// NaN


//? Question 7  - Guess the output
let x = { greeting: "Hey!" };
let d;
d = x
x.greeting = "Hello";
console.log(d.greeting);

//? Question 8 - Guess the output
let person = { name: "Lydia" };
const members = [person];
person = null;
console.log(members);


//? Question 9 - Guess the output
const value = { number: 10 };
const multiply = (x = { ...value }) => {
    console.log((x.number *= 2));
};
multiply(); // 20
multiply(); // 20
multiply(value); // 20
multiply(value); // 40

//? Question 10 - Guess the output
function changeAgeAndReference(person) {
    person.age = 25;
    person = {
        name: "John",
        age: 50,
    };
    return person;
}
const personObj1 = {
    name: "Alex",
    age: 30,
};
const personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1); // -> { name: 'Alex', age: 25 } 
console.log(personObj2); // -> { name: 'John', age: 50 }



//! Shallow copy V/S Deep Copy

//! Shallow Copy:

//? creates a new obj or array but it copies only the top level properties by value.

//?  For nested structures like objects containing other objects or arrays, the shallow copy only duplicates references to the inner objects or arrays rather than creating new, independent copies of them.


const original = {
    name: "Alice",
    details: {
        age: 25,
        city: "New York",
    },
};

const shallowCopy = { ...original };

shallowCopy.details.city = "Los Angeles";

console.log(original.details.city); // Output: "Los Angeles"
console.log(shallowCopy.details.city); // Output: "Los Angeles"


const arr = [1, 2, [3, 4]];

const shallowCopyArr = [...arr];
shallowCopyArr[2][0] = 12;

console.log(arr[2]); // Output: [12, 4]
console.log(shallowCopyArr[2]); // Output: [12, 4]

const s2c = arr.slice();
s2c[2][0] = 24;
console.log(arr[2]); // Output: [12, 4]



//! Deep Copy:

//? A deep copy creates a completely independent copy of the entire object, including all nested objects and arrays.

//? Changes made to the copied object do not affect the original object in any way.

const original2 = {
    name: "Alice",
    details: {
        age: 25,
        city: "New York",
    },
};

// Deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(original2));

deepCopy.details.city = "Los Angeles";

console.log(original2.details.city); // Output: "New York"
console.log(deepCopy.details.city); // Output: "Los Angeles"
