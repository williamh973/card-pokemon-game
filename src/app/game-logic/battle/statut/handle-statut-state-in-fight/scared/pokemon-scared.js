import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";

export function isPokemonScared() {
  if (pokemonVariables.isFirstAttackerTurn) {
    return (pokemonVariables.isFirstAttackerScared = true);
  } else {
    return (pokemonVariables.isSecondAttackerScared = true);
  }
}
