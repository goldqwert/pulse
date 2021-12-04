window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header"),
    hamburger = document.querySelector(".header__hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("header__hamburger_active");
    menu.classList.toggle("header_active");
  });
});
