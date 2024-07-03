import { openDialogueWhenPokemonHasPoisonedStatut } from "../../../battle-dialogues/dialogues/pokemon--has-poisoned-statut.dialogue.js";

import { isStatusValidForPoisoned } from "./status-valid-for-poisoned.js";

export function poisonedStatut10PercentProbabililityForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive,
  secondAttackType,
  secondAttackerType
) {
  if (
    isSecondAttackActive &&
    secondAttackType === "poison" &&
    (secondAttackerType !== "poison" || secondAttackerType !== "steel") &&
    firstAttacker.secondAttack.name === "Queue-Poison" &&
    isStatusValidForPoisoned(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 10) {
      secondAttacker.primaryStatut = "poisoned";
      openDialogueWhenPokemonHasPoisonedStatut(secondAttacker);
    }
  }
}

export function poisonedStatut20PercentProbabililityForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive,
  secondAttackType,
  secondAttackerType
) {
  if (
    isSecondAttackActive &&
    secondAttackType === "poison" &&
    (secondAttackerType !== "poison" || secondAttackerType !== "steel") &&
    firstAttacker.secondAttack.name === "Double-Dard" &&
    isStatusValidForPoisoned(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 20) {
      secondAttacker.primaryStatut = "poisoned";
      openDialogueWhenPokemonHasPoisonedStatut(secondAttacker);
    }
  }
}

export function poisonedStatut30PercentProbabililityForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive,
  secondAttackType,
  secondAttackerType
) {
  if (
    isSecondAttackActive &&
    secondAttackType === "poison" &&
    (secondAttackerType !== "poison" || secondAttackerType !== "steel") &&
    (firstAttacker.secondAttack.name === "Bomb-Beurk" ||
      firstAttacker.secondAttack.name === "Crochetvenin" ||
      firstAttacker.secondAttack.name === "Dard-Venin" ||
      firstAttacker.secondAttack.name === "Détricanon" ||
      firstAttacker.secondAttack.name === "Détritus" ||
      firstAttacker.secondAttack.name === "Direct Toxik") &&
    isStatusValidForPoisoned(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 30) {
      secondAttacker.primaryStatut = "poisoned";
      openDialogueWhenPokemonHasPoisonedStatut(secondAttacker);
    }
  }
}

export function poisonedStatut40PercentProbabililityForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive,
  secondAttackType,
  secondAttackerType
) {
  if (
    isSecondAttackActive &&
    secondAttackType === "poison" &&
    (secondAttackerType !== "poison" || secondAttackerType !== "steel") &&
    firstAttacker.secondAttack.name === "Puredpois" &&
    isStatusValidForPoisoned(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 40) {
      secondAttacker.primaryStatut = "poisoned";
      openDialogueWhenPokemonHasPoisonedStatut(secondAttacker);
    }
  }
}

export function poisonedStatut100PercentProbabililityForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive,
  secondAttackType,
  secondAttackerType
) {
  if (
    isSecondAttackActive &&
    secondAttackType === "poison" &&
    (secondAttackerType !== "poison" || secondAttackerType !== "steel") &&
    (firstAttacker.secondAttack.name === "Gaz Toxik" ||
      firstAttacker.secondAttack.name === "Toxik") &&
    isStatusValidForPoisoned(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 100) {
      secondAttacker.primaryStatut = "poisoned";
      openDialogueWhenPokemonHasPoisonedStatut(secondAttacker);
    }
  }
}
