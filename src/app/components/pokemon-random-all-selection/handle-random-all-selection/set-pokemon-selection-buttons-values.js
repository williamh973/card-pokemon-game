import { pokemonSelectors } from "../../../shared/header/pokemon-selectors.js";
import { pokemonNameList } from "../../../shared/pokemon/pokemon-name-list.js";

export function setPokemonSelectionButtonValues(
  firstRandomIndex,
  secondRandomIndex
) {
  pokemonSelectors.firstPokemonSelectionButton.value =
    pokemonNameList[firstRandomIndex];

  pokemonSelectors.secondPokemonSelectionButton.value =
    pokemonNameList[secondRandomIndex];
}
