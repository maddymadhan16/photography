// Show alert when button is clicked
function showAlert() {
  alert("Hello! You clicked the button!");
}

// Form validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  // Optional: simple email validation
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Thanks for contacting us!");
  return true;
}