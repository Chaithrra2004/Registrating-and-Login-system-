// script.js

// Save user on registration
function registerUser(event) {
  event.preventDefault();
  const username = document.getElementById("reg-username").value;
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;
  const confirmPassword = document.getElementById("reg-confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const user = {
    username: username,
    email: email,
    password: password
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Registration successful!");
  window.location.href = "login.html";
}


// Login function
function loginUser(event) {
  event.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    localStorage.setItem("loggedInUser", username);  // important!
    alert("Login successful!");
    window.location.href = "welcome.html";
  } else {
    alert("Invalid credentials. Try again.");
  }
}
