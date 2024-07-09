import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";
import { displayRandomPokemonSelection } from "./handle-random-selection/display-random-pokemon-selection.js";
import { pokemonSelectors } from "../../shared/header/pokemon-selectors.js";
import { activateStartBattleButton } from "../../game-logic/battle/start-battle-button.js";
import { battleSelectors } from "../../shared/battle/battle-selectors.js";
import { onGetRandomPokemonFromPokemonNameList } from "./handle-random-selection/get-random-pokemon.js";

document.addEventListener("DOMContentLoaded", () => {
  fetch(
    "./src/app/components/pokemon-random-selection/pokemon-random-selection.html"
  )
    .then((response) => response.text())
    .then((data) => {
      pokemonSelectors.selectRandomSelectionContainer.innerHTML = data;
      initializeRandomSelection();
    })
    .catch((reject) => reject);

  function initializeRandomSelection() {
    pokemonSelectors.randomAdversarySelectionButton.addEventListener(
      "click",
      () => {
        onGetRandomPokemonFromPokemonNameList();

        displayRandomPokemonSelection(
          pokemonSelectors.randomAdversarySelectionButton.value
        );

        function displayStartBattleButton() {
          battleSelectors.startBattleButton.style.display = "flex";
        }

        pokemonVariables.isSecondPokemonSelected = false;
        pokemonVariables.isRandomPokemonSelected = true;
        pokemonVariables.enemyPokemon =
          pokemonSelectors.randomAdversarySelectionButton.value;
        displayStartBattleButton();
        activateStartBattleButton();
        battleSelectors.displayDialogue.style.display = "none";
      }
    );
  }
});
