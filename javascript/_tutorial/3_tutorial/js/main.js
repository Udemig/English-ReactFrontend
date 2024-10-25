// main.js

import { usersData } from "./second.js";
import {introducePerson} from "./helper.js";
import { fetchUser } from "./api.js";

// Ensure your HTML has a container element with id 'container'
const container = document.getElementById('container');

// * For...in Loop

// This loop is used to iterate over the properties of an object one by one.

let student = {
  name: "Ali",
  surname: "Gok",
  age: 35,
  country: "Turkey",
};

for (const key in student) {
  container.innerHTML += `Student: ${student[key]}<br/>`;
}
container.innerHTML += "-----------------------------------<br/>";

// * For...of Loop

// This loop is used to iterate over the elements of an array one by one.

let numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  container.innerHTML += `Number: ${number}<br/>`;
}
container.innerHTML += "-----------------------------------<br/>";

// * Set Structure

// This structure is used to create collections that do not accept duplicate values and ensure each element is unique.

const people = new Set(["Yusuf", "Ahmet", "Erhan", "Selda"]);

people.add("Cihan");
people.add("Ahmet"); // Duplicate, will not be added
people.add("Emine");
people.add(44); // Mixed data type

// * Map Structure

// This structure is used to store key-value pairs.

const students = new Map([
  ["Yusuf", 44],
  ["Selda", 67],
  ["Humay", 423],
  ["Metin", 45],
]);

students.set("Yusuf", 34); // Updates existing key
students.set("Ahmet", 34); // Adds new key

for (const [name, score] of students) {
  container.innerHTML += `Element: ${score}<br/>`;
}
container.innerHTML += "-----------------------------------<br/>";

// * JavaScript Hoisting

// JavaScript first reads the variable declarations and sets them to 'undefined' before executing the code line by line. This process is known as hoisting.

// console.log(age);

// var age = 22;

// console.log(age);

// * Template Literals (Backticks)

// Using template literals for easier string interpolation.

let fullName = "John Doe";

container.innerHTML += `1-) Classic: My name is ${fullName}, what is your name?<br/>`;
container.innerHTML += `2-) Backtick: My name is ${fullName}, what is your name?<br/>`;

// * Try-Catch Structure

// This structure is used to control the process when performing an operation. The 'try' block contains the code for the desired operation. If an error occurs during this process, the 'catch' block handles it based on the error. Additionally, any code that should run regardless of the outcome is placed in the 'finally' block.

try {
  container.innerHTML += `Processing...<br/>`;
  throw "Operation Failed!!";
} catch (error) {
  container.innerHTML += `Error: ${error}<br/>`;
} finally {
  container.innerHTML += `Operation completed.<br/>`;
}
container.innerHTML += "-----------------------------------<br/>";

// * JavaScript Scope

// The concept of 'scope' in JavaScript determines where a variable or function is accessible. Fundamentally, scopes can be divided into two:

// * 1-) Global Scope: A variable or function that is accessible throughout the entire file.
// * 2-) Local Scope: A variable or function that is only accessible within the block of code it was defined in.

let userName = "John Doe";
container.innerHTML += `User Name: ${userName}<br/>`;

function introduceUser() {
  let user = "Kadir Berke";
  container.innerHTML += `User Name: ${user}<br/>`;
  container.innerHTML += `User Name-1: ${userName}<br/>"`;
}
introduceUser();
// container.innerHTML += `User Name: ${user}<br/>`;

// Note: Global variables are accessible everywhere, while local variables are only accessible within their specific scope.

function getUserName() {
  let localName = "Selda Evren";
  return localName;
}

// console.log(getUserName());
container.innerHTML += "-----------------------------------<br/>";

// ? Revisiting Predefined Functions, Let's also touch on Arrow Functions

// * Arrow Function
// const exampleFunction = () => {};
const addOperation = (a, b) => a + b;
// console.log(addOperation(44, 98));
let result = addOperation(12, 35);
// console.log(result);

const displayActiveUser = (name) => {
  container.innerHTML += `Active User: ${name}<br/>`;
};
displayActiveUser("Ali Gok");
container.innerHTML += "-----------------------------------<br/>";

// * JavaScript Objects

const person = {
  name: "Mehmet",
  surname: "YILMAZ",
  age: 22,
  nationality: "Turkey",
  counter: 0,
  // increase: function(){
  //   this.counter++;
  // }
};

// Object.values creates an array of the object's values
let personArray = Object.values(person);

container.innerHTML += `Person Array: ${personArray}<br/>`;
container.innerHTML += `Person Name: ${person.name}<br/>`;

// Object.defineProperty is used to add a property to an object
Object.defineProperty(person, "increase", {
  get: function () {
    this.counter++;
  },
});
container.innerHTML += `Person Counter: ${person.counter}<br/>`;
person.increase;
container.innerHTML += `Person Counter: ${person.counter}<br/>`;

// Preventing modification of the 'name' property
Object.defineProperty(person, "name", { writable: false });
// The above line prevents the 'name' property of the object from being modified
person.name = "Sara";
container.innerHTML += `Person Name: ${person.name}<br/>`;

Object.defineProperty(person, "school", {
  get: function () {
    return "Udemig";
  },
});
container.innerHTML += `School: ${person.school}<br/>`;

function SpecialPerson(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
}

const newPerson = new SpecialPerson("John", "Doe", 22);
container.innerHTML += `Special Person Name: ${newPerson.name}<br/>`;
container.innerHTML += `Special Person Surname: ${newPerson.surname}<br/>`;
container.innerHTML += `Special Person Age: ${newPerson.age}<br/>`;

newPerson.nationality = "Turkish";
container.innerHTML += `Special Person Nationality: ${newPerson.nationality}<br/>`;
container.innerHTML += "-----------------------------------<br/>";

// * JavaScript Inheritance Within Objects

const person1 = {
  callPerson: function (country, number) {
    container.innerHTML += `Name: ${this.name} ${this.surname}, Country: ${country}, Number: ${number}<br/>`;
  },
};

const person2 = {
  name: "Yusuf",
  surname: "YAMAN",
};

// The call and apply methods execute functions based on external values. The difference is that call accepts arguments individually, while apply accepts them as an array.
person1.callPerson.call(person2, "Turkey", 44);

const person3 = {
  name: "Hatice",
  surname: "Bulbul",
};

person1.callPerson.apply(person3, ["Sweden", 30]);

// * JavaScript Module Structure

// Similar to modular file usage in SCSS, we can use modules in JavaScript using the export-import system. Structures created in files other than the main JS file are exported to make them available externally. To specify which JS file is the main one in a project with multiple JS files, add type='module' to the script tag in the HTML.

console.log(usersData);

introducePerson();

fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((res) => res.json())
  .then((res) => console.log(res));

fetchUser();
