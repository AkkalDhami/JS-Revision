
let p1 = new Promise((resolve, reject) =>
    setTimeout(() => {
        resolve("Promise resolved");
    }, 10000)
);

let p2 = new Promise((resolve, reject) =>
    setTimeout(() => {
        resolve("Promise resolved2");
    }, 5000)
);

async function fetchData() {
    console.log("Hello world");
    const val2 = await p2;
    console.log("Namaste JS 2")
    console.log(val2);

    const val1 = await p1;
    console.log("Namaste JS")
    console.log(val1);

}
// fetchData();


let API_URl = `https://api.github.com/users/AkkalDhami`;
async function fetchData2() {
    try {
        const response = await fetch(API_URl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData2();
async function fetchData3() {

    const response = await fetch(API_URl);
    const data = await response.json();
    console.log(data);

}
fetchData3().catch(error => console.error("Error fetching data:", error));;

