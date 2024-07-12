import { isStatusValidForAsleep } from "./status-valid-for-asleep.js";

import { asleepStatut } from "./asleep-statut.js";

export function asleepStatut30PercentProbabililityForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  if (
    isSecondAttackActive &&
    firstAttacker.secondAttack.type === "normal" &&
    firstAttacker.secondAttack.name === "Force Cachée" &&
    isStatusValidForAsleep(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 30) {
      asleepStatut(secondAttacker);
    }
  }
}

export function asleepStatut100PercentProbabililityForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  if (
    isSecondAttackActive &&
    (firstAttacker.secondAttack.type === "normal" ||
      firstAttacker.secondAttack.type === "psy" ||
      firstAttacker.secondAttack.type === "plant" ||
      firstAttacker.secondAttack.type === "dark") &&
    (firstAttacker.secondAttack.name === "Berceuse" ||
      firstAttacker.secondAttack.name === "Grobisou" ||
      firstAttacker.secondAttack.name === "Hypnose" ||
      firstAttacker.secondAttack.name === "Poudre Dodo" ||
      firstAttacker.secondAttack.name === "Siffl'herbe" ||
      firstAttacker.secondAttack.name === "Spore" ||
      firstAttacker.secondAttack.name === "Trou Noir") &&
    isStatusValidForAsleep(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 100) {
      asleepStatut(secondAttacker);
    }
  }
}
