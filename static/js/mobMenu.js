const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
function toggleMenu() {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
}
if (mobileMenu && mobileMenuButton) {
  mobileMenuButton.addEventListener("click", toggleMenu);
}

