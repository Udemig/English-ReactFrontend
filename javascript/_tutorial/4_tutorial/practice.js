// Exercise 1: Using setTimeout
// Problem:
// Create a function that displays an alert saying "Hello after 3 seconds!" exactly 3 seconds after the page loads.
// Solution:

window.onload = () => {
  setTimeout(() => {
    alert("Hello after 3 seconds!");
  }, 3000); // 3000 milliseconds = 3 seconds
};
// Explanation:

// The window.onload event ensures the function runs after the page fully loads.
// setTimeout is used to delay the execution of the alert by 3000 milliseconds (3 seconds).

// Exercise 2: Using setInterval
// Problem:
// Create a function that logs the current time to the console every second.

// Solution:

const logCurrentTime = () => {
  setInterval(() => {
    const now = new Date();
    console.log(`Current Time: ${now.toLocaleTimeString()}`);
  }, 1000); // 1000 milliseconds = 1 second
};

logCurrentTime();
// Explanation:
// setInterval is used to execute the provided function every 1000 milliseconds (1 second).
// The function retrieves the current time using Date and logs it in a readable format.

// Exercise 3: Promises with Resolve and Reject
// Problem:
// Create a function checkNumber that returns a Promise. If the input number is greater than 10, resolve the promise with "Number is greater than 10".
// Otherwise, reject it with "Number is 10 or less".

// Solution:

const checkNumber = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve("Number is greater than 10");
    } else {
      reject("Number is 10 or less");
    }
  });
};

// Usage Example:
checkNumber(15)
  .then((message) => console.log(message)) // Outputs: Number is greater than 10
  .catch((error) => console.error(error));

checkNumber(8)
  .then((message) => console.log(message))
  .catch((error) => console.error(error)); // Outputs: Number is 10 or less
//Explanation:
// The checkNumber function creates a new Promise.
// It checks if the provided number is greater than 10.
// Depending on the condition, it either resolves or rejects the Promise with an appropriate message.

// Exercise 4: Async/Await with Fetch API
// Problem:
// Create an asynchronous function fetchUserData that fetches user data from
// https://jsonplaceholder.typicode.com/users/1 and logs the user's name to the console.

// Solution:

const fetchUserData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const user = await response.json();
    console.log(`User Name: ${user.name}`);
  } catch (error) {
    console.error(`Failed to fetch user data: ${error.message}`);
  }
};

// Invoke the function
fetchUserData();
// Explanation:
// The fetchUserData function is declared as async to use await.
// It fetches data from the provided URL.
// If the response is successful, it parses the JSON and logs the user's name.
// Errors during the fetch or parsing process are caught and logged.

// Exercise 5: Creating and Using Classes
// Problem:
// Define a Rectangle class with width and height properties. Add a method area that returns the area of the rectangle.
// Create an instance with width 5 and height 10, then log its area.

// Solution:

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

// Create an instance
const myRectangle = new Rectangle(5, 10);

// Log the area
console.log(`Area of Rectangle: ${myRectangle.area()}`); // Outputs: Area of Rectangle: 50

// Explanation:
// The Rectangle class has a constructor that initializes width and height.
// The area method calculates and returns the area.
// An instance myRectangle is created with specified dimensions, and its area is logged.

// Exercise 6: DOM Manipulation - Changing Styles
// Problem:
// Select a paragraph with the class .paragraf and change its background color to blue and text color to white when a button with the ID #change-color is clicked.

// Solution:

// Select elements
const changeColorButton = document.getElementById("change-color");
const paragraph1 = document.querySelector(".paragraf");

// Add event listener
changeColorButton.addEventListener("click", () => {
  paragraph.style.backgroundColor = "blue";
  paragraph.style.color = "white";
});

// Explanation:
// The button and paragraph elements are selected using getElementById and querySelector.
// An event listener is added to the button to change the paragraph's styles upon a click.

// Exercise 7: Event Listeners - Toggle Class
// Problem:
// When a button with the class .add-class is clicked,
// toggle the class highlight on a heading with the ID #başlık1.

// Solution:

// Select elements
const toggleClassButton = document.querySelector(".add-class");
const heading = document.getElementById("başlık1");

// Add event listener
toggleClassButton.addEventListener("click", () => {
  heading.classList.toggle("highlight");
});

// Explanation:
// The button and heading elements are selected.
// The toggle method adds the highlight class if it's not present, or removes it if it is, each time the button is clicked.

// Exercise 8: Fetch API - Render Users
// Problem:
// Fetch a list of users from https://jsonplaceholder.typicode.com/users and display their names in an unordered list (<ul>) inside a div with the class .user-list.

// Solution:

// <!-- HTML Structure -->
// <div class="user-list">
//   <h2>User List</h2>
//   <ul id="users"></ul>
// </div>

// JavaScript Code
const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.status}`);
    }
    const users = await response.json();
    renderUsers(users);
  } catch (error) {
    console.error(error);
  }
};

const renderUsers = (users) => {
  const usersList = document.getElementById("users");
  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = user.name;
    usersList.appendChild(listItem);
  });
};

// Invoke the function
fetchUsers();

// Explanation:
// The fetchUsers function retrieves user data from the API.
// Upon successful fetch, renderUsers creates list items for each user and appends them to the <ul> element.

// Exercise 9: Form Handling - Prevent Default and Display Input
// Problem:
// Create a form with two input fields for "Name" and "Email".
// When the form is submitted, prevent the default action and display the entered name and email below the form without reloading the page.

// Solution:

// <!-- HTML Structure -->
// <form class="user-form">
//   <h2>Register</h2>
//   <input type="text" id="name" placeholder="Enter your name" required />
//   <input type="email" id="email" placeholder="Enter your email" required />
//   <button type="submit">Submit</button>
// </form>

// <div class="output">
//   <h3>User Information:</h3>
//   <p id="display-name"></p>
//   <p id="display-email"></p>
// </div>

// JavaScript Code
const form = document.querySelector(".user-form");
const displayName = document.getElementById("display-name");
const displayEmail = document.getElementById("display-email");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload

  // Get input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Display the values
  displayName.textContent = `Name: ${name}`;
  displayEmail.textContent = `Email: ${email}`;

  // Optionally, reset the form
  form.reset();
});

// Explanation:
// The form captures user input for name and email.
// On submission, the event listener prevents the default form action (page reload).
// It retrieves the input values and displays them in designated <p> elements.
// The form is then reset for new entries.

// Exercise 10: Creating and Removing DOM Elements
// Problem:
// Implement two buttons: "Add Item" and "Remove Item". When "Add Item" is clicked,
// create a new <div> with the text "New Item" inside a container with the class .item-container.
// When "Remove Item" is clicked, remove the last added item from the container.

// Solution:

// <!-- HTML Structure -->
// <div class="controls">
//   <button id="add-item">Add Item</button>
//   <button id="remove-item">Remove Item</button>
// </div>
// <div class="item-container"></div>

// JavaScript Code
const addItemButton = document.getElementById("add-item");
const removeItemButton = document.getElementById("remove-item");
const itemContainer = document.querySelector(".item-container");

addItemButton.addEventListener("click", () => {
  const newDiv = document.createElement("div");
  newDiv.textContent = "New Item";
  newDiv.classList.add("item");
  itemContainer.appendChild(newDiv);
});

removeItemButton.addEventListener("click", () => {
  if (itemContainer.lastChild) {
    itemContainer.removeChild(itemContainer.lastChild);
  } else {
    alert("No more items to remove!");
  }
});

// Explanation:
// The "Add Item" button creates a new <div> with the text "New Item" and appends it to the .item-container.
// The "Remove Item" button removes the last child from the .item-container. If there are no items, it alerts the user.
// Adding the item class allows for potential styling via CSS.
// Additional Notes and Best Practices
// Error Handling:
// Always include error handling, especially when dealing with asynchronous operations like fetch.
// This ensures that your application can gracefully handle unexpected issues.

// Accessibility:
// Ensure that interactive elements like buttons are accessible. Use semantic HTML and ARIA attributes where necessary.

// Clean Code:
// Keep your code organized and commented. This makes it easier to understand and maintain, especially in larger projects.

// CSS Classes:
// When manipulating classes via JavaScript, ensure that the corresponding CSS is defined to reflect the changes visually.

// Avoid Inline Event Handlers:
// While the exercises above may use inline event handlers for simplicity, it's generally better to attach event listeners using JavaScript to keep HTML and JavaScript separate.
