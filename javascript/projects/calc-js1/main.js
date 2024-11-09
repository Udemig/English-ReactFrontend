let displayValue = "0";

// Update the display
function updateDisplay() {
  document.getElementById("display").textContent = displayValue;
}

// Append a number to the display
function appendNumber(number) {
  if (displayValue === "0") {
    displayValue = number.toString();
  } else {
    displayValue += number;
  }
  updateDisplay();
}

// Append an operator to the display
function appendOperator(operator) {
  if (!/[\+\-\*\/]$/.test(displayValue)) {
    displayValue += operator;
  }
  updateDisplay();
}

// Append a decimal point
function appendDot() {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
  updateDisplay();
}

// Clear the display
function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

// Delete the last character
function deleteLast() {
  displayValue = displayValue.slice(0, -1) || "0";
  updateDisplay();
}

// Calculate the result
function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = "Error";
  }
  updateDisplay();
}
