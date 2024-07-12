import { isStatusValidForAsleep } from "./status-valid-for-asleep.js";
import { asleepStatut } from "./asleep-statut.js";

export function asleepStatut30PercentProbabililityForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  if (
    isFirstAttackActive &&
    firstAttacker.firstAttack.type === "normal" &&
    firstAttacker.firstAttack.name === "Force Cachée" &&
    isStatusValidForAsleep(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 30) {
      asleepStatut(secondAttacker);
    }
  }
}

export function asleepStatut100PercentProbabililityForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  if (
    isFirstAttackActive &&
    (firstAttacker.firstAttack.type === "normal" ||
      firstAttacker.firstAttack.type === "psy" ||
      firstAttacker.firstAttack.type === "plant" ||
      firstAttacker.firstAttack.type === "dark") &&
    (firstAttacker.firstAttack.name === "Berceuse" ||
      firstAttacker.firstAttack.name === "Grobisou" ||
      firstAttacker.firstAttack.name === "Hypnose" ||
      firstAttacker.firstAttack.name === "Poudre Dodo" ||
      firstAttacker.firstAttack.name === "Siffl'herbe" ||
      firstAttacker.firstAttack.name === "Spore" ||
      firstAttacker.firstAttack.name === "Trou Noir") &&
    isStatusValidForAsleep(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 100) {
      asleepStatut(secondAttacker);
    }
  }
}
