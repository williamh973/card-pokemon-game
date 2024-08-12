import { battleSelectors } from "../../../shared/battle/battle-selectors.js";
import { pokemonSelectors } from "../../../shared/header/pokemon-selectors.js";
import { pokemonVariables } from "../../../shared/pokemon/pokemon-variables.js";
import { menuSelectors } from "../../../shared/header/menu-selectors.js";
import { handleScores } from "../../../game-logic/battle/hide-locations-when-pokemons-loses.js";

const POPUP_DISPLAY_TIMELAPS = 3000;

export function openBattleResultPopup() {
  battleSelectors.displayBattleResultContainer.style.display = "flex";
  battleSelectors.displayBattleResult.textContent = `${pokemonVariables.pokemonKo} est KO !`;
}

export function updatePokemonSelectionStatus() {
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
}

export function displayMenu() {
  setTimeout(() => {
    battleSelectors.displayBattleResultContainer.style.display = "none";
    battleSelectors.startBattleButton.disabled = true;
    battleSelectors.startBattleButton.style.display = "none";

    switch (menuSelectors.menu.value) {
      case "definite-mod":
        pokemonSelectors.firstPokemonSelectionButton.style.display = "flex";
        pokemonSelectors.secondPokemonSelectionButton.style.display = "flex";
        pokemonSelectors.randomAdversarySelectionButton.style.display = "none";
        pokemonSelectors.randomAllSelectionButton.style.display = "none";
        break;
      case "random-adversary-mod":
        pokemonSelectors.firstPokemonSelectionButton.style.display = "flex";
        pokemonSelectors.secondPokemonSelectionButton.style.display = "none";
        pokemonSelectors.randomAdversarySelectionButton.style.display = "flex";
        pokemonSelectors.randomAllSelectionButton.style.display = "none";
        break;
      case "random-all-mod":
        pokemonSelectors.firstPokemonSelectionButton.style.display = "none";
        pokemonSelectors.secondPokemonSelectionButton.style.display = "none";
        pokemonSelectors.randomAdversarySelectionButton.style.display = "none";
        pokemonSelectors.randomAllSelectionButton.style.display = "flex";
      default:
        break;
    }
  }, POPUP_DISPLAY_TIMELAPS);
}

export function determinePokemonKo(firstAttacker, secondAttacker) {
  if (firstAttacker.stats.hp <= 0) {
    pokemonVariables.pokemonKo = firstAttacker.name;
  } else if (secondAttacker.stats.hp <= 0) {
    pokemonVariables.pokemonKo = secondAttacker.name;
  }

  handleScores();
}
