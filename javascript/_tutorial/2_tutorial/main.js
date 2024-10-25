/* 
JavaScript Tutorial: Basic Concepts, Arrays, Functions, Loops, and Objects
Task: Create a Function Based on User Input
Create a function that:

Takes two numbers from the user.
Based on another user input:
Adds the numbers if the input is 1.
Subtracts if it's 2.
Multiplies if it's 3.
Divides if it's 4.
Displays the result.
*/
////////////////////////////////////////////////////////////////
// // 1) Define the operation type
// let operationType = Number(
//   prompt(
//     "Enter the operation type: \n 1-Addition \n 2-Subtraction \n 3-Multiplication \n 4-Division"
//   )
// );
// // data types : number, string, boolean,- isChecked: true/ false, date, objects, array 


// // 2) Get numbers from the user
// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));

// // 3) Create the function
// function performOperation(type, n1, n2) {
//   let result;
//   if (type == 1) {
//     result = n1 + n2;
//   } else if (type == 2) {
//     result = n1 - n2;
//   } else if (type == 3) {
//     result = n1 * n2;
//   } else {
//     result = n1 / n2;
//   }
//   document.write("Result: " + result + "<br/>");
// }

// performOperation(operationType, num1, num2);
// /*
 // JavaScript Arrays
// Arrays in JavaScript are used to store multiple values in a single variable. Arrays can hold different data types and are helpful in organizing data efficiently.
// Defining an Array
// let fruits = [apple, orange, melon, lemon, cherry] // array index starts from 0 and... index[4]

let people = ["Yusuf YAMAN", "Selda Evren", "Veli Kuzu", "Ali Göktas"];
document.write("People: " + people + "<br/>");
document.write("First person: " + people[0] + "<br/>");
document.write("Second person: " + people[1] + "<br/>");
document.write("Third person: " + people[2] + "<br/>");
// Note: Arrays in JavaScript are zero-indexed, meaning the first element is at index 0.
// Array Methods
let cars = ["BMW", "AUDI", "MERCEDES", "VOLKSWAGEN", "OPEL"];
document.write("Cars: " + cars + "<br/>");

// Length of the array
document.write("Length of the Cars array: " + cars.length + "<br/>");

let fruits = [ "apple", "orange", "melon", "lemon", "cherry"]


// Add a new element to the end of the array

fruits.push("strawberry")
console.log(fruits)
cars.push("FORD");
document.write("Updated Cars array: " + cars + "<br/>");

// Remove the last element
fruits.pop("strawberry")
console.log(fruits)
cars.pop();
document.write("After removing last element: " + cars + "<br/>");

// Add an element to the beginning
fruits.unshift("strawberry")
console.log(fruits)
cars.unshift("TESLA");
document.write("After adding an element to the beginning: " + cars + "<br/>");

// Remove the first element
fruits.shift()
console.log(fruits)

cars.shift();
document.write("After removing the first element: " + cars + "<br/>");

// Update an element
fruits[1] = "grapefruit"
console.log(fruits)
cars[4] = "RENAULT";
document.write("After updating an element: " + cars + "<br/>");

// Slice the array (from index 2 to 5)
fruits.slice(1,4)
console.log(fruits.slice(1,4))
document.write("Sliced Cars array: " + cars.slice(2, 5) + "<br/>");

// Find the index of an element
console.log(fruits.indexOf("lemon")) // returns number of children
document.write("Index of RENAULT: " + cars.indexOf("RENAULT") + "<br/>");

// Check if an element is in the array
console.log(fruits.includes("lemon")) // boolean
document.write(
  "Is MERCEDES in the array? " + cars.includes("MERCEDES") + "<br/>"
);

// Concatenate arrays

let newArray = cars.concat(people, "Extra Element", 12345);
let newArray2 = cars.concat(fruits)
console.log(newArray2)
document.write("Concatenated Array: " + newArray + "<br/>");

// Sort the array
console.log(fruits.sort())
let sortedCars = cars.sort();
document.write("Sorted Cars: " + sortedCars + "<br/>");

// Filtering Arrays
let numbers = [12, 432, 543, 7658, 23458, 9876];
document.write("Numbers: " + numbers + "<br/>");
console.log(numbers.filter(function (n) { return n > 100}))

// Filter numbers greater than 1000
let filteredNumbers = numbers.filter(function (num) {
  return num > 1000;
});
document.write("Filtered Numbers: " + filteredNumbers + "<br/>");
/* JavaScript Objects
Objects are collections of key-value pairs. They can store various data types and methods.*/
let person = {
  firstName: "Raha",
  lastName: "BEHNIM",
  gender: "Male",
  age: 22,
  hobbies: ["coding", "listening to music", "working out"],
  introduction: function () {
    document.write(
      "Introduction: " + this.firstName + " " + this.lastName + "<br/>"
    );
  },
};

let pet = {
  nickname: "cookie",
  age: 3,
  food : ["meat", "beef", "fish"]
}
console.log(pet)

document.write("First Name: " + person.firstName + "<br/>");
document.write("Hobbies: " + person.hobbies + "<br/>");
person.introduction();
// Js Loops
// 1-For loop
for (let i = 0; i <= 10; i++) {
  if (i === 3) {
    continue; // Skip this iteration
  }
  if (i === 6) {
    break; // Exit the loop
  }
  document.write("Push-up " + i + "<br/>");
}

// 2-while loop
let counter = 0;
while (counter < 10) {
  document.write(counter + "<br/>");
  counter++;
}

// do-while loop
let number = 110;
// if (number <= 10) { number++;}
do {
  document.write("Number: " + number + "<br/>");
  number++;
} while (number <= 10);

// Js functions
// 1- basic function

function greet() {
  document.write("Hello from Udemig Academy JavaScript lesson!" + "<br/>");
}
greet();
// 2- Function with Parameters
function addNumbers(x, y) {
    let result = x + y;
    document.write("Sum: " + result + "<br/>");
  }
  addNumbers(12, 21);
  
// JavaScript Conditional Statements
// 1- ıf -else 
let age = 18;
if (age >= 18) {
  document.write("Can get a driver's license." + "<br/>");
} else {
  document.write("Cannot get a driver's license." + "<br/>");
}
// switch-case
let day = 5;
switch (day) {
  case 1:
    document.write("Monday" + "<br/>");
    break;
  case 2:
    document.write("Tuesday" + "<br/>");
    break;
  case 3:
    document.write("Wednesday" + "<br/>");
    break;
  case 4:
    document.write("Thursday" + "<br/>");
    break;
  case 5:
    document.write("Friday" + "<br/>");
    break;
  default:
    document.write("Invalid day" + "<br/>");
}

// JavaScript Date Object
// The Date object allows you to work with dates and times.
let currentDate = new Date();
console.log(currentDate)
document.write("Current Date: " + currentDate + "<br/>");

let dayOfMonth = currentDate.getDate();
document.write("Day of the month: " + dayOfMonth + "<br/>");

let month = currentDate.getMonth() + 1; // Months are zero-indexed
document.write("Month: " + month + "<br/>");

let hours = currentDate.getHours();
document.write("Hour: " + hours + "<br/>");

let minutes = currentDate.getMinutes();
document.write("Minutes: " + minutes + "<br/>");

let seconds = currentDate.getSeconds();
document.write("Seconds: " + seconds + "<br/>");
