//! Promise: an object representing the eventual completion or failure of any asynchronous operation.

//* Promises provide a cleaner way to handle asynchronous code compared to traditional callback functions.

//* helps to write a trust worthy code.

const promise = new Promise((resolve, reject) => {
  const res = true;
  // An asynchronous operation.
  if (res) {
    resolve("Resolved!");
  } else {
    reject(Error("Error"));
  }
});

promise.then(
  (res) => console.log(res),
  (err) => console.error(err)
);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Result");
  }, 2000);
});

promise2.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.error(err);
  }
);

const executorFn = (resolve, reject) => {
  resolve("Resolved!");
};

const promise3 = new Promise(executorFn);

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject(Error("Promise Rejected Unconditionally."));
  }, 1000);
});

promise4.then((res) => {
  console.log(value);
});

promise4.catch((err) => {
  console.error(err);
});

const promis5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("*");
  }, 1000);
});

const twoStars = (star) => {
  return star + star;
};

const oneDot = (star) => {
  return star + ".";
};

const print = (val) => {
  console.log(val);
};

// Chaining them all together
promis5.then(twoStars).then(oneDot).then(print);

const promise6 = new Promise((resolve) =>
  setTimeout(() => resolve("dAlan"), 100)
);

promise6
  .then((res) => {
    return res === "Alan"
      ? Promise.resolve("Hey Alan!")
      : Promise.reject("Who are you?");
  })
  .then(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.error(err);
    }
  );
