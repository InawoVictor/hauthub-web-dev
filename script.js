console.log("Hello, welcome to our first javascript class");

const lastName = "solomon";

let firstName = "ahmod";
let age = 20;
let isStudent = true;
// let fruits = ["banana", "apple", "mango", "orange"]

firstName = "Ray";

let middleName;

// console.log(firstName);
// console.log(lastName);
// console.log(fruits);
// console.log(age);


// console.log("My name is " + firstName);
// console.log(firstName + " 20 years old");
// console.log(firstName + " is a fine young man");
// console.log("The ladies love " + firstName);

// alert("Hello, welcome to our first javascript class");
// let userName = prompt("What is your name?");
// console.log("Welcome, " + userName);
// console.log(`Welcome, ${userName}`);


let hauthub = {
    web_development: {
        students: ["ahmod", "solomon", "rahmon"]
    },
    data_analytics: {
        students: [""]
    }
}

let solomonAge = 16
let rahmonAge = 12

solomonAge += 2;
console.log("solomon age is: ", solomonAge);

// rahmonAge -= 2;
// console.log("rahmon age is: ", rahmonAge);

const ageDifference = solomonAge - rahmonAge;
console.log("age difference is: ", ageDifference);

const ageMultiplication = solomonAge * rahmonAge;
console.log("age multiplication is: ", ageMultiplication);

const totalCost =  2 + 4;
console.log("total cost is: ", totalCost);


// const isEqual = solomonAge !== rahmonAge;
// // console.log("is solomon age equal to rahmon age? ", isEqual);
// console.log("is solomon age not equal to rahmon age? ", isEqual);

// const isEqual = solomonAge >= rahmonAge;
// console.log("is solomon age greater than or equal to rahmon age? ", isEqual);


// const start_time = "9:00 AM";
// const arrival_time = prompt("What time did you arrive?");
 
// if(arrival_time > start_time){
//     console.log("You are late");
// } else if (arrival_time == start_time){
//     console.log("You are exactly on time");
// }
// else {
//     console.log("You are on time");
// }

// Logical operators


let day = 3;

switch(day){
    case 1:
        console.log("Today is Monday");
        break;  
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    
    default:
        console.log("Today is not Monday, Tuesday or Wednesday");
}


// for (let i = 1; i <= 5; i++) {
//     console.log("Hello, I am boy");
//   console.log(i);

// }

// let i = 1;

// while (i <= 5) {
//     console.log("Hello, from while loop");
//     console.log(i);

//     i++;

// }

// let i = 1;

// do {
//     console.log("Hello, from do while loop");

//     console.log(i);

//     i++;

// } while (i > 5);

// let fruits = ["apple", "banana", "mango"];

// for (let fruit of fruits) {

//   console.log(fruit);

// }

// fruits.map( fruit => console.log(fruit));


// let student = { name: "Ada", age: 20, grade: "A" };

// for (let key in student) {

//   console.log(key + ": " + student[key]);

// }

// for (let i = 1; i <= 5; i++) {

//   if (i === 2) break;

//   console.log(i);  // skips 3

// }

let fruits = ["apple", "banana", "mango"];
console.log(fruits.length);
// fruits.map((fruit, index) => {
//     console.log(`The fruit at index ${index} is ${fruit}`);
// })
function sayHello(country) {
    console.log("Hello, " + country);
}

sayHello("Ghana!!");




function addNumbers(num1, num2) {
    let sum = num1 + num2;
    
    return sum;
}

// console.log(sum)

const multiplyNumber = function (num1, num2) {
    return num1 * num2;
}




let result = addNumbers(5, 10);
console.log("The sum is: ", result);



const appHeader = document.getElementById("appHeader");
// let loginBtn = document.getElementsByClassName("login-btn")[0];
let loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", function() {
    console.log("Login button clicked");
    loginBtn.classList.toggle("test-javaScript-class");
});

// loginBtn.innerHTML =  "<h1>DOM is Powerful!</h1>";
// loginBtn.style.color = "red";
// loginBtn.style.fontSize = "12px";

console.log(loginBtn.textContent);



const getStudents = async () => {
    try {
        const response = await fetch("https://api.example.com/students");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Error fetching students: " + error.message);
    }
}

new Promise((resolve, reject) => {
    getStudents()
        .then(data => {
            console.log("Students data:", data);
            resolve(data);
        })
        .catch(error => {
            console.error("Error:", error);
            reject(error);
        });
});



// Variable naming rules
// 1. Variable names can only contain letters, numbers, underscores, and dollar signs.
// 2. Variable names must begin with a letter, underscore, or dollar sign.
// 3. Variable names are case sensitive.
// 4. Variable names cannot be reserved keywords.

