import { pokemonSelectors } from "../../shared/header/pokemon-selectors.js";
import { menuSelectors } from "../../shared/header/menu-selectors.js";
import { battleSelectors } from "../../shared/battle/battle-selectors.js";

export function displayBattleInProgress() {
  menuSelectors.logo.style.display = "none";
  menuSelectors.menuContainer.style.display = "none";
  pokemonSelectors.firstPokemonSelectionButton.style.display = "none";
  menuSelectors.versus.style.display = "none";
  pokemonSelectors.secondPokemonSelectionButton.style.display = "none";
  pokemonSelectors.randomAdversarySelectionButton.style.display = "none";
  pokemonSelectors.randomAllSelectionButton.style.display = "none";
  battleSelectors.startBattleButton.style.display = "none";
  battleSelectors.displayDialogueBattleContainer.style.display = "flex";
  battleSelectors.battleInProgress.style.display = "flex";
  battleSelectors.numberOfTurnContainer.style.display = "flex";
}

export function hideBattleInProgress() {
  menuSelectors.logo.style.display = "flex";
  menuSelectors.menuContainer.style.display = "flex";
  pokemonSelectors.firstPokemonSelectionButton.style.display = "flex";
  menuSelectors.versus.style.display = "flex";
  pokemonSelectors.secondPokemonSelectionButton.style.display = "flex";
  pokemonSelectors.randomAdversarySelectionButton.style.display = "flex";
  battleSelectors.displayDialogueBattleContainer.style.display = "none";
  battleSelectors.startBattleButton.style.display = "flex";
  battleSelectors.battleInProgress.style.display = "none";
  battleSelectors.numberOfTurnContainer.style.display = "none";
}
