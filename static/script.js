document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform client-side validation here

    // Simulate a simple login (replace with your actual authentication logic)
    if (username === "your_username" && password === "your_password") {
      window.location.href = "/dashboard"; // Redirect to the dashboard page
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
});
