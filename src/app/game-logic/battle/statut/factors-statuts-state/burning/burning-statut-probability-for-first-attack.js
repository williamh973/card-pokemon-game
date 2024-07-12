import { isStatusValidForBurning } from "./status-valid-for-burning.js";

import { burningStatut } from "./burning-statut.js";

export function burningStatut10PercentProbabililityForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  if (
    isFirstAttackActive &&
    (firstAttacker.firstAttack.type === "fire" ||
      firstAttacker.firstAttack.type === "normal") &&
    secondAttacker.type !== "fire" &&
    (firstAttacker.firstAttack.name === "Flammèche" ||
      firstAttacker.firstAttack.name === "Triplattaque" ||
      firstAttacker.firstAttack.name === "Boutefeu" ||
      firstAttacker.firstAttack.name === "Canicule" ||
      firstAttacker.firstAttack.name === "Crocs Feu" ||
      firstAttacker.firstAttack.name === "Déflagration" ||
      firstAttacker.firstAttack.name === "Lance-Flammes" ||
      firstAttacker.firstAttack.name === "Pied Brûleur" ||
      firstAttacker.firstAttack.name === "Poing de Feu" ||
      firstAttacker.firstAttack.name === "Roue de Feu") &&
    isStatusValidForBurning(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 10) {
      burningStatut(secondAttacker);
    }
  }
}

export function burningStatut30PercentProbabililityForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  if (
    isFirstAttackActive &&
    (firstAttacker.firstAttack.type === "fire" ||
      firstAttacker.firstAttack.type === "water" ||
      firstAttacker.firstAttack.type === "ice" ||
      firstAttacker.firstAttack.type === "ground" ||
      firstAttacker.firstAttack.type === "spectrum") &&
    secondAttacker.type !== "fire" &&
    (firstAttacker.firstAttack.name === "Ébullilave" ||
      firstAttacker.firstAttack.name === "Ébullition" ||
      firstAttacker.firstAttack.name === "Feu Glacé" ||
      firstAttacker.firstAttack.name === "Incendie" ||
      firstAttacker.firstAttack.name === "Crocs Feu" ||
      firstAttacker.firstAttack.name === "Sable Ardent" ||
      firstAttacker.firstAttack.name === "Cortège Funèbre") &&
    isStatusValidForBurning(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 30) {
      burningStatut(secondAttacker);
    }
  }
}

export function burningStatut50PercentProbabililityForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  if (
    isFirstAttackActive &&
    firstAttacker.firstAttack.type === "fire" &&
    secondAttacker.type !== "fire" &&
    firstAttacker.firstAttack.name === "Feu Sacré" &&
    isStatusValidForBurning(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 50) {
      burningStatut(secondAttacker);
    }
  }
}

export function burningStatut100PercentProbabililityForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  if (
    isFirstAttackActive &&
    (firstAttacker.firstAttack.type === "fire" ||
      firstAttacker.firstAttack.type === "dark") &&
    secondAttacker.type !== "fire" &&
    (firstAttacker.firstAttack.name === "Dégommage" ||
      firstAttacker.firstAttack.name === "Feu d'Enfer" ||
      firstAttacker.firstAttack.name === "Feu Follet") &&
    isStatusValidForBurning(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 100) {
      burningStatut(secondAttacker);
    }
  }
}
