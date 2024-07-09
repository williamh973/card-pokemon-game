import { pokemonNameList } from "../../../shared/pokemon/pokemon-name-list.js";
import { pokemonSelectors } from "../../../shared/header/pokemon-selectors.js";

export function onGetRandomPokemonFromPokemonNameList() {
  const randomIndex = Math.floor(Math.random() * pokemonNameList.length);
  const displayPokemonSelectedPopup = pokemonNameList[randomIndex];
  checkIfRamdomSelectedPokemonEqualToFirstSelectedPokemon(
    displayPokemonSelectedPopup
  );
}

function checkIfRamdomSelectedPokemonEqualToFirstSelectedPokemon(
  displayPokemonSelectedPopup
) {
  if (
    displayPokemonSelectedPopup ===
    pokemonSelectors.selectFirstPokemonButton.value
  ) {
    onGetRandomPokemonFromPokemonNameList();
    return;
  }
  pokemonSelectors.selectRandomSelectionButton.value =
    displayPokemonSelectedPopup;
}
