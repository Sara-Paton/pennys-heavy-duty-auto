const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".nav-list a");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", function () {
    const menuIsOpen = siteNav.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", menuIsOpen);

    if (menuIsOpen) {
      menuButton.setAttribute("aria-label", "Close navigation menu");
    } else {
      menuButton.setAttribute("aria-label", "Open navigation menu");
    }
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      siteNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
    });
  });
}