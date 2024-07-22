import { activateStartBattleButton } from "../../game-logic/battle/start-battle-button.js";
import { battleSelectors } from "../../shared/battle/battle-selectors.js";
import { pokemonSelectors } from "../../shared/header/pokemon-selectors.js";
import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";
import { initializePokemonSelected } from "./handle-random-all-selection/initialize-pokemon-selection-and-check-if-duplicate.js";
import { getPokemonCard } from "./handle-random-all-selection/get-pokemon-card.js";

document.addEventListener("DOMContentLoaded", () => {
  fetch(
    "./src/app/components/pokemon-random-all-selection/pokemon-random-all-selection.html"
  )
    .then((response) => response.text())
    .then((data) => {
      pokemonSelectors.selectRandomAllSelectionContainer.innerHTML = data;
      initializeRandomAllSelection();
    })
    .catch((reject) => reject);

  function initializeRandomAllSelection() {
    pokemonSelectors.randomAllSelectionButton.addEventListener("click", () => {
      initializePokemonSelected();
      getPokemonCard();

      const displayStartBattleButton = () => {
        battleSelectors.startBattleButton.style.display = "flex";
      };

      const hideDialogueContainer = () => {
        battleSelectors.displayDialogue.style.display = "none";
      };

      pokemonVariables.isFirstPokemonSelected = true;
      pokemonVariables.isSecondPokemonSelected = true;
      displayStartBattleButton();
      activateStartBattleButton();
      hideDialogueContainer();
    });
  }
});
