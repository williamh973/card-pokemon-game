import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";

export function isPokemonAsleep() {
  if (pokemonVariables.isFirstAttackerTurn) {
    return (pokemonVariables.isFirstAttackerAsleep = true);
  } else if (pokemonVariables.isSecondAttackerTurn) {
    return (pokemonVariables.isSecondAttackerAsleep = true);
  }
}
