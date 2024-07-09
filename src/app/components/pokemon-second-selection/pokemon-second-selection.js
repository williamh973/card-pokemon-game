import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";
import { displaySecondPokemonSelection } from "./handle-second-selection/display-second-pokemon-selection.js";
import { pokemonSelectors } from "../../shared/header/pokemon-selectors.js";
import { activateStartBattleButton } from "../../game-logic/battle/start-battle-button.js";
import { battleSelectors } from "../../shared/battle/battle-selectors.js";

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
        displaySecondPokemonSelection(
          pokemonSelectors.selectSecondPokemonButton.value
        );
        pokemonVariables.isRandomPokemonSelected = false;
        pokemonVariables.isSecondPokemonSelected = true;
        pokemonVariables.enemyPokemon =
          pokemonSelectors.selectSecondPokemonButton.value;
        battleSelectors.startBattleButton.style.display = "flex";
        activateStartBattleButton();
        battleSelectors.displayDialogue.style.display = "none";
      }
    );
  }
});
