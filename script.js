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

// Scroll-triggered reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-in, .slide-up").forEach(el => observer.observe(el));

// // Scale-down on scroll to contact
// window.addEventListener("scroll", () => {
  // const img = document.querySelector(".scroll-shrink");
  // const contact = document.getElementById("contact");

  // if (img && contact) {
    // const contactTop = contact.getBoundingClientRect().top;
    // const windowHeight = window.innerHeight;

    // if (contactTop < windowHeight) {
      // const scale = Math.max(0.7, 1 - ((windowHeight - contactTop) / windowHeight) * 0.3);
      // img.style.transform = `scale(${scale})`;
    // } else {
      // img.style.transform = "scale(1)";
    // }
  // }
// });


document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const status = document.getElementById("form-status");

  const token = grecaptcha.getResponse();
  if (!token) {
    status.textContent = "Please complete the CAPTCHA.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Sending...";
  status.style.color = "#333";

  emailjs.sendForm('service_fkj1yve', 'template_rx76sgh', this)
    .then(() => {
      status.textContent = "Message sent successfully!";
      status.style.color = "green";
      this.reset();
      grecaptcha.reset();
    }, (err) => {
      status.textContent = "Something went wrong. Please try again.";
      status.style.color = "red";
      console.error(err);
    });
});


function validateEmail() {
  const emailField = document.getElementById("email");
  const status = document.getElementById("form-status");
  const value = emailField.value.trim();

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (value && !regex.test(value)) {
    status.textContent = "Please enter a valid email address.";
    emailField.classList.add("invalid");
  } else {
    status.textContent = "";
    emailField.classList.remove("invalid");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const status = document.getElementById("form-status");

  emailInput.addEventListener("input", () => {
    const value = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(value)) {
      status.textContent = "";
      emailInput.classList.remove("invalid");
    }
  });
});

function updateCharCount() {
  const textarea = document.getElementById("message");
  const counter = document.getElementById("char-count");
  counter.textContent = textarea.value.length;
}

