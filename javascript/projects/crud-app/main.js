// Connection Check
// console.log("Hello JS");

// Edit Mode Variables
let editMode = false; // Determines if in edit mode
let editItem; // Element being edited
let editItemId; // ID of the element being edited

// Select elements from the HTML
const form = document.querySelector(".form-wrapper");
const input = document.querySelector("#input");
const itemList = document.querySelector(".item-list");
const alert = document.querySelector(".alert");
const addButton = document.querySelector(".submit-btn");
const clearButton = document.querySelector(".clear-btn");

// Functions

// Function to handle form submission
const addItem = (e) => {
  e.preventDefault(); // Prevent page refresh
  const value = input.value;
  if (value !== "" && !editMode) {
    // Generate a unique ID for each item
    const id = new Date().getTime().toString();
    createElement(id, value);
    setToDefault();
    showAlert("Item Added", "success");
    addToLocalStorage(id, value);
  } else if (value !== "" && editMode) {
    editItem.innerHTML = value;
    updateLocalStorage(editItemId, value);
    showAlert("Item Updated", "success");
    setToDefault();
  }
};

// Function to display an alert
const showAlert = (text, type) => {
  alert.textContent = text;
  alert.classList.add(`alert-${type}`);
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${type}`);
  }, 2000);
};

// Function to delete an item
const deleteItem = (e) => {
  const element = e.target.closest(".items-list-item");
  const id = element.dataset.id;
  itemList.removeChild(element);
  removeFromLocalStorage(id);
  showAlert("Item Deleted", "danger");

  // Hide clear button if no items remain
  if (!itemList.children.length) {
    clearButton.style.display = "none";
  }
};

// Function to edit an item
const editItems = (e) => {
  const element = e.target.closest(".items-list-item");
  editItem = element.querySelector(".item-name");
  input.value = editItem.innerText;
  editMode = true;
  editItemId = element.dataset.id;
  addButton.textContent = "Edit";
};

// Function to reset form to default state
const setToDefault = () => {
  input.value = "";
  editMode = false;
  editItemId = "";
  addButton.textContent = "Add";
};

// Function to render items on page load
const renderItems = () => {
  const items = getFromLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => createElement(item.id, item.value));
  }
};

// Function to create a new item element
const createElement = (id, value) => {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("data-id", id);
  newDiv.classList.add("items-list-item");

  newDiv.innerHTML = `
    <p class="item-name">${value}</p>
    <div class="btn-container">
      <button class="edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
      <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
    </div>
  `;

  // Add event listeners for edit and delete buttons
  newDiv.querySelector(".delete-btn").addEventListener("click", deleteItem);
  newDiv.querySelector(".edit-btn").addEventListener("click", editItems);

  itemList.appendChild(newDiv);
  showAlert("Item Added", "success");
};

// Function to clear all items
const clearItems = () => {
  const items = document.querySelectorAll(".items-list-item");
  if (items.length > 0) {
    items.forEach((item) => itemList.removeChild(item));
    clearButton.style.display = "none";
    showAlert("List Cleared", "danger");
    localStorage.removeItem("items");
  }
};

// Function to add item to local storage
const addToLocalStorage = (id, value) => {
  const item = { id, value };
  const items = getFromLocalStorage();
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
};

// Function to retrieve items from local storage
const getFromLocalStorage = () => {
  return localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
};

// Function to remove item from local storage
const removeFromLocalStorage = (id) => {
  let items = getFromLocalStorage();
  items = items.filter((item) => item.id !== id);
  localStorage.setItem("items", JSON.stringify(items));
};

// Function to update item in local storage
const updateLocalStorage = (id, newValue) => {
  let items = getFromLocalStorage();
  items = items.map((item) => {
    if (item.id === id) {
      return { ...item, value: newValue };
    }
    return item;
  });
  localStorage.setItem("items", JSON.stringify(items));
};

// Event Listeners
form.addEventListener("submit", addItem);
window.addEventListener("DOMContentLoaded", renderItems);
clearButton.addEventListener("click", clearItems);
