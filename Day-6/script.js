//? Ashynchronous, Event Loop, Callbackqueue

console.log("starting");
setTimeout(function greet() {
  console.log("Welcome to js");
}, 2000);

console.log("ending");

//? Output: starting, ending, Welcome to js
