// Mobile Menu Toggle (reusable)
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Example: Job Card "Apply Now" Button Demo
const applyButtons = document.querySelectorAll('.job-card button');
applyButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Applied for the job! (Demo)");
  });
});