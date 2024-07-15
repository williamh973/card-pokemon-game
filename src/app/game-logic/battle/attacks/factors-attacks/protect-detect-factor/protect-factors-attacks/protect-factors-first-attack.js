import { protectionActived } from "./protect-detect-capacity-actived.js";
import { pokemonDecreasePrecision } from "./precision-decrease-and-reset.js";

const possibleAttacksList = ["Abri", "Détection"];

export function protectFactorAttack(firstAttacker, firstAttackerAttack) {
  if (possibleAttacksList.includes(firstAttackerAttack.name)) {
    protectionActived();

    pokemonDecreasePrecision(firstAttacker, firstAttackerAttack);
  }
}
