import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";

export function isPokemonNotScared() {
  if (pokemonVariables.isFirstAttackerTurn) {
    return (pokemonVariables.isFirstAttackerScared = false);
  } else {
    return (pokemonVariables.isSecondAttackerScared = false);
  }
}
