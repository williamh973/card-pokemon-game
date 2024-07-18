import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";

export function isPokemonBlockedByParalysis() {
  if (pokemonVariables.isFirstAttackerTurn) {
    return (pokemonVariables.isFirstAttackerParalyzed = true);
  } else {
    return (pokemonVariables.isSecondAttackerParalyzed = true);
  }
}
