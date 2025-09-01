function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark mode / light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");

let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  if (savedTheme === "dark") {
    setDarkMode();
  } else {
    setLightMode();
  }
} else {
  applySystemTheme();

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      if (e.matches) {
        setDarkMode();
      } else {
        setLightMode();
      }
    }
  });
}

btn.addEventListener("click", setTheme);
btn2.addEventListener("click", setTheme);

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode(true);
  } else {
    setDarkMode(true);
  }
}

function applySystemTheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setDarkMode();
  } else {
    setLightMode();
  }
}

function setDarkMode(save = false) {
  document.body.setAttribute("theme", "dark");
  if (save) localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode(save = false) {
  document.body.removeAttribute("theme"); // default = light
  if (save) localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}


