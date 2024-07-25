import { confusingStatut } from "./confusing-statut.js";

export async function confusingStatut10PercentProbabililityAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = ["Choc Mental", "Rafale Psy"];
  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    firstAttackerAttack.type === "psy" &&
    !secondAttacker.secondaryStatut.isConfused
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 10) {
      await confusingStatut(secondAttacker);
    }
  }
}

export async function confusingStatut20PercentProbabililityAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = ["Escalade", "Vibraqua", "Uppercut"];
  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    (firstAttackerAttack.type === "normal" ||
      firstAttackerAttack.type === "water") &&
    !secondAttacker.secondaryStatut.isConfused
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 20) {
      await confusingStatut(secondAttacker);
    }
  }
}

export async function confusingStatut100PercentProbabililityAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = [
    "Danse-Folle",
    "Doux Baiser",
    "Dynamopoing",
    "Flatterie",
    "Onde Folie",
    "Vantardise",
    "Ultrason",
  ];

  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    (firstAttackerAttack.type === "normal" ||
      firstAttackerAttack.type === "fairy" ||
      firstAttackerAttack.type === "dark" ||
      firstAttackerAttack.type === "spectrum") &&
    !secondAttacker.secondaryStatut.isConfused
  ) {
    await confusingStatut(secondAttacker);
  }
}
