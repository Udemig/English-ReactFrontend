// console.log(`Hello JavaScript`);

// JavaScript setTimeout and setInterval
// These two functions are used to handle time-dependent operations.

// setTimeout
// Used to execute a function after a specified delay.
// setTimeout(() => {
//   document.write(`setTimeout executed! <br/>`);
// }, 2000);
// setTimeout(()=>{
//   console.log('Im here ')
// }, 5000)
// Use Case:
// setTimeout is like setting an alarm. For example, "Wake me up after 10 minutes."

// setInterval
// // Used to execute a function repeatedly at specified intervals.
// setInterval(() => {
//   document.write(`setInterval executed! <br/>`);
// }, 2000);
// setInterval(() => {
//   console.log("breaktime executed")
// }, 3000);

// Use Case:
// setInterval is used to perform a task continuously at defined time intervals.
////////////////////////////////////////////////////////////////
// JavaScript Promises
// Promises are used to manage asynchronous operations in JavaScript.

// What is a Promise?
// A Promise represents an asynchronous operation that may complete in the future. It's useful when the duration of an operation is unknown.

// A Promise can be either:

// Resolved: The operation completed successfully.
// Rejected: The operation failed.

// Example of a Promise
// const operation1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.write(`Operation 1 is in progress... <br/>`);
//       const hasError = false;
//       if (hasError) {
//         reject(`An error occurred during Operation 1`);
//       } else {
//         resolve(`Operation 1 completed successfully!`);
//       }
//     }, 2000);
//   });
// };

// Usage
// operation1()
//   .then((message) => {
//     setTimeout(() => {
//       document.write(`${message} <br/>`);
//     }, 1000);
//   })
//   .catch((error) => {
//     document.write(`${error} <br/>`);
//   });
/* Analogy:
Promises can be compared to ordering a pizza. If the pizza is delivered, 
you receive a "Pizza delivered!" message; otherwise, you get a "Pizza delivery failed!" message. 
The subsequent actions depend on whether the pizza was delivered.
*/

// async / await
// The async/await syntax is used to handle asynchronous operations more comfortably.

// How It Works
// By default, functions execute all code simultaneously. If you have asynchronous operations, you need to inform the function to handle them properly.

// async: Placed before a function to indicate that it returns a Promise.
// await: Placed before a Promise to wait for its resolution before proceeding.

// Example
// const fetchData = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Data fetched successfully!`);
//     }, 2000);
//   });
// };


// const displayData = async () => {
//   document.write(`Fetching data... <br/>`);
//   const data = await fetchData();
//   console.log(data);
// };

// Usage
// displayData();
////////////////////////////////////////////////////////////////
// JavaScript Classes
// Classes are templates for creating objects with predefined properties and methods.

// Basic Class Example
class Car {
  // The constructor is a special method for initializing objects
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  introduce() {
    return `Car: ${this.brand} ${this.model} ${this.year}`;
  }
}
class Fruits {
  constructor(color, taste){
    this.color = color;
    this.taste=taste;
  }
intro2() {
  return `Fruits: ${this.color} ${this.taste}`;
}
}

// Creating an instance of the class
const car1 = new Car("Toyota", "Corolla", 2024);

console.log(car1);
console.log(car1.introduce());
//Inheritance with extends and super
class ElectricCar extends Car {
  constructor(brand, model, year, battery) {
    super(brand, model, year);
    this.battery = battery;
  }

  displayBattery() {
    return `Battery Capacity: ${this.battery} kWh`;
  }
}

const tesla = new ElectricCar("Tesla", "Model 3", 2020, 75);
console.log(tesla);
console.log(tesla.displayBattery());

// Creating a Person Class
// Task: Create a Person class that accepts firstName, lastName, and age. 
// Include a method studentInfo that returns these details.
// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   studentInfo() {
//     return `Person: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
//   }
// }

// const individual = new Person("Neval", "Durmaz", 30);

// console.log(individual);
// console.log(individual.studentInfo());
// ////////////////////////////////////////////////////////////////////////
// // Fetch API
// // The Fetch API is used to retrieve data from APIs.

// // Fetching Users
// const fetchUsers = async () => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//   const data = await response.json();
//   return data;
// };

// // Usage
// fetchUsers().then(users => console.log(users));
// // Fetching Posts
// // Task: Fetch posts data from the JSONPlaceholder API and log it to the console.
// const fetchPosts = async () => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
//   const posts = await response.json();
//   console.log(posts);
// };

// // Usage
// fetchPosts();
// // Rendering Users to the DOM
// // Task: Use the renderUsers function to display fetched users on the webpage.
// const renderUsers = async () => {
//   const users = await fetchUsers();
//   users.forEach((user) => {
//     document.write(`User Name: ${user.name} <br/>`);
//   });
// };

// // Usage
// renderUsers();
//////////////////////////////////////////////////////////////////////
// DOM (Document Object Model)
// The DOM represents the HTML elements of a webpage, allowing JavaScript to manipulate them.

// Accessing Elements
// By Tag Name
const headings = document.getElementsByTagName("h1");
console.log(headings);
// By Class Name
const titleElements1 = document.getElementsByClassName("title"); // .title #title
console.log(titleElements);
// By ID
const titleElements2 = document.getElementsByClassName("title");
console.log(titleElements);
// Using querySelector
const paragraph = document.querySelector(".paragraph");
const specificParagraph = document.querySelector("#paragraph1");
console.log(paragraph, specificParagraph);
// Manipulating Elements
// Styling Elements
paragraph.style.backgroundColor = "red";
paragraph.style.color = "yellow";
paragraph.style.padding = "20px";
paragraph.style.fontSize = "40px";

// Alternative Approach:
// Instead of directly styling, add or remove CSS classes for better manageability.

paragraph.classList.add("text"); // Adds the "text" class
paragraph.classList.remove("text"); // Removes the "text" class
console.log(paragraph.classList.contains("text")); // Checks if "text" class exists

// Adding Event Listener to Toggle Class

const toggleClassButton = document.querySelector(".add-class");
toggleClassButton.addEventListener("click", () => {
  paragraph.classList.toggle("text");
});
// Changing Content
// innerHTML: Modify both text and HTML within an element.

// udemigText.innerHTML = `<button>Udemig Button</button>`;
// innerText: Update only the text content of an element.

// EmaartechText.innerText = `Yusuf YAMAN`;
// textContent: Also updates the text content.
paragraph.textContent = "Hello JavaScript";
// Event Listeners (addEventListener)
// Event listeners are used to execute functions in response to user interactions or other events.

// Basic Usage
const alertButton = document.querySelector("#alert-btn");

alertButton.addEventListener("click", () => {
  alert("Button clicked!");
});

// Common Events:

// click – When an element is clicked.
// submit – When a form is submitted.
// load – When the page or an element is loaded.
// mouseenter – When the mouse enters an element.
// mouseleave – When the mouse leaves an element.
// focus – When an element gains focus.
// Adding and Removing Classes on Button Click
// Task: Toggle a class on an element when a button is clicked.

const changeColorButton = document.querySelector("#change-color");
const wrapper = document.querySelector(".wrapper");

changeColorButton.addEventListener("click", () => {
  wrapper.classList.toggle("red");
});
// Implementing Light/Dark Mode
// Task: Toggle between light and dark themes when a button is clicked.

const changeThemeButton = document.querySelector(".change-theme");

changeThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
// Adding and Removing DOM Elements
// Adding Elements
// Use createElement to create a new element and appendChild to add it to the DOM.

const container = document.querySelector(".container");
const addButton = document.querySelector("#add");
const removeButton = document.querySelector("#remove");

const addDiv = () => {
  const newDiv = document.createElement("div"); // Create a new div
  newDiv.innerText = "New Div"; // Set its content
  newDiv.classList.add("center-text"); // Add a class
  container.appendChild(newDiv); // Append to container
};

addButton.addEventListener("click", addDiv);

// Removing Elements
// Use removeChild or remove to delete elements. remove is the more modern method.

const removeDiv = () => {
  if (container.lastChild) {
    container.removeChild(container.lastChild);
    // Alternatively: container.lastChild.remove();
  }
};

removeButton.addEventListener("click", removeDiv);

// Handling Forms
// Preventing Default Form Submission
// When a form is submitted, the page reloads by default. To handle the form data without reloading, use preventDefault().

const form = document.querySelector(".form");

const sendForm = (e) => {
  e.preventDefault(); // Prevents page reload
  const name = e.target[0].value;
  const surname = e.target[1].value;
  console.log(name, surname);
};

form.addEventListener("submit", sendForm);



