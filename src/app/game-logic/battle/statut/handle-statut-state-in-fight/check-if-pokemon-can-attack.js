import { pokemonVariables } from "../../../../shared/pokemon/pokemon-variables.js";

export async function checkIfPokemonCanAttack(attackerTurn) {
  if (
    attackerTurn === pokemonVariables.isFirstAttackerTurn &&
    !pokemonVariables.isFirstAttackerParalyzed &&
    !pokemonVariables.isFirstAttackerAsleep &&
    !pokemonVariables.isFirstAttackerFrozen &&
    !pokemonVariables.isFirstAttackerConfusing &&
    !pokemonVariables.isFirstAttackerScared
  ) {
    return (pokemonVariables.isFirstAttackerCanAttack = true);
  } else if (
    attackerTurn === pokemonVariables.isSecondAttackerTurn &&
    !pokemonVariables.isSecondAttackerParalyzed &&
    !pokemonVariables.isSecondAttackerAsleep &&
    !pokemonVariables.isSecondAttackerFrozen &&
    !pokemonVariables.isSecondAttackerConfusing &&
    !pokemonVariables.isSecondAttackerScared
  ) {
    return (pokemonVariables.isSecondAttackerCanAttack = true);
  }
}
