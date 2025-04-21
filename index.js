// Validate cell number to allow only digits
document.getElementById("Cell-Number").addEventListener("input", function () {
    const warning = document.getElementById("cell-warning");
    const value = this.value;
    if (!/^\d*$/.test(value)) {
        warning.style.display = "inline";
    } else {
        warning.style.display = "none";
    }
});

// Dropdown navigation toggle (if you plan to use it on smaller screens)
document.querySelector('.dropdown')?.addEventListener("click", () => {
    document.querySelector('.nav-list ul').classList.toggle("show");
});

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
