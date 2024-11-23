// crud- create, read, update, delete: to do app, social media post
// Select necessary DOM elements
const form = document.querySelector(".form-container");
const input = document.querySelector(".input-container input");
const itemsContainer = document.querySelector(".items-container .item-list");
const clearBtn = document.querySelector(".clear-btn");
// console.log(input)
// console.log()
// Array to store the list of todos
let todos = [];
// console.log(todos)
// ****************************
// todo = [1, 2, 3  ]
// todo = {name: "afddas", desc: "hgfdfg", age: 5, isDone : true}

// Function to render todos in the DOM
function renderTodos() {
  // Clear the existing items
  itemsContainer.innerHTML = "";

  // Loop through the todos array and create HTML for each item
  todos.forEach((todo, index) => {
    // Create a container for the todo item
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    // Add the todo text
    const todoText = document.createElement("p");
    todoText.textContent = todo;
    itemDiv.appendChild(todoText);
    // console.log(todoText)
    // Create a container for the action buttons
    const actions = document.createElement("div");
    actions.classList.add("actions-icons");
    // Add the edit button
    const editBtn = document.createElement("button");
    editBtn.classList.add("i-edit");
    editBtn.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
    editBtn.addEventListener("click", () => editTodo(index));
    actions.appendChild(editBtn);

    // Add the delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("i-delete");
    deleteBtn.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
    deleteBtn.addEventListener("click", () => deleteTodo(index));
    actions.appendChild(deleteBtn);
    // Add the buttons container to the item container
    itemDiv.appendChild(actions);
    // Add the item container to the list
    itemsContainer.appendChild(itemDiv);
  });
}
////////////
// Function to add a new todo
function addTodo(e) {
  // Prevent the default form submission behavior
  e.preventDefault();
  const newTodo = input.value; // Get the input value and remove extra spaces
  // console.log(newTodo)
  if (!newTodo) {
    alert("Please enter a todo!"); // Alert the user if the input is empty
    return;
  }
  // Add the new todo to the array
  todos.push(newTodo);
  // Clear the input field
  input.value = "";
  // console.log(todos)
  renderTodos(); // Re-render the list
}

////////////////////////////////
// Function to delete a todo by its index
function deleteTodo(index) {
  // Remove the todo from the array
  todos.splice(index, 1);
  renderTodos(); // Re-render the list
}

////////////////////////////////
// Function to edit a todo by its index
function editTodo(index) {
  const updatedTodo = prompt("Edit your todo :", todos[index]); // Prompt the user for a new value
  if (updatedTodo !== null && updatedTodo.trim() !== "") {
    todos[index] = updatedTodo.trim();
    renderTodos(); // Re-render the list
  }
}

// Add event listeners
form.addEventListener("submit", addTodo);
clearBtn.addEventListener("click", clearTodos);

// Function to clear all todos
function clearTodos() {
  todos = []; // Reset the todos array
  renderTodos(); // Re-render the list
}


