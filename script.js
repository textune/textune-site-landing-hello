const separator = document.querySelector(".logo-separator");
if (separator) {
  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer2.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  observer2.observe(separator);
}



// Animacja scrollowa – Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".fade-in, .slide-up").forEach(el => observer.observe(el));
