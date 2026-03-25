// Mobile Menu Toggle (reusable)
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Edit Profile Button (Demo)
document.getElementById("editProfileBtn").addEventListener("click", () => {
  alert("Edit profile functionality coming soon! (Demo)");
});

// Applied Job Buttons (Demo)
const appliedButtons = document.querySelectorAll('.applied-jobs .job-card button');
appliedButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert("View job details functionality coming soon! (Demo)");
  });
});