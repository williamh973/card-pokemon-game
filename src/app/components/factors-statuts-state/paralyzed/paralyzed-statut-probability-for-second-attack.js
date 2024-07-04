import { isStatusValidForParalyzed } from "./status-valid-for-paralyzed.js";

import { paralyzedStatut } from "./paralyzed-statut.js";

export function paralyzedStatut10PercentProbabililityForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive,
  secondAttackType,
  secondAttackerType
) {
  if (
    isSecondAttackActive &&
    (secondAttackType === "electric" || secondAttackType === "normal") &&
    secondAttackerType !== "rock" &&
    secondAttackerType !== "electric" &&
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
  isSecondAttackActive,
  secondAttackType,
  secondAttackerType
) {
  if (
    isSecondAttackActive &&
    (secondAttackType === "electric" ||
      secondAttackType === "normal" ||
      secondAttackType === "dragon" ||
      secondAttackType === "fight" ||
      secondAttackType === "flight") &&
    secondAttackerType !== "rock" &&
    secondAttackerType !== "electric" &&
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
  isSecondAttackActive,
  secondAttackType,
  secondAttackerType
) {
  if (
    isSecondAttackActive &&
    (secondAttackType === "electric" ||
      secondAttackType === "dark" ||
      secondAttackType === "plant") &&
    secondAttackerType !== "rock" &&
    secondAttackerType !== "electric" &&
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
