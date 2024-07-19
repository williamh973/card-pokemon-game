import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";

function getDammages(firstAttacker, attackStrength, secondAttacker) {
  return (
    (((2 * firstAttacker.stats.attack) / secondAttacker.stats.defense) *
      attackStrength *
      (firstAttacker.stats.specialAtt / secondAttacker.stats.specialDef)) /
    20
  );
}

export function baseDamage(firstAttacker, secondAttacker) {
  if (pokemonVariables.isFirstAttackActive) {
    return getDammages(
      firstAttacker,
      firstAttacker.firstAttack.strength,
      secondAttacker
    );
  } else if (pokemonVariables.isSecondAttackActive) {
    return getDammages(
      firstAttacker,
      firstAttacker.secondAttack.strength,
      secondAttacker
    );
  }
}
