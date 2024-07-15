import { levelFactorForFirstAttack } from "../level-factor-attack.js";

const possibleAttacksList = ["Frappe Atlas", "Ombre Nocturne"];

export function attackThatDependsFirstAttackerLevel(
  firstAttacker,
  firstAttackerAttack,
  damages
) {
  const initialDamages = damages;
  if (possibleAttacksList.includes(firstAttackerAttack.name)) {
    let getLevelFactorForFirstAttack = levelFactorForFirstAttack(
      firstAttacker,
      damages
    );
    damages = getLevelFactorForFirstAttack;
    console.log(firstAttackerAttack.name, damages);
    return damages;
  }
  return initialDamages;
}
