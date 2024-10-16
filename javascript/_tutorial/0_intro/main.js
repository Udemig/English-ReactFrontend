// * JavaScript is the most popular programming language in use today. 
// The main reason for this popularity is that we can develop both frontend, backend, and mobile applications with a single programming language. 
// Another reason is that it offers wide framework support.

/*
* JavaScript Output Methods: There are three methods used to provide output to the user in JavaScript.

? 1-) alert: This output method gives the user an alert via a popup window.

? 2-) console.log: It is used to provide output in the console section of the browser. 
The console is a structure that appears when you right-click > inspect in the browser. 
This part is preferred for connection checks and examining external data.

? 3-) document.write: We mentioned that the white area in the browser corresponds to the body tag in HTML. 
In JavaScript, the equivalent of the body section is 'document'. 
If we want to write something to this area, we can do it with the 'write' method.
*/

// alert("Hello, greetings from Udemig Academy JavaScript lesson !!!");

// console.log("Greetings from Udemig Academy");

document.write("Hello World !!!" + "<br/>");
// ! In programming, the plus sign (+) has two uses. 
// The first is to add numbers on the left and right, and the second is to concatenate text strings.
document.write("JavaScript Lesson-1" + "<br/>");

/* 
* JavaScript Variables:

* Variables in JavaScript are named storage areas used to store data. 
A variable can hold a value, and this value can change during the program's flow.

* JavaScript Variable Declaration:

* When declaring a variable, you choose one of the keywords 'var', 'let', or 'const' at the beginning. 
Then you leave a space and give the variable a name. This name should be related to the variable's value. 
After the name, you leave another space and use the '=' sign. 
On the right side of this sign, you write the value of the variable.

! Variable names can start with a letter, an underscore (_), or a dollar sign ($), but they cannot start with a number.
Variable names are case-sensitive. 
If a variable name consists of more than one word, it should be named in 'camelCase'. 
This means that the first word is written entirely in lowercase, and the first letter of every subsequent word is capitalized.

? Why do we use three different keywords to declare variables?

* 'var' is an older keyword used in earlier projects. 
In modern projects, 'let' and 'const' are preferred. 
The reason for this is that a variable declared with 'var' can be redeclared, which is why 'var' is not preferred.

? What is the difference between 'let' and 'const'?

* The most important difference between 'let' and 'const' is that a variable declared with 'let' can be changed later. 
However, a variable declared with 'const' cannot be changed.
*/

var courseName = "Udemig";
// var courseName = 335;

let firstName = "Raha";
// firstName = "YAMAN";
// let firstName = "MEHMET"; this usage would give a syntax error

var lastName = "Behnim";
const age = 22;
// age = 32;
// const age = 2345; this usage would give a syntax error

document.write(courseName + "<br/>");
document.write(firstName + "<br/>");
document.write(lastName + "<br/>");
document.write(age + "<br/>");

// ? Why did we declare numbers and text differently when declaring variables?

// * In JavaScript, text values are referred to as 'strings'. 
// Strings are enclosed in double quotes to distinguish them from numbers. 
// Numbers are simply written as they are, without the need for quotes, and they are referred to as 'numbers'.

let className = "11 Weekday Frontend";
const classSize = 28;

// ! To check the type of data, the 'typeof' method is used.
console.log(typeof className);
console.log(typeof classSize);
console.log(typeof "Yusuf YAMAN");
console.log(typeof 44);

// We said that the plus sign (+) adds numbers if they are on both sides or concatenates text. 
//Let's look at the usage of text and numbers side by side.

document.write(className + " class has " + classSize + " people." + "<br/>");
document.write(classSize + 44 + "<br/>");
