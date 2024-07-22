import { pokemonNameList } from "../../../shared/pokemon/pokemon-name-list.js";
import { setPokemonSelectionButtonValues } from "./set-pokemon-selection-buttons-values.js";

function onGetRandomIndex() {
  const index = Math.floor(Math.random() * pokemonNameList.length);
  return index;
}

export function initializePokemonSelected() {
  const firstRandomIndex = onGetRandomIndex();

  let secondRandomIndex = onGetRandomIndex();
  if (firstRandomIndex === secondRandomIndex) {
    secondRandomIndex = onGetRandomIndex();
  }

  setPokemonSelectionButtonValues(firstRandomIndex, secondRandomIndex);
}
