const languageMenuButton = document.querySelector(".language-switcher");
const languageDropdown = document.querySelector(".language-dropdown");
languageMenuButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (languageDropdown.classList.contains("hidden")) {
    languageDropdown.classList.remove("hidden");
    languageDropdown.classList.add("flex");
  } else {
    languageDropdown.classList.add("hidden");
    languageDropdown.classList.remove("flex");
  }
});
