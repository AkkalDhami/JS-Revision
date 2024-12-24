//! JavaScript is a synchronous and single threaded language

//? Function Statement && Function Declaration
function hello() {
  console.log("Hello");
}

//? Function Expression
const hello2 = function () {
  console.log("Hello2");
};

//? Named Function Expression
const hello3 = function xyz() {
  console.log("Hello3");
};
// xyz(); //! Error

//? Anonymous Function : used as a values
//  function () {
//   console.log("Hello4");
// };

//? Arrow Function
const hello5 = function () {
  console.log("Hello5");
};

//? First Class Function: the ability of use function as values, can be passed as an argument, and can be returned.

//? CallBack Function: passed as an argumen to other functions
setTimeout(hello5, 2000);

//! Optional Chaining
const user = {
  firstName: "Anurag",
  lastName: "Singh",
  age: 25,
  address: {
    city: "Delhi",
  },
  getFullName: function () {
    return user.firstName + " " + user.lastName;
  },
};

const a = "city";

// console.log(user.getFullName?.());

// console.log(user.address && user.address.city)

// console.log(user.address?.city)
// console.log(user.address?.[a])
