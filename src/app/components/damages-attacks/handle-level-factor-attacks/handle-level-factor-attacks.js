import { levelFactorForFirstAttack } from "../../factors-attacks/level-factors-attacks/level-factor-first-attack.js";

import { levelFactorForSecondAttack } from "../../factors-attacks/level-factors-attacks/level-factor-second-attack.js";

export function ifPokemonHasAnAttackThatDependsOnItsOwnLevel(
  firstAttacker,
  isAttackActive,
  degats,
) {
  if (
    (firstAttacker.firstAttack.name === "Frappe Atlas" ||
      firstAttacker.firstAttack.name === "Ombre Nocturne") &&
    isAttackActive
  ) {
    let getLevelFactorForFirstAttack = levelFactorForFirstAttack(
      firstAttacker,
      isAttackActive,
      degats,
    );
    degats = getLevelFactorForFirstAttack;
    return degats;
  } else if (
    (firstAttacker.secondAttack.name === "Frappe Atlas" ||
      firstAttacker.secondAttack.name === "Ombre Nocturne") &&
    isAttackActive
  ) {
    let getLevelFactorForSecondAttack = levelFactorForSecondAttack(
      firstAttacker,
      isAttackActive,
      degats,
    );
    degats = getLevelFactorForSecondAttack;
    return degats;
  }
}
