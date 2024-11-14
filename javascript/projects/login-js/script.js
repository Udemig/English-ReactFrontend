function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required.";
        return false;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters.";
        return false;
    }

    errorMessage.textContent = ""; // Clear error message if validation passes
    alert("Login successful!");
    return true;
}


// Handle "Forgot Password" and "Sign Up" link clicks
document.getElementById("forgotPassword").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    alert("Redirecting to the Forgot Password page!");
    // In real application, redirect to Forgot Password page here
});

document.getElementById("signUp").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    alert("Redirecting to the Sign Up page!");
    // In real application, redirect to Sign Up page here
});
