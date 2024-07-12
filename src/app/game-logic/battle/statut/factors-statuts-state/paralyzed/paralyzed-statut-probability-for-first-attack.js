import { isStatusValidForParalyzed } from "./status-valid-for-paralyzed.js";

import { paralyzedStatut } from "./paralyzed-statut.js";

export function paralyzedStatut10PercentProbabililityForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  if (
    isFirstAttackActive &&
    (firstAttacker.firstAttack.type === "electric" ||
      firstAttacker.firstAttack.type === "normal") &&
    secondAttacker.type !== "rock" &&
    secondAttacker.type !== "electric" &&
    (firstAttacker.firstAttack.name === "Crocs Éclair" ||
      firstAttacker.firstAttack.name === "Éclair" ||
      firstAttacker.firstAttack.name === "Poing-Éclair" ||
      firstAttacker.firstAttack.name === "Tonnerre" ||
      firstAttacker.firstAttack.name === "Triplattaque") &&
    isStatusValidForParalyzed(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 10) {
      paralyzedStatut(secondAttacker);
    }
  }
}

export function paralyzedStatut30PercentProbabililityForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  if (
    isFirstAttackActive &&
    (firstAttacker.firstAttack.type === "electric" ||
      firstAttacker.firstAttack.type === "normal" ||
      firstAttacker.firstAttack.type === "dragon" ||
      firstAttacker.firstAttack.type === "fight" ||
      firstAttacker.firstAttack.type === "flight") &&
    secondAttacker.type !== "rock" &&
    secondAttacker.type !== "electric" &&
    (firstAttacker.firstAttack.name === "Coup d'jus" ||
      firstAttacker.firstAttack.name === "Dracosouffle" ||
      firstAttacker.firstAttack.name === "Étincelle" ||
      firstAttacker.firstAttack.name === "Fatal Foudre" ||
      firstAttacker.firstAttack.name === "Force Cachée" ||
      firstAttacker.firstAttack.name === "Forte-Paume" ||
      firstAttacker.firstAttack.name === "Léchouille" ||
      firstAttacker.firstAttack.name === "Plaquage" ||
      firstAttacker.firstAttack.name === "Rebond") &&
    isStatusValidForParalyzed(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 30) {
      paralyzedStatut(secondAttacker);
    }
  }
}

export function paralyzedStatut100PercentProbabililityForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  if (
    isFirstAttackActive &&
    (firstAttacker.firstAttack.type === "electric" ||
      firstAttacker.firstAttack.type === "dark" ||
      firstAttacker.firstAttack.type === "plant") &&
    secondAttacker.type !== "rock" &&
    secondAttacker.type !== "electric" &&
    (firstAttacker.firstAttack.name === "Cage-Eclair" ||
      firstAttacker.firstAttack.name === "Dégommage" ||
      firstAttacker.firstAttack.name === "Élecanon" ||
      firstAttacker.firstAttack.name === "Para-Spore") &&
    isStatusValidForParalyzed(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 100) {
      paralyzedStatut(secondAttacker);
    }
  }
}
