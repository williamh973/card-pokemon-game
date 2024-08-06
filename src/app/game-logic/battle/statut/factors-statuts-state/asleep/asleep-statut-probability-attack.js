import { isStatusValidForAsleep } from "./status-valid-for-asleep.js";
import { asleepStatut } from "./asleep-statut.js";
import { handleDelayAnimationAttack } from "../../../animations/animations-attacks/handle-animation-for-dream-eater-attack.js";

export async function asleepStatut30PercentProbabililityAttack(
  firstAttacker,
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = ["Force Cachée"];
  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    firstAttackerAttack.type === "normal" &&
    isStatusValidForAsleep(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 30) {
      await handleDelayAnimationAttack(firstAttacker, secondAttacker);
      await asleepStatut(secondAttacker);
    }
  }
}

export async function asleepStatut100PercentProbabililityAttack(
  firstAttacker,
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = [
    "Berceuse",
    "Grobisou",
    "Hypnose",
    "Poudre Dodo",
    "Siffl'herbe",
    "Spore",
    "Trou Noir",
  ];
  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    (firstAttackerAttack.type === "normal" ||
      firstAttackerAttack.type === "psy" ||
      firstAttackerAttack.type === "plant" ||
      firstAttackerAttack.type === "dark") &&
    isStatusValidForAsleep(secondAttacker)
  ) {
    await handleDelayAnimationAttack(firstAttacker, secondAttacker);
    await asleepStatut(secondAttacker);
  }
}
