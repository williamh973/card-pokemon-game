import { isStatusValidForBurning } from "./status-valid-for-burning.js";

import { burningStatut } from "./burning-statut.js";

export function burningStatut10PercentProbabililityForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  if (
    isSecondAttackActive &&
    (firstAttacker.secondAttack.type === "fire" ||
      firstAttacker.secondAttack.type === "normal") &&
    secondAttacker.type !== "fire" &&
    (firstAttacker.secondAttack.name === "Flammèche" ||
      firstAttacker.secondAttack.name === "Triplattaque" ||
      firstAttacker.secondAttack.name === "Boutefeu" ||
      firstAttacker.secondAttack.name === "Canicule" ||
      firstAttacker.secondAttack.name === "Crocs Feu" ||
      firstAttacker.secondAttack.name === "Déflagration" ||
      firstAttacker.secondAttack.name === "Lance-Flammes" ||
      firstAttacker.secondAttack.name === "Pied Brûleur" ||
      firstAttacker.secondAttack.name === "Poing de Feu" ||
      firstAttacker.secondAttack.name === "Roue de Feu") &&
    isStatusValidForBurning(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 10) {
      burningStatut(secondAttacker);
    }
  }
}

export function burningStatut30PercentProbabililityForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  if (
    isSecondAttackActive &&
    (firstAttacker.secondAttack.type === "fire" ||
      firstAttacker.secondAttack.type === "water" ||
      firstAttacker.secondAttack.type === "ice" ||
      firstAttacker.secondAttack.type === "ground" ||
      firstAttacker.secondAttack.type === "spectrum") &&
    secondAttacker.type !== "fire" &&
    (firstAttacker.secondAttack.name === "Ébullilave" ||
      firstAttacker.secondAttack.name === "Ébullition" ||
      firstAttacker.secondAttack.name === "Feu Glacé" ||
      firstAttacker.secondAttack.name === "Incendie" ||
      firstAttacker.secondAttack.name === "Crocs Feu" ||
      firstAttacker.secondAttack.name === "Sable Ardent" ||
      firstAttacker.secondAttack.name === "Cortège Funèbre") &&
    isStatusValidForBurning(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 30) {
      burningStatut(secondAttacker);
    }
  }
}

export function burningStatut50PercentProbabililityForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  if (
    isSecondAttackActive &&
    firstAttacker.secondAttack.type === "fire" &&
    secondAttacker.type !== "fire" &&
    firstAttacker.secondAttack.name === "Feu Sacré" &&
    isStatusValidForBurning(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 50) {
      burningStatut(secondAttacker);
    }
  }
}

export function burningStatut100PercentProbabililityForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  if (
    isSecondAttackActive &&
    (firstAttacker.secondAttack.type === "fire" ||
      firstAttacker.secondAttack.type === "dark") &&
    secondAttacker.type !== "fire" &&
    (firstAttacker.secondAttack.name === "Dégommage" ||
      firstAttacker.secondAttack.name === "Feu d'Enfer" ||
      firstAttacker.secondAttack.name === "Feu Follet") &&
    isStatusValidForBurning(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 100) {
      burningStatut(secondAttacker);
    }
  }
}
