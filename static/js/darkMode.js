const darkmode = document.querySelector(".toggle-dark-mode");
function toggleDarkMode() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("darkmode", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkmode", "dark");
  }
}
if (darkmode) {
  darkmode.addEventListener("click", toggleDarkMode);
}

const darkStorage = localStorage.getItem("darkmode");
const isBrowserDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

if (!darkStorage && isBrowserDark) {
  document.documentElement.classList.add("dark");
}

if (darkStorage && darkStorage === "dark") {
  toggleDarkMode();
}

