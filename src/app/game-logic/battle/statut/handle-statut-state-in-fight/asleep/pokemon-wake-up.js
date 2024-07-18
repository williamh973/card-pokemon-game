import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";

export function isPokemonWakeUp() {
  if (pokemonVariables.isFirstAttackerTurn) {
    return (pokemonVariables.isFirstAttackerAsleep = false);
  } else {
    return (pokemonVariables.isSecondAttackerAsleep = false);
  }
}
