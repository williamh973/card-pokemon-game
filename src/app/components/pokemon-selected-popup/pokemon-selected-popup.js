import { domElements } from "../../shared/dom/dom-elements.js";

document.addEventListener("DOMContentLoaded", () => {
  fetch(
    "./src/app/components/pokemon-selected-popup/pokemon-selected-popup.html"
  )
    .then((response) =>
      response.text().then((data) => {
        domElements.containerFullPopupPokemonSelected.innerHTML = data;
      })
    )
    .catch((error) => error);
});
