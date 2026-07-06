<<<<<<< HEAD
<<<<<<< HEAD
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("formMessage").innerText =
    "Message sent successfully (demo only — no backend connected).";

  this.reset();
});
=======
document.querySelectorAll('nav a').forEach(a=>a.onclick=e=>{e.preventDefault();document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});});
>>>>>>> f68aeb19458d426152cb53e6e5d97abeb4465cc5
=======
document.querySelectorAll('nav a').forEach(a=>a.onclick=e=>{e.preventDefault();document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});});
>>>>>>> f68aeb19458d426152cb53e6e5d97abeb4465cc5
