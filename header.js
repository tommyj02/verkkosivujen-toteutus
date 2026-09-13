fetch("header.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("header-container").innerHTML = html;

    const menuButton = document.querySelector(".menu-button");
    const navigation = document.querySelector(".navigation");

    menuButton.addEventListener("click", () => {
      const menuIsOpen = navigation.classList.toggle("open");

      menuButton.setAttribute("aria-expanded", menuIsOpen);
      menuButton.textContent = menuIsOpen ? "✕" : "☰";
    });
  })
  .catch(error => {
    console.error("Could not load header:", error);
  });