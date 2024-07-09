import { activateStartBattleButton } from "../../game-logic/battle/start-battle-button.js";
import { battleSelectors } from "../../shared/battle/battle-selectors.js";
import { domElements } from "../../shared/dom/dom-elements.js";
import { pokemonSelectors } from "../../shared/header/pokemon-selectors.js";
import { pokemonNameList } from "../../shared/pokemon/pokemon-name-list.js";
import { pokemonCardList } from "../../shared/pokemon/pokemon-card-list.js";
import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";
import { updateDisplayPokemonCard } from "./handle-random-all-selection/update-display-pokemon-card.js";
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

  const initializeRandomAllSelection = () => {
    pokemonSelectors.randomAllSelectionButton.addEventListener("click", () => {
      function onGetRandomIndex() {
        const firstRandomIndex = Math.floor(
          Math.random() * pokemonNameList.length
        );
        const secondRandomIndex = Math.floor(
          Math.random() * pokemonNameList.length
        );

        pokemonSelectors.firstPokemonSelectionButton.value =
          pokemonNameList[firstRandomIndex];

        pokemonSelectors.secondPokemonSelectionButton.value =
          pokemonNameList[secondRandomIndex];

        getPokemonCard();
      }

      const displayStartBattleButton = () => {
        battleSelectors.startBattleButton.style.display = "flex";
      };

      const hideDialogueContainer = () => {
        battleSelectors.displayDialogue.style.display = "none";
      };

      onGetRandomIndex();
      pokemonVariables.isFirstPokemonSelected = true;
      pokemonVariables.isSecondPokemonSelected = true;
      displayStartBattleButton();
      activateStartBattleButton();
      hideDialogueContainer();
    });
  };
});
