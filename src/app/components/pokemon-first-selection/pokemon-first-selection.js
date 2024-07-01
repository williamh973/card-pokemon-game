import { domElements } from "../../shared/dom/dom-elements.js";
import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";
import { handlePokemonFirstSelection } from "../handle-menu-and-selections/handlePokemonFirstSelection.js";
import { pokemonSelectors } from "../../shared/header/pokemon-selectors.js";
import { activateBattleButton } from "../battle/battle-button.js";

document.addEventListener("DOMContentLoaded", () => {
  fetch(
    "./src/app/components/pokemon-first-selection/pokemon-first-selection.html"
  )
    .then((response) => response.text())
    .then((data) => {
      pokemonSelectors.selectFirstPokemonContainer.innerHTML = data;
      initializeFirstSelection();
    })
    .catch((reject) => reject);

  function initializeFirstSelection() {
    pokemonSelectors.selectFirstPokemonButton.addEventListener("change", () => {
      handlePokemonFirstSelection(
        pokemonSelectors.selectFirstPokemonButton.value
      );
      pokemonVariables.isFirstPokemonSelected = true;
      pokemonVariables.playerSelectedPokemon =
        pokemonSelectors.selectFirstPokemonButton.value;
      domElements.fightButtonContainer.style.display = "flex";
      activateBattleButton();
      domElements.containerFullPopupDialogueFight.style.display = "none";
      domElements.displayDialogue.style.display = "none";
    });
  }
});
