import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";
import { handleSelectionRandomPokemon } from "./handle-random-selection/handlePokemonRandomSelection.js";
import { pokemonSelectors } from "../../shared/header/pokemon-selectors.js";
import { pokemonNameList } from "../../shared/pokemon/pokemon-name-list.js";
import { activateStartBattleButton } from "../../game-logic/battle/start-battle-button.js";
import { battleSelectors } from "../../shared/battle/battle-selectors.js";

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
    pokemonSelectors.selectRandomSelectionButton.addEventListener(
      "click",
      () => {
        function onGetPokemonFromPokemonNameList() {
          const randomIndex = Math.floor(
            Math.random() * pokemonNameList.length
          );
          const pokemonSelected = pokemonNameList[randomIndex];
          pokemonSelectors.selectRandomSelectionButton.value = pokemonSelected;
        }
        onGetPokemonFromPokemonNameList();

        handleSelectionRandomPokemon(
          pokemonSelectors.selectRandomSelectionButton.value
        );
        pokemonVariables.isSecondPokemonSelected = false;
        pokemonVariables.isRandomPokemonSelected = true;
        pokemonVariables.enemyPokemon =
          pokemonSelectors.selectRandomSelectionButton.value;
        battleSelectors.startBattleButton.style.display = "flex";
        activateStartBattleButton();
        battleSelectors.displayDialogue.style.display = "none";
      }
    );
  }
});
