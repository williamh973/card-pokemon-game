import { isStatusValidForParalyzed } from "./status-valid-for-paralyzed.js";
import { paralyzedStatut } from "./paralyzed-statut.js";

export function paralyzedStatut10PercentProbabililityAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = [
    "Crocs Éclair",
    "Éclair",
    "Poing-Éclair",
    "Tonnerre",
    "Triplattaque",
  ];

  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    (firstAttackerAttack.type === "electric" ||
      firstAttackerAttack.type === "normal") &&
    secondAttacker.type !== "rock" &&
    secondAttacker.type !== "electric" &&
    isStatusValidForParalyzed(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 100) {
      paralyzedStatut(secondAttacker);
    }
  }
}

export function paralyzedStatut30PercentProbabililityAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = [
    "Coup d'jus",
    "Dracosouffle",
    "Étincelle",
    "Fatal Foudre",
    "Force Cachée",
    "Forte-Paume",
    "Léchouille",
    "Plaquage",
    "Rebond",
  ];

  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    (firstAttackerAttack.type === "electric" ||
      firstAttackerAttack.type === "normal" ||
      firstAttackerAttack.type === "dragon" ||
      firstAttackerAttack.type === "fight" ||
      firstAttackerAttack.type === "flight") &&
    secondAttacker.type !== "rock" &&
    secondAttacker.type !== "electric" &&
    isStatusValidForParalyzed(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 30) {
      paralyzedStatut(secondAttacker);
    }
  }
}

export function paralyzedStatut100PercentProbabililityAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = [
    "Cage-Eclair",
    "Dégommage",
    "Élecanon",
    "Para-Spore",
  ];

  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    (firstAttackerAttack.type === "electric" ||
      firstAttackerAttack.type === "dark" ||
      firstAttackerAttack.type === "plant") &&
    secondAttacker.type !== "rock" &&
    secondAttacker.type !== "electric" &&
    isStatusValidForParalyzed(secondAttacker)
  ) {
    paralyzedStatut(secondAttacker);
  }
}
