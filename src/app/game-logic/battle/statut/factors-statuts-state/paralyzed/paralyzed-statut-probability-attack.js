import { isStatusValidForParalyzed } from "./status-valid-for-paralyzed.js";
import { paralyzedStatut } from "./paralyzed-statut.js";

export async function paralyzedStatut10PercentProbabililityAttack(
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

    if (randomNumber <= 10) {
      await paralyzedStatut(secondAttacker);
    }
  }
}

export async function paralyzedStatut30PercentProbabililityAttack(
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

  const possibleAttackTypeList = [
    "electric",
    "normal",
    "dragon",
    "fight",
    "flight",
    "spectrum",
  ];

  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    possibleAttackTypeList.includes(firstAttackerAttack.type) &&
    secondAttacker.type !== "rock" &&
    secondAttacker.type !== "electric" &&
    isStatusValidForParalyzed(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 30) {
      await paralyzedStatut(secondAttacker);
    }
  }
}

export async function paralyzedStatut100PercentProbabililityAttack(
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
    await paralyzedStatut(secondAttacker);
  }
}
