import { pokemonCardIdList } from "../../../../shared/pokemon/pokemon-card-id-list.js";
import { pokemonSelectors } from "../../../../shared/header/pokemon-selectors.js";

export function getPokemonCardIdName() {
  const firstPokemonCardId =
    pokemonCardIdList[pokemonSelectors.firstPokemonSelectionButton.value];
  const secondPokemonCardId =
    pokemonCardIdList[pokemonSelectors.secondPokemonSelectionButton.value];
  const randomPokemonCardId =
    pokemonCardIdList[pokemonSelectors.randomAdversarySelectionButton.value];

  return {
    firstPokemonCardId,
    secondPokemonCardId,
    randomPokemonCardId,
  };
}
