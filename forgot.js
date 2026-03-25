// Mobile Menu Toggle (reusable)
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Forgot Password Form (Demo)
document.getElementById("forgotForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Password reset link sent! (Demo)");
});