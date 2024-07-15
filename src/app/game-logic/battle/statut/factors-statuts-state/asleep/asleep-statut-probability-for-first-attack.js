import { isStatusValidForAsleep } from "./status-valid-for-asleep.js";
import { asleepStatut } from "./asleep-statut.js";

export function asleepStatut30PercentProbabililityAttack(
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
      asleepStatut(secondAttacker);
    }
  }
}

export function asleepStatut100PercentProbabililityAttack(
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
    asleepStatut(secondAttacker);
  }
}
