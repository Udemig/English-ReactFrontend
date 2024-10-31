// js tasks:
// 1 Functions
// Create a function named multiply that takes two parameters and returns their product. Call the function with arguments 5 and 7 and display the result.
// 1- solution:
function multiply(x, y) {
  return x * y;
}

const result = multiply(5, 7);
console.log(result); // Output: 35

// 2	Arrays
// Define an array named fruits containing "Apple", "Banana", "Cherry". Add "Date" to the end of the array and display the updated array.
// 2- solution:
let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Date");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]

// 3	Array Methods
// Using the cars array from the tutorial, remove the first element and display the resulting array.
let cars = ["Mercedes", "BMW", "Audi", "Toyota"];
cars.shift(); // Removes the first element ("Mercedes")
console.log(cars); // Output: ["BMW", "Audi", "Toyota"]

// 4	Objects
// Create an object book with properties: title, author, pages. Add a method summary that returns a string summarizing the book's details. Display the summary.
let book = {
  title: "JavaScript Basics",
  author: "Jane Doe",
  pages: 250,
  summary: function () {
    return `${this.title} by ${this.author} has ${this.pages} pages.`;
  },
};

console.log(book.summary());
// Output: JavaScript Basics by Jane Doe has 250 pages.

// 5	Loops -
// For	Write a for loop that prints numbers from 1 to 5 with the message "Iteration: " before each number.
for (let i = 1; i <= 5; i++) {
  console.log("Iteration: " + i);
}

// 6	Loops -
// While	Using a while loop, calculate the sum of numbers from 1 to 10 and display the result.
let sum = 0;
let num = 1;

while (num <= 10) {
  sum += num;
  num++;
}

console.log("Sum:", sum); // Output: Sum: 55

// 7	Loops -
// Do-While	Implement a do-while loop that asks the user to enter a number greater than 100. Repeat until the condition is met.
let number1;

do {
  number = parseInt(prompt("Enter a number greater than 100: "), 10);
} while (isNaN(number1) || number1 <= 100);

console.log("You entered:", number1);

// 8	Conditional Statements
// Write an if-else statement that checks if a number is even or odd and displays an appropriate message.
let number = 7; // You can change this number to test

if (number % 2 === 0) {
  console.log(number + " is even.");
} else {
  console.log(number + " is odd.");
}

// 9	Switch-Case
// Create a switch statement that takes a variable color and prints out messages for "red", "green", "blue", and a default case for other colors.
let color = "green"; // You can change this value to test

switch (color.toLowerCase()) {
  case "red":
    console.log("Stop!");
    break;
  case "green":
    console.log("Go!");
    break;
  case "blue":
    console.log("Calm and cool.");
    break;
  default:
    console.log("Color not recognized.");
}

// 10	Date Object
// Display the current year, month, and day using the Date object methods.
const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1; // Months are zero-based
const day = today.getDate();

console.log("Year:", year);
console.log("Month:", month);
console.log("Day:", day);

// 11	Array Filtering
// Given an array of numbers [10, 25, 30, 45, 50], filter out numbers greater than 30 and display the new array.
let numbers = [10, 25, 30, 45, 50];
let filteredNumbers = numbers.filter(function (num) {
  return num > 30;
});
console.log(filteredNumbers); // Output: [45, 50]

// 12	Array Sorting
// Sort the people array from the tutorial in reverse alphabetical order and display it.
let people = ["Alice", "Bob", "Charlie", "David"];
people.sort((a, b) => b.localeCompare(a));
console.log(people);
// Output: ["David", "Charlie", "Bob", "Alice"]

// 13	Function with Return
// Create a function divide that takes two numbers and returns the result of division. Handle division by zero by returning an error message.
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed.";
  }
  return a / b;
}

console.log(divide(20, 4)); // Output: 5
console.log(divide(10, 0)); // Output: Error: Division by zero is not allowed.

// 14	Object Methods
// Add a method fullName to the person object that returns the full name by combining firstName and lastName. Display the full name.
let person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person.fullName()); // Output: John Doe

// 15	Nested Loops
// Write nested for loops to create a multiplication table from 1 to 5. Display each multiplication expression and its result.
for (let i = 1; i <= 5; i++) { // 1,2,3,4,5
  for (let j = 1; j <= 5; j++) { //1,2,3, 4, 5
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// 16	Array Concatenation
// Concatenate the fruits and cars arrays and display the new combined array.
let fruits1 = ["Apple", "Banana", "Cherry", "Date"];
let cars1 = ["Mercedes", "BMW", "Audi", "Toyota"];

let combinedArray = fruits.concat(cars);
console.log(combinedArray);
// Output: ["Apple", "Banana", "Cherry", "Date", "Mercedes", "BMW", "Audi", "Toyota"]

// 17	Array IndexOf
// Find the index of "MERCEDES" in the cars array and display it. If not found, display a message indicating it's not present.
let cars2 = ["Mercedes", "BMW", "Audi", "Toyota"];
let searchCar = "MERCEDES";

let index = cars.findIndex(
  (car) => car.toLowerCase() === searchCar.toLowerCase()
);

if (index !== -1) {
  console.log(`Index of ${searchCar}:`, index);
} else {
  console.log(`${searchCar} is not present in the array.`);
}

// 18	Function Expression
// Rewrite the greet function as a function expression and call it to display the greeting message.
const greet = function () {
  return "Hello, World!";
};

console.log(greet()); // Output: Hello, World!
//
const subtract = function (a, b) {
  return a-b
}
//
const subtract1 = (a,b) => a-b;
// 19	Arrow Functions
// Convert the addNumbers function into an arrow function and use it to add 15 and 25. Display the sum.
const addNumbers = (a, b) => a + b;

const sum1 = addNumbers(15, 25);
console.log("Sum:", sum); // Output: Sum: 40
// 

// 20	Date Manipulation
// Calculate and display the number of days left until the end of the current month using the Date object.
function daysUntilEndOfMonth() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-based index

  // Get the last day of the current month
  const lastDay = new Date(year, month + 1, 0).getDate();

  const currentDay = today.getDate();

  return lastDay - currentDay;
}

const daysLeft = daysUntilEndOfMonth();
console.log(`Days left until the end of the month: ${daysLeft}`);
