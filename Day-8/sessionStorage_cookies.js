//! Session Storage:
//? Data in session storage is cleared when the page session ends, typically when the tab or browser is closed.
//? Storage Limit: Usually around 5 MB.

// Set data
sessionStorage.setItem("sessionKey", "12345");

let sessionValue = sessionStorage.getItem("sessionKey"); // "12345"
// console.log(sessionValue)
// sessionStorage.removeItem('sessionKey');

// sessionStorage.clear();

//! Cookies:
//? Cookies are small text files that are stored on the client's browser. primarily used for communication between the browser and the server.

//? Storage Limit: Typically limited to around 4 KB per cookie

//?Observe action, last visited website

// Set cookie
document.cookie = "a;;=23";
console.log(document.cookie);

console.log(encodeURIComponent("a"));

console.log(decodeURIComponent("a%3D23"));
