import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";
import { confusingStatut } from "./confusing-statut.js";

export function confusingStatut10PercentProbabililityForFirstAttack(
  firstAttacker,
  secondAttacker
) {
  if (
    pokemonVariables.isFirstAttackActive &&
    firstAttacker.firstAttack.type === "psy" &&
    (firstAttacker.firstAttack.name === "Choc Mental" ||
      firstAttacker.firstAttack.name === "Rafale Psy") &&
    !secondAttacker.secondaryStatut.isConfused
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 10) {
      confusingStatut(secondAttacker);
    }
  }
}

export function confusingStatut20PercentProbabililityForFirstAttack(
  firstAttacker,
  secondAttacker
) {
  if (
    pokemonVariables.isFirstAttackActive &&
    (firstAttacker.firstAttack.type === "normal" ||
      firstAttacker.firstAttack.type === "water") &&
    (firstAttacker.firstAttack.name === "Escalade" ||
      firstAttacker.firstAttack.name === "Vibraqua" ||
      firstAttacker.firstAttack.name === "Uppercut") &&
    !secondAttacker.secondaryStatut.isConfused
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 20) {
      confusingStatut(secondAttacker);
    }
  }
}

export function confusingStatut100PercentProbabililityForFirstAttack(
  firstAttacker,
  secondAttacker
) {
  if (
    pokemonVariables.isFirstAttackActive &&
    (firstAttacker.firstAttack.type === "normal" ||
      firstAttacker.firstAttack.type === "fairy" ||
      firstAttacker.firstAttack.type === "dark" ||
      firstAttacker.firstAttack.type === "spectrum") &&
    (firstAttacker.firstAttack.name === "Danse-Folle" ||
      firstAttacker.firstAttack.name === "Doux Baiser" ||
      firstAttacker.firstAttack.name === "Dynamopoing" ||
      firstAttacker.firstAttack.name === "Flatterie" ||
      firstAttacker.firstAttack.name === "Onde Folie" ||
      firstAttacker.firstAttack.name === "Vantardise" ||
      firstAttacker.firstAttack.name === "Ultrason") &&
    !secondAttacker.secondaryStatut.isConfused
  ) {
    confusingStatut(secondAttacker);
  }
}
