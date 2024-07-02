import { pokemonSelectors } from "../../shared/header/pokemon-selectors.js";
import { menuSelectors } from "../../shared/header/menu-selectors.js";
import { battleSelectors } from "../../shared/battle/battle-selectors.js";

export function displayBattleInProgress() {
  menuSelectors.logo.style.display = "none";
  menuSelectors.menuContainer.style.display = "none";
  pokemonSelectors.selectFirstPokemonButton.style.display = "none";
  menuSelectors.versus.style.display = "none";
  pokemonSelectors.selectSecondPokemonButton.style.display = "none";
  pokemonSelectors.selectRandomSelectionButton.style.display = "none";
  battleSelectors.startBattleButton.style.display = "none";
  battleSelectors.displayDialogueBattleContainer.style.display = "flex";
  battleSelectors.battleInProgress.style.display = "flex";
}

export function hideBattleInProgress() {
  menuSelectors.logo.style.display = "flex";
  menuSelectors.menuContainer.style.display = "flex";
  pokemonSelectors.selectFirstPokemonButton.style.display = "flex";
  menuSelectors.versus.style.display = "flex";
  pokemonSelectors.selectSecondPokemonButton.style.display = "flex";
  pokemonSelectors.selectRandomSelectionButton.style.display = "flex";
  battleSelectors.displayDialogueBattleContainer.style.display = "none";
  battleSelectors.startBattleButton.style.display = "flex";
  battleSelectors.battleInProgress.style.display = "none";
}
