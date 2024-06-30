import { domElements } from "../shared/dom/dom-elements.js";
import { pokemonSelectors } from "../shared/header/pokemon-selectors.js";
import { menuSelectors } from "../shared/header/menu-selectors.js";

export function displayFightInProgress() {
  domElements.logo.style.display = "none";
  domElements.menuContainer.style.display = "none";
  pokemonSelectors.selectFirstPokemonButton.style.display = "none";
  menuSelectors.versus.style.display = "none";
  domElements.selectSecondPokemonButton.style.display = "none";
  domElements.pokemonRandomSelectionButton.style.display = "none";
  domElements.fightButtonContainer.style.display = "none";
  domElements.fightInProgress.style.display = "flex";
  domElements.fightInProgress.textContent = "Combat en cours";
}

export function hideFightInProgress() {
  domElements.logo.style.display = "flex";
  domElements.menuContainer.style.display = "flex";
  pokemonSelectors.selectFirstPokemonButton.style.display = "flex";
  menuSelectors.versus.style.display = "flex";
  domElements.selectSecondPokemonButton.style.display = "flex";
  domElements.pokemonRandomSelectionButton.style.display = "flex";
  domElements.fightButtonContainer.style.display = "flex";
  domElements.fightInProgress.style.display = "none";
}
