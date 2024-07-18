import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";

export function isPokemonNotConfused() {
  if (pokemonVariables.isFirstAttackerTurn) {
    return (pokemonVariables.isFirstAttackerConfusing = false);
  } else {
    return (pokemonVariables.isSecondAttackerConfusing = false);
  }
}
