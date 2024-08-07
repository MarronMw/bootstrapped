function toggleMenu(button) {
  document.addEventListener("DOMContentLoaded", function () {
    const togglerButton = document.querySelector(".navbar-toggler");

    togglerButton.addEventListener("click", function () {
      const navbarCollapse = document.getElementById("navbarNav");

      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      } else {
        navbarCollapse.classList.add("show");
      }
    });
  });
}
