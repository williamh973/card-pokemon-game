import { pokemonNameList } from "../../../shared/pokemon/pokemon-name-list.js";
import { pokemonSelectors } from "../../../shared/header/pokemon-selectors.js";
import { domElements } from "../../../shared/dom/dom-elements.js";

export function onGetRandomPokemonFromPokemonNameList() {
  const randomIndex = Math.floor(Math.random() * pokemonNameList.length);
  const displayPokemonSelectedPopup = pokemonNameList[randomIndex];

  if (domElements.isRandomAdversaryModActivated) {
    checkIfRamdomSelectedPokemonEqualToFirstSelectedPokemon(
      displayPokemonSelectedPopup
    );
  } else {
    return;
  }
}

function checkIfRamdomSelectedPokemonEqualToFirstSelectedPokemon(
  displayPokemonSelectedPopup
) {
  if (
    displayPokemonSelectedPopup ===
    pokemonSelectors.firstPokemonSelectionButton.value
  ) {
    onGetRandomPokemonFromPokemonNameList();
    return;
  }

  pokemonSelectors.randomAdversarySelectionButton.value =
    displayPokemonSelectedPopup;
}
