import { levelFactorForFirstAttack } from "../../../attacks/factors-attacks/level-factors-attacks/level-factor-first-attack.js";
import { levelFactorForSecondAttack } from "../../../attacks/factors-attacks/level-factors-attacks/level-factor-second-attack.js";

export function ifPokemonHasAnAttackThatDependsOnItsOwnLevel(
  firstAttacker,
  isAttackActive,
  damages
) {
  if (
    (firstAttacker.firstAttack.name === "Frappe Atlas" ||
      firstAttacker.firstAttack.name === "Ombre Nocturne") &&
    isAttackActive
  ) {
    let getLevelFactorForFirstAttack = levelFactorForFirstAttack(
      firstAttacker,
      isAttackActive,
      damages
    );
    damages = getLevelFactorForFirstAttack;
    return damages;
  } else if (
    (firstAttacker.secondAttack.name === "Frappe Atlas" ||
      firstAttacker.secondAttack.name === "Ombre Nocturne") &&
    isAttackActive
  ) {
    let getLevelFactorForSecondAttack = levelFactorForSecondAttack(
      firstAttacker,
      isAttackActive,
      damages
    );
    damages = getLevelFactorForSecondAttack;
    return damages;
  } else {
    return damages;
  }
}
