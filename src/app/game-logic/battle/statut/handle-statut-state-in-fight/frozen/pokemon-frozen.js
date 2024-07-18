import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";

export function isPokemonFrozen() {
  if (pokemonVariables.isFirstAttackerTurn) {
    return (pokemonVariables.isFirstAttackerFrozen = true);
  } else {
    return (pokemonVariables.isSecondAttackerFrozen = true);
  }
}
