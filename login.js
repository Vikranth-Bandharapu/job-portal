// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Login credentials (example)
const correctEmail = "user@example.com";
const correctPassword = "123456";

const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

loginForm.addEventListener("submit", function(e){
  e.preventDefault(); // prevent page reload

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if(email === correctEmail && password === correctPassword){
    window.location.href = "404.html"; // correct → 404 placeholder
  } else {
    loginError.textContent = "Invalid email or password!";
  }
});