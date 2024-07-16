import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";

export function checkIfSecondAttackerCanAttack() {
  return (
    !pokemonVariables.isSecondAttackerParalyzed &&
    !pokemonVariables.isSecondAttackerFrozen &&
    !pokemonVariables.isSecondAttackerAsleep &&
    !pokemonVariables.isSecondAttackerConfusing &&
    !pokemonVariables.isSecondAttackerScared
  );
}
