import { firstAttacker, secondAttacker } from "./determineFirstAttacker.js";

import { domElements } from "../shared/dom/dom-elements.js";

const containerFullPopupResultFight = document.getElementById(
  "container-display-result"
);

const displayResult = document.getElementById("result");

export const openDisplayResult = function openDisplayResult() {
  containerFullPopupResultFight.style.display = "flex";

  if (firstAttacker.stats.hp <= 0) {
    displayResult.textContent = `${firstAttacker.name} est KO !`;
  } else if (secondAttacker.stats.hp <= 0) {
    displayResult.textContent = `${secondAttacker.name} est KO !`;
  }

  setTimeout(function () {
    containerFullPopupResultFight.style.display = "none";
    domElements.fightButtonContainer.style.display = "none";

    if (domElements.isDefiniteModActived) {
      domElements.selectFirstPokemonButton.style.display = "flex";
      domElements.selectSecondPokemonButton.style.display = "flex";
      domElements.pokemonRandomSelectionButton.style.display = "none";
    } else if (domElements.isRandomModActived) {
      domElements.selectFirstPokemonButton.style.display = "flex";
      domElements.pokemonRandomSelectionButton.style.display = "flex";
      domElements.selectSecondPokemonButton.style.display = "none";
    }
  }, 3000);
};
