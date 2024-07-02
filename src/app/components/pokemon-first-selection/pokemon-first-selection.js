import { domElements } from "../../shared/dom/dom-elements.js";
import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";
import { handlePokemonFirstSelection } from "../handle-menu-and-selections/handlePokemonFirstSelection.js";
import { pokemonSelectors } from "../../shared/header/pokemon-selectors.js";
import { activateStartBattleButton } from "../battle/start-battle-button.js";
import { battleSelectors } from "../../shared/battle/battle-selectors.js";

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
      battleSelectors.startBattleButton.style.display = "flex";
      activateStartBattleButton();
      battleSelectors.displayDialogue.style.display = "none";
    });
  }
});
