import { confusingStatut } from "./confusing-statut.js";

export function confusingStatut10PercentProbabililityForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  if (
    isSecondAttackActive &&
    firstAttacker.secondAttack.type === "psy" &&
    (firstAttacker.secondAttack.name === "Choc Mental" ||
      firstAttacker.secondAttack.name === "Rafale Psy") &&
    !secondAttacker.secondaryStatut.isConfused
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 10) {
      confusingStatut(secondAttacker);
    }
  }
}

export function confusingStatut20PercentProbabililityForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  if (
    isSecondAttackActive &&
    (firstAttacker.secondAttack.type === "normal" ||
      firstAttacker.secondAttack.type === "water") &&
    (firstAttacker.secondAttack.name === "Escalade" ||
      firstAttacker.secondAttack.name === "Vibraqua" ||
      firstAttacker.secondAttack.name === "Uppercut") &&
    !secondAttacker.secondaryStatut.isConfused
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 20) {
      confusingStatut(secondAttacker);
    }
  }
}

export function confusingStatut100PercentProbabililityForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  if (
    isSecondAttackActive &&
    (firstAttacker.secondAttack.type === "normal" ||
      firstAttacker.secondAttack.type === "fairy" ||
      firstAttacker.secondAttack.type === "dark" ||
      firstAttacker.secondAttack.type === "spectrum") &&
    (firstAttacker.secondAttack.name === "Danse-Folle" ||
      firstAttacker.secondAttack.name === "Doux Baiser" ||
      firstAttacker.secondAttack.name === "Dynamopoing" ||
      firstAttacker.secondAttack.name === "Flatterie" ||
      firstAttacker.secondAttack.name === "Onde Folie" ||
      firstAttacker.secondAttack.name === "Vantardise" ||
      firstAttacker.secondAttack.name === "Ultrason") &&
    !secondAttacker.secondaryStatut.isConfused
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 100) {
      confusingStatut(secondAttacker);
    }
  }
}
