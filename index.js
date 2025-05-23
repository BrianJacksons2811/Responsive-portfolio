const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

menuToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
  
});

const typewriterText = document.getElementById("typewriter-text");
const roles = ["Web Developer", "UI/UX Designer", "Graphic Designer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentRole = roles[roleIndex];
  const currentText = currentRole.substring(0, charIndex);

  typewriterText.textContent = currentText;

  if (!isDeleting && charIndex < currentRole.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      roleIndex = (roleIndex + 1) % roles.length;
    }
    setTimeout(type, 1000);
  }
}

type(); 

// Fade in body on load
window.addEventListener("load", () => {
  document.body.classList.add("fade-in");

  // Animate content-main items one by one
  const elements = document.querySelectorAll(".content-main h1, .content-main h2, .content-main p, .btn, .btn-links, .hire-btn");
  elements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");
    }, i * 200); // Delay each element
  });
});

//submition message//
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); 
  alert("✅ Message sent successfully! I’ll get back to you soon.");
  this.reset(); 
});

//warnings//

const cellInput = document.getElementById("cell");
  const warning = document.getElementById("cell-warning");

  cellInput.addEventListener("input", function () {
    const onlyNumbers = /^\d*$/;

    if (!onlyNumbers.test(cellInput.value)) {
      warning.style.display = "block";
    } else {
      warning.style.display = "none";
    }
  });

  // Popup on submit
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!/^\d+$/.test(cellInput.value)) {
      alert("⚠️ Please enter a valid cell number with only digits.");
      return;
    }
    alert("✅ Message sent successfully! I’ll get back to you soon.");
    this.reset();
    warning.style.display = "none";
  });//
