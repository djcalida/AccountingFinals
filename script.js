const validUsername = "admin";
const validPassword = "admin";

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get username and password values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Check if username and password are correct
  if (username === validUsername && password === validPassword) {
    // Redirect to another page upon successful login
    window.location.href = "home.html"; // Replace 'welcome.html' with the desired destination
  } else {
    // Display error message for incorrect credentials
    document.getElementById("error-message").innerText = "Invalid username or password. Please try again.";
  }
});
