import { domElementsFromSelectors } from "../../shared/game-variables/dom/dom-elements.js";
import { handleMenu } from "../handle-menu-and-selections/handleMenu.js";

document.addEventListener("DOMContentLoaded", () => {
  fetch("./src/app/components/menu/menu.html")
    .then((response) => response.text())
    .then((data) => {
      domElementsFromSelectors.menuContainer.innerHTML = data;
      initializeMenu();
    })
    .catch((error) => console.error("Error loading menu :", error));

  function initializeMenu() {
    menu.addEventListener("change", () => {
      handleMenu(menu.value);
    });
  }
});
