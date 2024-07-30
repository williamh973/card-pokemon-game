import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";

export function initBattle() {
  return (
    (pokemonVariables.isFirstAttackerTurn = false),
    (pokemonVariables.isSecondAttackerTurn = false),
    (pokemonVariables.isFirstAttackActive = false),
    (pokemonVariables.isSecondAttackActive = false),
    (pokemonVariables.isFirstAttackerCanAttack = false),
    (pokemonVariables.isSecondAttackerCanAttack = false),
    (pokemonVariables.isFirstAttackerTurn = true)
  );
}
