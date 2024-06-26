import { protectionActived } from "./protect-detect-capacity-actived.js";

import { pokemonDecreasePrecision } from "./precision-decrease-and-reset.js";

export const protectFactorForFirstAttack = function protectFactorForFirstAttack(
  firstAttacker,
  isFirstAttackActive,
) {
  if (
    (firstAttacker.firstAttack.name === "Abri" ||
      firstAttacker.firstAttack.name === "Détection") &&
    isFirstAttackActive
  ) {
    protectionActived();

    pokemonDecreasePrecision(firstAttacker);
  }
};
