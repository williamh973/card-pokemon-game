import { isStatusValidForParalyzed } from "./status-valid-for-paralyzed.js";

import { paralyzedStatut } from "./paralyzed-statut.js";

export function paralyzedStatut10PercentProbabililityForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  if (
    isSecondAttackActive &&
    (firstAttacker.secondAttack.type === "electric" ||
      firstAttacker.secondAttack.type === "normal") &&
    secondAttacker.type !== "rock" &&
    secondAttacker.type !== "electric" &&
    (firstAttacker.secondAttack.name === "Crocs Éclair" ||
      firstAttacker.secondAttack.name === "Éclair" ||
      firstAttacker.secondAttack.name === "Poing-Éclair" ||
      firstAttacker.secondAttack.name === "Tonnerre" ||
      firstAttacker.secondAttack.name === "Triplattaque") &&
    isStatusValidForParalyzed(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 10) {
      paralyzedStatut(secondAttacker);
    }
  }
}

export function paralyzedStatut30PercentProbabililityForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  if (
    isSecondAttackActive &&
    (firstAttacker.secondAttack.type === "electric" ||
      firstAttacker.secondAttack.type === "normal" ||
      firstAttacker.secondAttack.type === "dragon" ||
      firstAttacker.secondAttack.type === "fight" ||
      firstAttacker.secondAttack.type === "flight") &&
    secondAttacker.type !== "rock" &&
    secondAttacker.type !== "electric" &&
    (firstAttacker.secondAttack.name === "Coup d'jus" ||
      firstAttacker.secondAttack.name === "Dracosouffle" ||
      firstAttacker.secondAttack.name === "Étincelle" ||
      firstAttacker.secondAttack.name === "Fatal Foudre" ||
      firstAttacker.secondAttack.name === "Force Cachée" ||
      firstAttacker.secondAttack.name === "Forte-Paume" ||
      firstAttacker.secondAttack.name === "Léchouille" ||
      firstAttacker.secondAttack.name === "Plaquage" ||
      firstAttacker.secondAttack.name === "Rebond") &&
    isStatusValidForParalyzed(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 30) {
      paralyzedStatut(secondAttacker);
    }
  }
}

export function paralyzedStatut100PercentProbabililityForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  if (
    isSecondAttackActive &&
    (firstAttacker.secondAttack.type === "electric" ||
      firstAttacker.secondAttack.type === "dark" ||
      firstAttacker.secondAttack.type === "plant") &&
    secondAttacker.type !== "rock" &&
    secondAttacker.type !== "electric" &&
    (firstAttacker.secondAttack.name === "Cage-Éclair" ||
      firstAttacker.secondAttack.name === "Dégommage" ||
      firstAttacker.secondAttack.name === "Élecanon" ||
      firstAttacker.secondAttack.name === "Para-Spore") &&
    isStatusValidForParalyzed(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 100) {
      paralyzedStatut(secondAttacker);
    }
  }
}
