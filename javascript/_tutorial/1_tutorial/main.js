// 1. Introduction to JavaScript and the Console
// Start by showing how to check if JavaScript is working. Use the browser's console to log simple messages.

// Explanation: The console.log() function outputs messages to the browser console, which helps us debug our code.
console.log("Hello JS"); // Connection check
// 2. Variables: var, let, and const
// Explanation: Explain the difference between var, let, and const. Mention that:

// var is outdated but still used in older code.
// let is for variables that will change.
// const is for constants (values that won't change)
// example:
var organization = "Udemig";
document.write(organization + "<br/>");

let person = "Aziz Devrim";
person = "Ali Yitik"; // Updating the value of a 'let' variable
document.write(person + "<br/>");

// const age = 22;
// age = 32; // This would throw an error because 'const' can't be reassigned
// 3. Data Types with typeof
// Explanation: Teach students how to check the type of a variable using typeof.
// This is essential for understanding what kind of data is being worked with.
// document.write("Type of age: " + typeof age + "<br/>");
// document.write("Type of person: " + typeof person + "<br/>");

let school = "Udemig";
school = "Emaartech"; // Updating the value of school

const person1 = "Raha"
// console.log(person1)
{
  const person1 = "Fatma"
}
// creating scopes with {} important



// 4. String Methods
// Explanation: Show how strings can be manipulated using common methods like length, indexOf, includes, etc.

// Example:
let text = "Every step you take towards your dreams...";
document.write("Text length: " + text.length + "<br/>");
document.write("Position of 'dream': " + text.indexOf("dream") + "<br/>");
document.write(
  "Is 'Udemig' in the text?: " + text.includes("Udemig") + "<br/>"
);
document.write("Sliced text: " + text.slice(4, 10) + "<br/>");
document.write(
  "Replace 'dream' with 'goal': " + text.replace("dream", "goal") + "<br/>"
);

// 5. Mathematical and Logical Operators
// Explanation: Explain how to perform mathematical operations and comparison checks.
// This is crucial for any kind of calculation or logic in programming.

// Example:
let number1 = 44;
let number2 = 11;

document.write("Sum: " + (number1 + number2) + "<br/>");
document.write("Suctraction: " + (number1 - number2) + "<br/>");
document.write("Multiply: " + number1 * number2 + "<br/>");
document.write("Division: " + number1 / number2 + "<br/>");
document.write("Modulus: " + number1%2);


// 6. Number Methods
// Explanation: Show students how to manipulate numbers with methods
// like toFixed(), Math.round(), Math.floor(), and Math.random().

// Example:
let decimalNumber = 13.56787;
document.write("Number with 2 decimals: " + decimalNumber.toFixed(1) + "<br/>");
document.write("Rounded: " + Math.round(decimalNumber) + "<br/>");
document.write("Rounded down: " + Math.floor(decimalNumber) + "<br/>");
document.write("Random number: " + Math.round(Math.random() * 10) + "<br/>");

console.log(Math.random().toFixed(2))
console.log(Math.round(Math.random()))


// 7. Functions
// Explanation: Teach students how to define and call functions.
// Explain how parameters make functions reusable for different inputs.

// Examples:

// Simple function:
function greet() {
  document.write("Hello from Udemig Academy!<br/>");
}
greet();
// Function with parameters:
function addition(x, y) {
  document.write("Sum: " + (x + y) + "<br/>");
}
addition(55, 21);
// Function returning values:
function calculateStock(inStock, sold) {
  return inStock - sold;
}
document.write("Stock: " + calculateStock(100, 15) + "<br/>");

function budget(inWallet, credit) {
  return inWallet - credit
}

// october budget 
document.write("Money " + budget(50, 30) + "<br/>");


// 8. Conditional Statements (if-else)
// Explanation: Teach conditional logic. Explain how conditions determine what code runs.

// Example:
let age = 18;
age = 2
age= 50

if (age >= 18) {
  document.write("Eligible for a driver's license<br/>");
} else {
  document.write("Not eligible<br/>");
}

let number = 20
number = 15
number = 25

if (number >= 20 ) {
  document.write("the class is full<br/>");
} else {
  document.write("choose a place <br/>");
}
 // && and
 // ternary : ? if its true 
 // : or


// Grading system:
let average = 85;

if (average < 50) {
  document.write("Failed<br/>");
} else if (average >= 50 && average <= 64) {
  document.write("Passed<br/>");
} else if (average >= 65 && average <= 84) {
  document.write("Commendation<br/>");
} else {
  document.write("Distinction<br/>");
}

// 9. User Input with prompt
// Explanation: Show how to get input from users using prompt. Explain the concept of comparing user input with other values.

// Example:
 let userNumber = Number(prompt("Enter a number between 0 and 100"));
const randomNumber = Math.round(Math.random() * 100);

if (userNumber === randomNumber) {
 console.log("Numbers are equal");
} else {
  console.log("Numbers are not equal. Random number: " + randomNumber);
 }
