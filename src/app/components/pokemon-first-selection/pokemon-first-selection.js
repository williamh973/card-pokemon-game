import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";
import { displayFirstPokemonSelection } from "./handle-first-selection/display-first-pokemon-selection.js";
import { pokemonSelectors } from "../../shared/header/pokemon-selectors.js";
import { activateStartBattleButton } from "../../game-logic/battle/start-battle-button.js";
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
      displayFirstPokemonSelection(
        pokemonSelectors.selectFirstPokemonButton.value
      );

      function displayStartBattleButton() {
        battleSelectors.startBattleButton.style.display = "flex";
      }

      pokemonVariables.isFirstPokemonSelected = true;
      pokemonVariables.playerSelectedPokemon =
        pokemonSelectors.selectFirstPokemonButton.value;
      pokemonSelectors.selectRandomSelectionButton.disabled = false;
      displayStartBattleButton();
      activateStartBattleButton();
      battleSelectors.displayDialogue.style.display = "none";
    });
  }
});
