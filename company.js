// Mobile Menu Toggle (reusable)
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Company Card "View Jobs" Demo
const viewButtons = document.querySelectorAll('.company-card button');
viewButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Redirect to Jobs Page for this company (Demo)");
  });
});