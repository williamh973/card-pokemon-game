import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";

export function isPokemonConfused() {
  if (pokemonVariables.isFirstAttackerTurn) {
    return (pokemonVariables.isFirstAttackerConfusing = true);
  } else {
    return (pokemonVariables.isSecondAttackerConfusing = true);
  }
}
