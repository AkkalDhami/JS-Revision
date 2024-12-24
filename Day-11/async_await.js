//! async await : provide a way to handle asynchronous operations in a more readable and structured manner.

//* Return Value of an async Function An async function always returns a Promise. If you return a value, it is wrapped in a Promise.

async function fetchData1() {
    return "Data fetched1!";
}

fetchData1().then((result) => console.log(result)); // Output: "Data fetched!"

const p = new Promise(function (resolve, reject) {
    resolve("promise resolved successfully");
});
async function getData() {
    return p;
}

const data = getData();
data.then((res) => {
    console.log(res); //-> promise resolved successfully
});

//! async await
async function fetchData2() {
    const data = await Promise.resolve("Data fetched2!");
    //* The await keyword pauses the function execution until the Promise resolves.
    console.log(data);
}

fetchData2(); // Output: "Data fetched!"

//! Fetching Data from an API using promise
function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
}

getUser();

//! Fetching Data from an API using asunc await
async function getUser2() {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/users/2");
        let response = await data.json();
        console.log(response);
    } catch (error) {
        console.error("Error:", error);
    }
}
getUser2();

//! Error Handling in async/await
async function fetchData3() {
    try {
        const response = await fetch("https://invalid-url");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Caught an error:", error);
    }
}

// fetchData3();

//! Key Points to Remember

//? 1. Return Value of an async:  An async function always returns a Promise. If you return a value, it is wrapped in a Promise.
async function example() {
    return 42;
}

example().then((value) => console.log("Value: ", value)); // Output: 42

//? 2. await Blocks Execution:  While the await keyword pauses the async function, it does not block the execution of the whole script. Other synchronous code continues running

async function example2() {
    console.log("Before await");
    const result = await Promise.resolve("Resolved!");
    console.log(result);
}

example2();
console.log("After calling async function");

// Output:
// Before await
// After calling async function
// Resolved!

//? 3.  await Can Only Be Used Inside async Using await outside an async function will throw a syntax error:
// await Promise.resolve("Error!"); // SyntaxError

//? 4.  Parallel Execution To run multiple asynchronous tasks in parallel, use Promise.all():

async function fetchParallel() {
    const [data1, data2] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users/3").then((res) =>
            res.json()
        ),
        fetch("https://jsonplaceholder.typicode.com/users/4").then((res) =>
            res.json()
        ),
    ]);

    console.log(data1, data2);
}

fetchParallel();
