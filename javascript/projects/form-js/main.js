document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation (check if inputs are not empty)
    if (name && email && message) {
      // Show success message
      document.getElementById("successMessage").classList.remove("hidden");

      // Clear form fields
      document.getElementById("contactForm").reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
