// console.log("Hello Js"); Connection check

// * var, let, const

var organization = "Udemig";
// var organization = "Emaartech";

document.write(organization + "<br/>");

let person = "Aziz Devrim";
// let person = "Bahadır";
person = "Ali Yitik";

// const age = 22;
// age = 32;
// const age = 22;

document.write(person + "<br/>");
document.write(age + "<br/>");

// * typeof ==> This method checks the type of the given expression.

document.write("Type of age variable: " + typeof age + "<br/>");
document.write("Type of person variable: " + typeof person + "<br/>");
document.write("------------------------------------------" + "<br/>");

let text =
  "   Every step you take towards your dreams makes you a part of that dream. As long as you don't give up, finding the way is inevitable.   ";
document.write("Text: " + text + "<br/>");

// * String Methods:

// ! length ==> Used to find the number of characters in text strings.
document.write("Text length: " + text.length + "<br/>");

// ! indexOf ==> Finds the position of the specified text within the string.
document.write(
  "Position of the word 'dream' in the text: " +
    text.indexOf("dream") +
    "<br/>"
);

// ! includes ==> Checks if the specified word is in the string.
document.write(
  "Is the word 'Udemig' in the text? : " + text.includes("Udemig") + "<br/>"
);

// ! slice ==> Used to get a specific part of the string within a defined range.
document.write(
  "Characters 44-67 in the text: " + text.slice(44, 67) + "<br/>"
);

// ! replace ==> Replaces a word within the string with another word.
document.write(
  "Replace the word 'dream' with 'goal': " +
    text.replace("dream", "goal") +
    "<br/>"
);

// ! toLocaleLowerCase ==> Converts all characters in the string to lowercase.
document.write(
  "Convert all characters in the text to lowercase: " +
    text.toLocaleLowerCase() +
    "<br/>"
);

// ! toLocaleUpperCase ==> Converts all characters in the string to uppercase.
document.write(
  "Convert all characters in the text to uppercase: " +
    text.toLocaleUpperCase() +
    "<br/>"
);

// ! trim ==> Removes the spaces from the beginning and end of the string.
document.write("Trimmed text: " + text.trim() + "<br/>");

/*

*  JavaScript Mathematical and Logical Operators

* +  ==> Addition and concatenation

* -  ==> Subtraction

* *  ==> Multiplication

* /  ==> Division

* %  ==> Modulus

* =  ==> Assignment

* == ==> Equality Check

* === ==> Strict Equality Check: This operator checks both type and value of the expressions on its left and right sides.

* !=  ==> Not equal

* !== ==> Strict inequality

* > 

* <

* >=

* <=

* && ==> AND

* || ==> OR

*/

let number1 = 44;
let number2 = 11;
document.write("------------------------------------------" + "<br/>");
document.write("Sum of number1 and number2: " + (number1 + number2) + "<br/>");
document.write("Difference between number1 and number2: " + (number1 - number2) + "<br/>");
document.write("Product of number1 and number2: " + number1 * number2 + "<br/>");
document.write("Division of number1 by number2: " + number1 / number2 + "<br/>");
document.write("Modulus of number1 by number2: " + (number1 % number2) + "<br/>");

number1 += 1;
number1 += 1;
number1 += 1;
document.write("Number1: " + number1 + "<br/>");
number2 -= 2;
document.write("Number2: " + number2 + "<br/>");
number2 *= 5;
document.write("Number2: " + number2 + "<br/>");
document.write("------------------------------------------" + "<br/>");

let number3 = 45;
document.write("Number3: " + number3 + "<br/>");
number3++;
document.write("Number3: " + number3 + "<br/>");
number3--;
document.write("Number3: " + number3 + "<br/>");
number3 += 3;
document.write("Number3: " + number3 + "<br/>");
number3 *= 10;
document.write("Number3: " + number3 + "<br/>");
number3 /= 4;
document.write("Number3: " + number3 + "<br/>");
document.write("------------------------------------------" + "<br/>");

let number4 = 120;
let number5 = 34;
document.write("Is number4 greater than number5? : " + (number4 > number5) + "<br/>");
document.write("Is number4 smaller than number5? : " + (number4 < number5) + "<br/>");
document.write("Is number4 greater or equal to number5? : " + (number4 >= number5) + "<br/>");
document.write("Is number4 smaller or equal to number5? : " + (number4 <= number5) + "<br/>");

let number6 = "120";
document.write("Is number4 equal to number6? : " + (number4 == number6) + "<br/>");
document.write("Is number4 strictly equal to number6? : " + (number4 === number6) + "<br/>");
document.write("------------------------------------------" + "<br/>");

// * Number Methods:
let decimalNumber = 13.56787;
document.write("Number: " + decimalNumber + "<br/>");

// ! toFixed ==> Defines how many decimal places a number should have after the decimal point.
document.write(
  "Number with 2 decimal places: " + decimalNumber.toFixed(2) + "<br/>"
);

// ! Math.round ==> Rounds a decimal number to the nearest whole number.
document.write(
  "Rounded number: " + Math.round(decimalNumber) + "<br/>"
);

// ! Math.floor ==> Rounds a decimal number down to the nearest whole number.
document.write(
  "Rounded down number: " + Math.floor(decimalNumber) + "<br/>"
);

// ! Math.ceil ==> Rounds a decimal number up to the nearest whole number.
document.write(
  "Rounded up number: " + Math.ceil(decimalNumber) + "<br/>"
);

// ! Math.random ==> This method generates random numbers between 0 and 1.
document.write("Random number: " + Math.round(Math.random() * 10) + "<br/>");
document.write("------------------------------------------" + "<br/>");

// * JavaScript Functions

/*
* Functions are specialized blocks of code designed to perform a task, such as displaying output to the user or performing a calculation.

? How are functions used?

* To use a function, you first need to define it. After that, you can call it by its name.

! A function is defined using the 'function' keyword, followed by the function name and then () {}. The {} block contains the code that will be executed by the function. 

After defining a function as described, it is called using its name followed by ().
*/

// * Defining the function
function greet() {
  document.write("Greetings from the Udemig Academy JavaScript lesson!!!" + "<br/>");
}
// Calling the function
greet();

// ? Are functions only used this way?

function addition() {
  let num1 = 23;
  let num2 = 78;
  let result = num1 + num2;
  document.write("Addition result: " + result + "<br/>");
}
addition();
addition();
addition();

// ? In the above example, no matter how many times I call this function, it will always perform the operation with the same static data. So how do we create dynamic functions?

// * In functions, the concept of 'parameters' is used to make them dynamic. Parameters are passed into the function in the () next to the function name. The function then performs operations based on these parameters.

function additionWithParams(x, y) {
  let result = x + y;
  document.write("Addition result: " + result + "<br/>");
}
// additionWithParams(); This usage would result in 'NaN' (Not a Number) because I did not provide any values for the operation.

additionWithParams(12, 21);
additionWithParams(12, 65);
additionWithParams(12, 80);

// todo: Create a function that takes two parameters and multiplies them, then displays the result.

function multiplication(a, b) {
  let result = a * b;
  document.write("Multiplication result: " + result + "<br/>");
}
multiplication(3, 4);

// ? How does a function return a result?

// console.log(result); This usage didn't give access to the result variable.

// * To return a value from a function, 'return' is used.

function calculateStock(input, output) {
  let stock = input - output;
  return stock;
}

let stockStatus = calculateStock(100, 15);

document.write("Stock: " + stockStatus + "<br/>");
let stockStatus1 = calculateStock(100, 150);
document.write("Stock: " + stockStatus1 + "<br/>");
document.write("------------------------------------------" + "<br/>");
// * The expression specified at the return line is returned when the function is called.

// * JavaScript User Input (Prompt)

// let userNumber = prompt("Enter a number");
// let userNumber1 = Number(prompt("Enter a number"));

// console.log(userNumber);
// console.log(userNumber1);

// alert("Learn Coding!!");

// * JavaScript Conditional Statements (if-else)

// In real life, certain actions occur based on conditions. In JavaScript, this concept is represented by 'if-else'. 'If' means a condition is checked, and 'else' means otherwise. An if statement is written with the condition inside () next to if, and the code that runs if the condition is met is inside {}. If the condition is not met, the code inside else {} is executed.

let age = 18;

// If age is greater than or equal to 18, display 'Can get a driver's license', otherwise display 'Cannot get a driver's license'.

if (age >= 18) {
  document.write("Can get a driver's license " + "<br/>");
} else {
  document.write("Cannot get a driver's license " + "<br/>");
}
document.write("------------------------------------------" + "<br/>");

// ! If the condition in the if statement is met, this block runs, and the else block is skipped. But if the condition in the if block is not met, the else block is executed. After the first condition, if you want to add another condition, you use else if. For multiple conditions, you use else for the final fallback.

let average = 85;

if (average < 50) {
  document.write("Failed " + "<br/>");
} else if (average >= 50 && average <= 64) {
  document.write("Passed " + "<br/>");
} else if (average >= 65 && average <= 84) {
  document.write("Received Commendation " + "<br/>");
} else {
  document.write("Received Distinction " + "<br/>");
}

// todo: Have the PC generate a random number between 0 and 100. Then get a number from the user. If the user's number matches the random number, display 'Numbers are equal'. Otherwise, display 'Numbers are not equal'.

// 1-) Generate a random number

const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

// 2-) Get a number from the user

let userGuess = Number(prompt("Enter a number between 0-100:"));
console.log(userGuess);

// 3-) Compare the user's guess with the random number

if (randomNumber == userGuess) {
  console.log("Numbers are equal.");
} else {
  console.log("Numbers are not equal. " + "Random number: " + randomNumber);
}
