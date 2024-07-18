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
    console.log(
      "isFirstAttackerParalyzed",
      pokemonVariables.isFirstAttackerParalyzed,
      "isFirstAttackerAsleep",
      pokemonVariables.isFirstAttackerAsleep,
      "isFirstAttackerFrozen",
      pokemonVariables.isFirstAttackerFrozen,
      "isFirstAttackerConfusing",
      pokemonVariables.isFirstAttackerConfusing,
      "isFirstAttackerScared",
      pokemonVariables.isFirstAttackerScared
    );
    return (pokemonVariables.isFirstAttackerCanAttack = true);
  } else if (
    attackerTurn === pokemonVariables.isSecondAttackerTurn &&
    !pokemonVariables.isSecondAttackerParalyzed &&
    !pokemonVariables.isSecondAttackerAsleep &&
    !pokemonVariables.isSecondAttackerFrozen &&
    !pokemonVariables.isSecondAttackerConfusing &&
    !pokemonVariables.isSecondAttackerScared
  ) {
    console.log(
      "isSecondAttackerParalyzed",
      pokemonVariables.isSecondAttackerParalyzed,
      "isSecondAttackerAsleep",
      pokemonVariables.isSecondAttackerAsleep,
      "isSecondAttackerFrozen",
      pokemonVariables.isSecondAttackerFrozen,
      "isSecondAttackerConfusing",
      pokemonVariables.isSecondAttackerConfusing,
      "isSecondAttackerScared",
      pokemonVariables.isSecondAttackerScared
    );
    return (pokemonVariables.isSecondAttackerCanAttack = true);
  }
}
