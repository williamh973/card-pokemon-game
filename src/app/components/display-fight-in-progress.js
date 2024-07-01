import { domElements } from "../shared/dom/dom-elements.js";
import { pokemonSelectors } from "../shared/header/pokemon-selectors.js";
import { menuSelectors } from "../shared/header/menu-selectors.js";

export function displayFightInProgress() {
  menuSelectors.logo.style.display = "none";
  menuSelectors.menuContainer.style.display = "none";
  pokemonSelectors.selectFirstPokemonButton.style.display = "none";
  menuSelectors.versus.style.display = "none";
  pokemonSelectors.selectSecondPokemonButton.style.display = "none";
  pokemonSelectors.selectRandomSelectionButton.style.display = "none";
  domElements.fightButtonContainer.style.display = "none";
  domElements.fightInProgress.style.display = "flex";
  domElements.fightInProgress.textContent = "Combat en cours";
}

export function hideFightInProgress() {
  menuSelectors.logo.style.display = "flex";
  menuSelectors.menuContainer.style.display = "flex";
  pokemonSelectors.selectFirstPokemonButton.style.display = "flex";
  menuSelectors.versus.style.display = "flex";
  pokemonSelectors.selectSecondPokemonButton.style.display = "flex";
  pokemonSelectors.selectRandomSelectionButton.style.display = "flex";
  domElements.fightButtonContainer.style.display = "flex";
  domElements.fightInProgress.style.display = "none";
}
