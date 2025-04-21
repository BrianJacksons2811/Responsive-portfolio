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
// Typewriter-style animation cycling through roles (optional enhancement)
const roles = ["Web developer", "UX/UI Designer", "Graphic Designer"];
let roleIndex = 0;
const spanEl = document.querySelector(".content-main h2 span");

function rotateRoles() {
    spanEl.setAttribute("data-text", roles[roleIndex]);
    spanEl.textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
}
setInterval(rotateRoles, 2500);
