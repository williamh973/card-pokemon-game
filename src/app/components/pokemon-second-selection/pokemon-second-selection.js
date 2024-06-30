import { domElements } from "../../shared/dom/dom-elements.js";
import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";
import { handlePokemonSecondSelection } from "../handle-menu-and-selections/handlePokemonSecondSelection.js";
import { pokemonSelectors } from "../../shared/header/pokemon-selectors.js";

document.addEventListener("DOMContentLoaded", () => {
  fetch(
    "./src/app/components/pokemon-second-selection/pokemon-second-selection.html"
  )
    .then((response) => response.text())
    .then((data) => {
      pokemonSelectors.selectSecondPokemonContainer.innerHTML = data;
      initializeSecondSelection();
    })
    .catch((reject) => reject);

  function initializeSecondSelection() {
    pokemonSelectors.selectSecondPokemonButton.addEventListener(
      "change",
      () => {
        handlePokemonSecondSelection(
          pokemonSelectors.selectSecondPokemonButton.value
        );
        pokemonVariables.isSecondPokemonSelected = true;
        pokemonVariables.enemyPokemon =
          pokemonSelectors.selectSecondPokemonButton.value;
        domElements.fightButtonContainer.style.display = "flex";
        activateFightButton();
        domElements.containerFullPopupDialogueFight.style.display = "none";
        domElements.displayDialogue.style.display = "none";
      }
    );
  }
});
