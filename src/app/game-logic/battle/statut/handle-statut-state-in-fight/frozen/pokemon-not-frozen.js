import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";

export function isPokemonNotFrozen() {
  if (pokemonVariables.isFirstAttackerTurn) {
    return (pokemonVariables.isFirstAttackerFrozen = false);
  } else {
    return (pokemonVariables.isSecondAttackerFrozen = false);
  }
}
