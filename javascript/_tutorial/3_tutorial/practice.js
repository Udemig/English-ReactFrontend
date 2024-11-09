// Exercise 1: For...in Loop with Objects
// Task:
// Create an object named car with the properties make, model, year, and color.
// Use a for...in loop to iterate over the properties of the car object and display each key-value pair inside a container element with the id output.
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Exercise 1</title>
</head>
<body>
  <div id="output"></div>
  <script src="exercise1.js"></script>
</body>
</html> */

// Define the car object
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Blue",
    isWorking: false
  };
  
  // Select the container
  const output1 = document.getElementById('output');
  
  // Use for...in loop to iterate over car properties
  for (const key in car) {
    if (car.hasOwnProperty(key)) { // Optional: ensures only own properties are iterated
      output.innerHTML += `<strong>${key}:</strong> ${car[key]}<br/>`;
    }
  }
  
// Exercise 2: For...of Loop with Arrays
// Task:
// Define an array named languages containing at least five programming languages of your choice. 
// Use a for...of loop to iterate over the array and display each language inside a container element with the id output.
// exercise2.js

// Define the languages array
const languages = ["JavaScript", "Python", "Java", "C#", "Ruby", "Raha"];

// Select the container
const outpu2 = document.getElementById('output');

// Use for...of loop to iterate over the array
for (const language of languages) {
  output.innerHTML += `Language: ${language}<br/>`;
}

// Exercise 3: Working with Sets
// Task:
// Create a Set named uniqueNumbers containing the numbers [1, 2, 3, 4, 5]. Attempt to add duplicate numbers and different data types (e.g., a string and an object) to the set.
//  Display the contents of the set in a container with the id output.
// exercise3.js

// Initialize the Set with numbers 1 through 5
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);

// Attempt to add duplicate numbers and different data types
uniqueNumbers.add(3); // Duplicate
uniqueNumbers.add(5); // Duplicate
uniqueNumbers.add("6"); // String
uniqueNumbers.add({ number: 7 }); // Object

// Select the container
const output3 = document.getElementById('output');

// Display the contents of the set
output.innerHTML += `<strong>Contents of uniqueNumbers Set:</strong><br/>`;
uniqueNumbers.forEach(item => {
  output.innerHTML += `${item} (${typeof item})<br/>`;
});

// Exercise 4: Manipulating Maps
// Task:
// Create a Map named employeeRoles with at least four key-value pairs representing employee names and their roles. Update one of the existing roles and add a new employee-role pair. 
// Iterate over the map and display each employee and their role in a container with the id output.
// exercise4.js

// Initialize the Map with employee names and roles
const employeeRoles = new Map([
    ["Alice", "Developer"],
    ["Bob", "Designer"],
    ["Charlie", "Manager"],
    ["Diana", "QA Tester"]
  ]);
  
  // Update an existing role
  employeeRoles.set("Bob", "Senior Designer"); // Update Bob's role
  
  // Add a new employee-role pair
  employeeRoles.set("Ethan", "DevOps Engineer");
  
  // Select the container
  const output4 = document.getElementById('output');
  
  // Iterate over the map and display employee roles
  output.innerHTML += `<strong>Employee Roles:</strong><br/>`;
  for (const [name, role] of employeeRoles) {
    output.innerHTML += `${name}: ${role}<br/>`;
  }
  
// Exercise 5: Understanding Hoisting
// Task:
// Demonstrate JavaScript hoisting by writing code that attempts to log a variable before it's declared using var, let, and const. 
// Observe and note the differences in behavior for each declaration type. Display the results in the console.
// exercise5.js

console.log("=== Hoisting with var ===");
console.log("varVar before declaration:", varVar); // undefined
var varVar = "I am declared with var";

console.log("\n=== Hoisting with let ===");
try {
  console.log("letVar before declaration:", letVar); // ReferenceError
} catch (error) {
  console.log("Error:", error.message);
}
let letVar = "I am declared with let";

console.log("\n=== Hoisting with const ===");
try {
  console.log("constVar before declaration:", constVar); // ReferenceError
} catch (error) {
  console.log("Error:", error.message);
}
const constVar = "I am declared with const";

// Exercise 6: Template Literals and String Interpolation
// Task:
// Create variables firstName, lastName, and age. Use template literals to create a string that introduces the person (e.g., "Hello, my name is John Doe and I am 30 years old.") 
// and display it inside a container with the id output.
// exercise6.js

// Define the variables
const firstName = "John";
const lastName = "Doe";
const age = 30;

// Select the container
const output = document.getElementById('output');

// Create the introduction string using template literals
const introduction = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;

// Display the introduction
output.innerHTML = introduction;

// Exercise 7: Try-Catch-Finally Error Handling
// Task:
// Write a function parseJSON that takes a JSON string as input and attempts to parse it using JSON.parse. 
// Use a try-catch-finally block to handle any errors that occur during parsing. If parsing is successful, display the resulting object; 
// if an error occurs, display an error message. In the finally block, display a message indicating that the parsing process has completed. Output all messages inside a container with the id output.
// exercise7.js

// Define the parseJSON function
function parseJSON(jsonString) {
    const output = document.getElementById('output');
    try {
      output.innerHTML += `Attempting to parse JSON: ${jsonString}<br/>`;
      const parsedData = JSON.parse(jsonString);
      output.innerHTML += `<strong>Parsed Object:</strong> ${JSON.stringify(parsedData)}<br/>`;
    } catch (error) {
      output.innerHTML += `<strong>Error:</strong> ${error.message}<br/>`;
    } finally {
      output.innerHTML += `Parsing process completed.<br/><br/>`;
    }
  }
  
  // Test with valid JSON
  const validJSON = '{"name": "Alice", "age": 25, "city": "Wonderland"}';
  parseJSON(validJSON);
  
  // Test with invalid JSON
  const invalidJSON = '{"name": "Bob", "age": 30, "city": "Builderland"'; // Missing closing brace
  parseJSON(invalidJSON);
  
//   Exercise 8: Scope and Variable Accessibility
//   Task:
//   Create a global variable globalVar and a function displayVariables that defines a local variable localVar. Inside the function, attempt to log both globalVar and localVar. Outside the function, attempt to log both variables. 
//   Observe and explain the results. Display the accessible variables in the console.
// exercise8.js

// Declare a global variable
var globalVar = "I am a global variable";

// Define the function
function displayVariables() {
  // Declare a local variable
  let localVar = "I am a local variable";
  
  console.log("Inside displayVariables():");
  console.log("globalVar:", globalVar); // Accessible
  console.log("localVar:", localVar);   // Accessible
}

// Call the function
displayVariables();

// Attempt to log variables outside the function
console.log("\nOutside displayVariables():");
console.log("globalVar:", globalVar); // Accessible

try {
  console.log("localVar:", localVar); // Not accessible, ReferenceError
} catch (error) {
  console.log("Error:", error.message);
}
// Exercise 9: Object.defineProperty and Property Attributes
// Task:
// Create an object book with properties title, author, and pages. Use Object.defineProperty to add a read-only property ISBN and a getter for a property summary that returns a string summarizing the book's details. Attempt to modify the ISBN and observe the behavior. 
// Display the book's summary in a container with the id output.
// exercise9.js

// Define the book object
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180
  };
  
  // Use Object.defineProperty to add a read-only ISBN property
  Object.defineProperty(book, "ISBN", {
    value: "978-0743273565",
    writable: false,    // Read-only
    enumerable: true,
    configurable: false
  });
  
  // Define a getter for the summary property
  Object.defineProperty(book, "summary", {
    get: function() {
      return `${this.title} by ${this.author}, ${this.pages} pages. ISBN: ${this.ISBN}`;
    },
    enumerable: true
  });
  
  // Select the container
  const output = document.getElementById('output');
  
  // Display the book's summary
  output.innerHTML += `<strong>Book Summary:</strong> ${book.summary}<br/><br/>`;
  
  // Attempt to modify the ISBN
  output.innerHTML += `Attempting to modify ISBN from "${book.ISBN}" to "123-4567890123"...<br/>`;
  book.ISBN = "123-4567890123"; // This should fail silently or throw an error in strict mode
  
  // Display the ISBN after attempted modification
  output.innerHTML += `ISBN after modification attempt: "${book.ISBN}"<br/><br/>`;
  
  // Display the summary again to show no change
  output.innerHTML += `<strong>Book Summary After ISBN Modification Attempt:</strong> ${book.summary}<br/>`;
// Exercise 10: Constructor Functions and Inheritance with Call/Apply
// Task:
// Create a constructor function Animal that takes name and species as parameters. 
// Add a method describe to the Animal prototype that returns a description of the animal. Then, create another object dog with properties name and species. Use the call or apply method to borrow the describe method from Animal and apply it to the dog object. 
// Display the description in a container with the id output.
// exercise10.js

// Define the Animal constructor function
function Animal(name, species) {
    this.name = name;
    this.species = species;
  }
  
  // Add the describe method to Animal's prototype
  Animal.prototype.describe = function() {
    return `${this.name} is a ${this.species}.`;
  };
  
  // Create another object dog
  const dog = {
    name: "Buddy",
    species: "Dog"
  };
  
  // Use call to borrow the describe method from Animal and apply it to dog
  const dogDescription = Animal.prototype.describe.call(dog);
  
  // Select the container
  const output = document.getElementById('output');
  
  // Display the description
  output.innerHTML += `<strong>Dog Description:</strong> ${dogDescription}<br/>`;
  
  // Alternatively, using apply
  const cat = {
    name: "Whiskers",
    species: "Cat"
  };
  
  const catDescription = Animal.prototype.describe.apply(cat);
  output.innerHTML += `<strong>Cat Description:</strong> ${catDescription}<br/>`;
  ////////////////////////////////////////////////////////////////////////
  