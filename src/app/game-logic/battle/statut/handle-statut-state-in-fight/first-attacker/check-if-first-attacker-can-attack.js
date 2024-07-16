import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";

export function checkIfFirstAttackerCanAttack() {
  return (
    !pokemonVariables.isFirstAttackerParalyzed &&
    !pokemonVariables.isFirstAttackerFrozen &&
    !pokemonVariables.isFirstAttackerAsleep &&
    !pokemonVariables.isFirstAttackerConfusing &&
    !pokemonVariables.isFirstAttackerScared
  );
}
