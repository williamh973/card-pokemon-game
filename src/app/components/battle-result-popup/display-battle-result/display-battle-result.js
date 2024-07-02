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
  battleSelectors.displayBattleResultContainer.style.display = "flex";

  if (firstAttacker.stats.hp <= 0) {
    pokemonVariables.pokemonKo = firstAttacker.name;
    battleSelectors.displayBattleResult.textContent = `${firstAttacker.name} est KO !`;
  } else if (secondAttacker.stats.hp <= 0) {
    pokemonVariables.pokemonKo = secondAttacker.name;
    battleSelectors.displayBattleResult.textContent = `${secondAttacker.name} est KO !`;
  }

  function updatePokemonSelectionStatus() {
    if (
      pokemonVariables.pokemonKo ===
      pokemonSelectors.selectFirstPokemonButton.value
    ) {
      pokemonVariables.isFirstPokemonSelected = false;
    } else if (
      pokemonVariables.pokemonKo ===
      pokemonSelectors.selectSecondPokemonButton.value
    ) {
      pokemonVariables.isSecondPokemonSelected = false;
    } else {
      pokemonVariables.isRandomPokemonSelected = false;
    }
  }
  updatePokemonSelectionStatus();

  setTimeout(function () {
    battleSelectors.displayBattleResultContainer.style.display = "none";
    battleSelectors.startBattleButton.disabled = true;
    battleSelectors.startBattleButton.style.display = "none";

    if (domElements.isDefiniteModActived) {
      pokemonSelectors.selectFirstPokemonButton.style.display = "flex";
      pokemonSelectors.selectSecondPokemonButton.style.display = "flex";
      pokemonSelectors.selectRandomSelectionButton.style.display = "none";
    } else if (domElements.isRandomModActived) {
      pokemonSelectors.selectFirstPokemonButton.style.display = "flex";
      pokemonSelectors.selectRandomSelectionButton.style.display = "flex";
      pokemonSelectors.selectSecondPokemonButton.style.display = "none";
    }
  }, POPUP_DISPLAY_TIMELAPS);
}
