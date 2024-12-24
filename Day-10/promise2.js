//! Promise
//* Better readability than nested callbacks.
//* Avoids callback hell.
//* Supports chaining for sequential execution.
//* Error handling is centralized using .catch().

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation Successful!");
  } else {
    reject("Operation Failed!");
  }
});
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error); // "Operation Failed!"
  });

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Operation completed."); // Runs regardless of success or failure
  });

//? Fetch Data

// fetch("https://api.example.com/data")
//   .then((response) => response.json()) // Parse JSON data
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

//? Chaining Promise
new Promise((resolve) => {
  resolve(10);
})
  .then((num) => {
    console.log(num); // 10
    return num * 2;
  })
  .then((num) => {
    console.log(num); // 20
    return num * 3;
  })
  .then((num) => {
    console.log(num); // 60
  });

//!   Promise Methods

//? 1. Promise.all()
//? Waits for all promises to resolve (or for one to reject).
const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);

Promise.all([promise1, promise2]).then((results) => {
  console.log(results); // [10, 20]
});

//? 2. Promise.race()
//? Returns the result of the first promise to resolve or reject.
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, "First"));
const promise4 = new Promise((resolve) => setTimeout(resolve, 50, "Second"));
Promise.race([promise3, promise4]).then((result) => {
  console.log(result); // "Second"
});

//? 3. Promise.allSettled()
//? Waits for all promises to settle (either resolve or reject).

const promise5 = Promise.resolve("Success");
const promise6 = Promise.reject("Error");

Promise.allSettled([promise5, promise6]).then((results) => {
  console.log(results);
  // [{status: "fulfilled", value: "Success"}, {status: "rejected", reason: "Error"}]
});

//? 4. Promise.any()
//? Returns the first resolved promise or fails if all promises reject.
const promise7 = Promise.reject("Error");
const promise8 = Promise.resolve("Success");

Promise.any([promise7, promise8])
  .then((result) => {
    console.log(result); // "Success"
  })
  .catch((error) => {
    console.error("No promises resolved.");
  });
