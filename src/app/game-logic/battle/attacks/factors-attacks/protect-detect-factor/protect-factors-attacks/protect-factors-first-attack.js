import { protectionActived } from "./protect-detect-capacity-actived.js";

import { pokemonDecreasePrecision } from "./precision-decrease-and-reset.js";
import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";

export function protectFactorForFirstAttack(firstAttacker) {
  if (
    (firstAttacker.firstAttack.name === "Abri" ||
      firstAttacker.firstAttack.name === "Détection") &&
    pokemonVariables.isFirstAttackActive
  ) {
    protectionActived();

    pokemonDecreasePrecision(firstAttacker);
  }
}
