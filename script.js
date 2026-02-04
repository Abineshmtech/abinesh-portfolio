const roles = [
  "Software Developer",
  "Full Stack Developer",
  "Front End Developer",
  "Back End Developer",
  "Web Developer"
];

let index = 0;
const role = document.getElementById("role");

setInterval(() => {
  role.style.animation = "none";
  role.offsetHeight;
  index = (index + 1) % roles.length;
  role.textContent = roles[index];
  role.style.animation =
    "rotateText 2s ease-in-out, colorShift 6s infinite";
}, 2200);

document.querySelector(".contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  e.target.reset();
}
);