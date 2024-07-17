const mobileNavButton = document.querySelector(".mobile-nav");

mobileNavButton.addEventListener("click", () => {
  const navigationWrapper = document.querySelector(".nav-list-wrapper");
  navigationWrapper.classList.toggle("hidden");
  mobileNavButton.classList.toggle("ri-menu-line");
  mobileNavButton.classList.toggle("ri-close-large-line");
});
