// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Example: existing account
const existingEmail = "user@example.com";

const signupForm = document.getElementById("signupForm");
const signupError = document.getElementById("signupError");

signupForm.addEventListener("submit", function(e){
  e.preventDefault(); // prevent reload

  const email = document.getElementById("signupEmail").value;

  if(email === existingEmail){
    signupError.textContent = "Email already exists!";
  } else {
    window.location.href = "404.html"; // new account → redirect to 404
  }
});