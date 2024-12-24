//! this keyword:  refers to the context in which a function is executed. Its value is determined by how the function is invoked. The behavior of this can vary depending on the context: global, object, class, or event handling.

//! 1. Global Context
//* In a browser, this refers to the global object, which is the window object.

//* In Node.js, the global object is global.

//* In strict mode, this is undefined.
console.log(this); // Window object in browsers
console.log(this); // {} object in node

//? When JavaScript is in strict mode, this in the global context is undefined.


//! 2. Inside an Object
//* When this is used inside an object method, it refers to the object that owns the method (the object to the left of the dot when the method is called).
const obj = {
    name: "JavaScript",
    greet: function () {
        return this.name; // `this` refers to `obj`
    }
};

console.log(obj.greet()); // "JavaScript"

//? if you assign the method to a variable and call it, the context is lost, and this will point to the global object (or undefined in strict mode).

'use strict'
const greetFn = obj.greet;
console.log(greetFn()); // `undefined` in strict mode, `window` in non-strict


//! 3. Inside a Regular Function
//? Non-Strict Mode
//* In a regular function, this refers to the global object.
function show() {
    console.log(this); // Refers to the global object
}
show(); // `window` in browsers

//? Strict Mode
//* In strict mode, this inside a function is undefined.
'use strict';
function show2() {
    console.log("this: ", this);
}
show2(); // `undefined`


//! 4. Arrow Functions
//* Arrow functions behave differently from regular functions. They do not have their own this. Instead, they inherit this from their lexical scope (the surrounding context where the function was defined).
const obj2 = {
    name: "Arrow",
    greet: () => {
        return this.name; // `this` does not refer to `obj`; it refers to the global scope
    }
};

console.log(obj2.greet()); // `undefined` or global `this`

//? Lexical Scoping
// *Arrow functions are commonly used to maintain the this context in nested functions.
function Person(name) {
    this.name = name;
    setTimeout(() => {
        console.log(this.name); // `this` refers to the instance of Person
    }, 1000);
}

const person = new Person("John"); // "John" after 1 second


//! 5. Event Handlers
//* In event handlers, this refers to the element that triggered the event.
document.querySelector("#btn").addEventListener("click", function () {
    console.log(this); // Refers to the button element
});

document.querySelector("#btn").addEventListener("click", () => {
    console.log(this); // Refers to the outer `this`, not the button
});


//! 6. Using call(), apply(), and bind()


const student = {
    name: "Akkal",
    greet: function (greeting) {
        console.log(`${greeting}, ${this.name}`);
    }
};
student.greet("Hello") // "Hello, Akkal"

const student2 = {
    name: "Aavash"
}
student.greet.call(student2, "Hi") // Hi, Aavash
student.greet.apply(student2, ["Hey"]) // Hey, Aavash


//! Common Pitfalls with this
//? Losing Context
//* When passing a method as a callback, the context is lost unless explicitly bound.
const ob4 = {
    name: "Context",
    greet() {
        console.log(this.name);
    }
};
ob4.greet() // context
setTimeout(ob4.greet, 1000); // `this` is lost; undefined



//? Summary
//* Global scope (non-strict) :	Global object (e.g., window)
//* Global scope (strict) :	undefined
//* Object method :	The object owning the method
//* Regular function (non-strict) :	Global object
//* Regular function (strict) :	undefined
//* Arrow function :	Lexical scope (this of parent context)
//* Class/constructor :	The instance of the class
//* Event handler :	The element that triggered the event