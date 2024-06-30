import { handleMenu } from "../handle-menu-and-selections/handleMenu.js";
import { menuSelectors } from "../../shared/header/menu-selectors.js";

document.addEventListener("DOMContentLoaded", () => {
  fetch("./src/app/components/menu/menu.html")
    .then((response) => response.text())
    .then((data) => {
      menuSelectors.menuContainer.innerHTML = data;
      initializeMenu();
    })
    .catch((error) => console.error("Error loading menu :", error));

  function initializeMenu() {
    menuSelectors.menu.addEventListener("change", () => {
      handleMenu(menuSelectors.menu.value);
    });
  }
});
