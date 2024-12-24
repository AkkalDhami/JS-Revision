//! LocalStorage:  Data in local storage persists indefinitely until it is explicitly deleted, even if the user closes and reopens the browser.
//? 5-10 MB (depends on browser)


// localStorage.setItem('user', "Akkal Dhami");

// console.log(localStorage.getItem('user')); // Output: Akkal Dhami

// localStorage.removeItem('user');


let user = {
    name: 'John Doe',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

// Convert object to JSON string
let jsonUser = JSON.stringify(user);

// Store JSON string in localStorage
localStorage.setItem('user', jsonUser);

// Retrieve JSON string from localStorage
let storedUser = localStorage.getItem('user');

// Convert JSON string back to object
let parsedUser = JSON.parse(storedUser);

// console.log(parsedUser); 


