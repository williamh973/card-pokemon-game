import { pokemonVariables } from "../pokemon/pokemon-variables.js";

export function getFirstAttackerAttack(firstAttacker) {
  if (pokemonVariables.isFirstAttackActive) {
    return firstAttacker.firstAttack;
  } else {
    return firstAttacker.secondAttack;
  }
}
