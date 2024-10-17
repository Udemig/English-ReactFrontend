/*
taskList:
Here are the practice exercises for each topic:
1. Introduction to JavaScript and the Console
a. Open the browser console and log your favorite hobby to check if JavaScript is connected.
b. Use console.log() to log a message saying "JavaScript is awesome!".
2. Variables: var, let, and const
a. Create a let variable to store your favorite color and then change its value.
b. Create a const variable to store the number of days in a week. Try to update its value and observe the error.
3. Data Types with typeof
a. Declare a variable to store your birth year and use typeof to check its type.
b. Create a variable to store whether you are a student (true/false) and check its type using typeof.
4. String Methods
a. Use slice() to extract "Script" from "JavaScript".
b  Use replace() to change "night" to "day" in "Good night".
5. Mathematical and Logical Operators
a. Write a program to multiply two numbers and display the result.
b  Use logical operators (&&, ||) to check if two conditions are both true or if at least one condition is true.
6. Number Methods
a. Generate a random number between 1 and 50 using Math.random() and round it to the nearest integer.
b. Use Math.floor() to round a decimal number down to the nearest whole number.
7. Functions
a. Create a function that takes two numbers and returns their product.
b. Write a function that converts kilometers to miles.
8. Conditional Statements (if-else)
a. Write an if-else statement that checks if a number is even or odd.
b. Create a conditional system using if-else to determine a person's age category: "Child", "Teen", "Adult", or "Senior".
9. User Input with prompt
a. Create a prompt asking the user to enter their favorite food and log a message saying "Your favorite food is ___".
b. Write a program that prompts the user for a number, generates a random number, and tells them if their guess was higher or lower than the random number.

*/
// 1-a
console.log("my fav hobby is riding bike");
// 2-a
let myFavColor = "black";
myFavColor = "white";
console.log(myFavColor);
// 3-a
let year = 1991;
year = "January";
console.log(typeof year);
// 4-a
let text = "javascript";
console.log(text.slice(4, 10));
// 5-a
let a = 5;
let b = 7;
let result = a * b;
console.log(result);
// 5-b
let temperature = 25; // degrees Celsius
let isSunny = true;

// Check if it's warm and sunny
if (temperature > 20 && isSunny) {
  console.log("It's a warm and sunny day!");
} else {
  console.log("It's not a warm and sunny day.");
}

// Check if it's warm or sunny
if (temperature > 20 || isSunny) {
  console.log("It's either warm or sunny.");
} else {
  console.log("It's neither warm nor sunny.");
}

// 6-a
console.log(Math.random() * 50);
console.log(Math.round(Math.random() * 50));

// 7-a
function product() {
  return console.log("apple");
}
product();
// 8-a
let number = 10;
if (number % 2 == 0) {
  console.log("this number is even");
} else {
  console.log("this number is odd");
}
//9-a
// let favFood = prompt("what's your fav food? ")
console.log(favFood);