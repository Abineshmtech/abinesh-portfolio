const roles = [
  "Software Developer",
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Web Developer"
];

const colors = ["#f5c400", "#38bdf8", "#22c55e", "#ef4444"];

let index = 0;
const role = document.getElementById("role");

setInterval(() => {
  index = (index + 1) % roles.length;
  role.style.opacity = "0";

  setTimeout(() => {
    role.textContent = roles[index];
    role.style.color = colors[index];
    role.style.opacity = "1";
  }, 300);
}, 2000);