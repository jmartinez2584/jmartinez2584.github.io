// Smooth scrolling navigation
document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("formMessage").innerText =
    "Message sent successfully (demo only — no backend connected).";

  this.reset();
});