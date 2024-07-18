import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";

export function isPokemonResistsParalysis() {
  if (pokemonVariables.isFirstAttackerTurn) {
    return (pokemonVariables.isFirstAttackerParalyzed = false);
  } else {
    return (pokemonVariables.isSecondAttackerParalyzed = false);
  }
}
