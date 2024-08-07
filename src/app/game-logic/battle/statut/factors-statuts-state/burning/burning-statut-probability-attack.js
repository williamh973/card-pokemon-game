import { isStatusValidForBurning } from "./status-valid-for-burning.js";
import { burningStatut } from "./burning-statut.js";

export async function burningStatut10PercentProbabililityAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = [
    "Flammèche",
    "Triplattaque",
    "Boutefeu",
    "Canicule",
    "Crocs Feu",
    "Déflagration",
    "Lance-Flammes",
    "Pied Brûleur",
    "Poing de Feu",
    "Roue de Feu",
  ];

  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    (firstAttackerAttack.type === "fire" ||
      firstAttackerAttack.type === "normal") &&
    secondAttacker.type !== "fire" &&
    isStatusValidForBurning(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 10) {
      await burningStatut(secondAttacker);
    }
  }
}

export async function burningStatut30PercentProbabililityAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = [
    "Ébullilave",
    "Ébullition",
    "Feu Glacé",
    "Incendie",
    "Crocs Feu",
    "Déflagration",
    "Sable Ardent",
    "Cortège Funèbre",
  ];
  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    (firstAttackerAttack.type === "fire" ||
      firstAttackerAttack.type === "water" ||
      firstAttackerAttack.type === "ice" ||
      firstAttackerAttack.type === "ground" ||
      firstAttackerAttack.type === "spectrum") &&
    secondAttacker.type !== "fire" &&
    isStatusValidForBurning(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 30) {
      await burningStatut(secondAttacker);
    }
  }
}

export async function burningStatut50PercentProbabililityAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = ["Feu Sacré"];
  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    firstAttackerAttack.type === "fire" &&
    secondAttacker.type !== "fire" &&
    isStatusValidForBurning(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 50) {
      await burningStatut(secondAttacker);
    }
  }
}

export async function burningStatut100PercentProbabililityAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = ["Dégommage", "Feu d'Enfer", "Feu Follet"];
  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    (firstAttackerAttack.type === "fire" ||
      firstAttackerAttack.type === "dark") &&
    secondAttacker.type !== "fire" &&
    isStatusValidForBurning(secondAttacker)
  ) {
    await burningStatut(secondAttacker);
  }
}
