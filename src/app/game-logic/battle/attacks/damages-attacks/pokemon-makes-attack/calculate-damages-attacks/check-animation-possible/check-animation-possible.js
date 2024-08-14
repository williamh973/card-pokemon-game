import { handleDelayAnimationAttack } from "./handle-delay-attack.js";

export async function isAnimationPossible(
  firstAttacker,
  firstAttackerAttack,
  secondAttacker
) {
  const notAllowedForDelayAttacksList = [
    "Dévorêve",
    "Hypnose",
    "Guillotine",
    "Empal'Korne",
    "Puissance",
    "Malédiction",
  ];

  if (notAllowedForDelayAttacksList.includes(firstAttackerAttack.name)) {
    return;
  } else {
    await handleDelayAnimationAttack(firstAttacker, secondAttacker);
  }
}
