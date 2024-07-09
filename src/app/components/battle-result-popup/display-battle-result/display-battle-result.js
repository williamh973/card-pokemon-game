import {
  firstAttacker,
  secondAttacker,
} from "../../../game-logic/battle/determine-first-attacker.js";
import { domElements } from "../../../shared/dom/dom-elements.js";
import { battleSelectors } from "../../../shared/battle/battle-selectors.js";
import { pokemonSelectors } from "../../../shared/header/pokemon-selectors.js";
import { pokemonVariables } from "../../../shared/pokemon/pokemon-variables.js";

export function displayBattleResult() {
  const POPUP_DISPLAY_TIMELAPS = 3000;

  const openBattleResultPopup = () => {
    battleSelectors.displayBattleResultContainer.style.display = "flex";
    battleSelectors.displayBattleResult.textContent = `${pokemonVariables.pokemonKo} est KO !`;
  };

  const updatePokemonSelectionStatus = () => {
    if (
      pokemonVariables.pokemonKo ===
      pokemonSelectors.firstPokemonSelectionButton.value
    ) {
      pokemonVariables.isFirstPokemonSelected = false;
    } else if (
      pokemonVariables.pokemonKo ===
      pokemonSelectors.secondPokemonSelectionButton.value
    ) {
      pokemonVariables.isSecondPokemonSelected = false;
    } else {
      pokemonVariables.isRandomPokemonSelected = false;
    }
  };

  const displayMenu = () => {
    setTimeout(function () {
      battleSelectors.displayBattleResultContainer.style.display = "none";
      battleSelectors.startBattleButton.disabled = true;
      battleSelectors.startBattleButton.style.display = "none";

      if (domElements.isDefiniteModActived) {
        pokemonSelectors.firstPokemonSelectionButton.style.display = "flex";
        pokemonSelectors.secondPokemonSelectionButton.style.display = "flex";
        pokemonSelectors.randomAdversarySelectionButton.style.display = "none";
      } else if (domElements.isRandomAdversaryModActivated) {
        pokemonSelectors.firstPokemonSelectionButton.style.display = "flex";
        pokemonSelectors.randomAdversarySelectionButton.style.display = "flex";
        pokemonSelectors.secondPokemonSelectionButton.style.display = "none";
      } else {
        pokemonSelectors.firstPokemonSelectionButton.style.display = "none";
        pokemonSelectors.randomAdversarySelectionButton.style.display = "none";
        pokemonSelectors.secondPokemonSelectionButton.style.display = "none";
        pokemonSelectors.randomAllSelectionButton.style.display = "none";
      }
    }, POPUP_DISPLAY_TIMELAPS);
  };

  const determinePokemonKo = () => {
    if (firstAttacker.stats.hp <= 0) {
      pokemonVariables.pokemonKo = firstAttacker.name;
    } else if (secondAttacker.stats.hp <= 0) {
      pokemonVariables.pokemonKo = secondAttacker.name;
    }
    openBattleResultPopup();
    updatePokemonSelectionStatus();
    displayMenu();
  };
  determinePokemonKo();
}
