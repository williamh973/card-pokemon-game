import { addStatusAnimations } from "../../../animations/animations-statuts/add-statut-animation.js";
import { openDialogueWhenPokemonHasPoisonedStatut } from "../../../../../components/battle-dialogues/dialogues/pokemon--has-poisoned-statut.dialogue.js";

import { isStatusValidForPoisoned } from "./status-valid-for-poisoned.js";

export function poisonedStatut10PercentProbabililityForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  if (
    isFirstAttackActive &&
    firstAttacker.firstAttack.type === "poison" &&
    (secondAttacker.type !== "poison" || secondAttacker.type !== "steel") &&
    firstAttacker.firstAttack.name === "Queue-Poison" &&
    isStatusValidForPoisoned(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 10) {
      secondAttacker.primaryStatut = "poisoned";
      addStatusAnimations(secondAttacker);
      openDialogueWhenPokemonHasPoisonedStatut(secondAttacker);
    }
  }
}

export function poisonedStatut20PercentProbabililityForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  if (
    isFirstAttackActive &&
    firstAttacker.firstAttack.type === "poison" &&
    (secondAttacker.type !== "poison" || secondAttacker.type !== "steel") &&
    firstAttacker.firstAttack.name === "Double-Dard" &&
    isStatusValidForPoisoned(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 20) {
      secondAttacker.primaryStatut = "poisoned";
      addStatusAnimations(secondAttacker);
      openDialogueWhenPokemonHasPoisonedStatut(secondAttacker);
    }
  }
}

export function poisonedStatut30PercentProbabililityForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  if (
    isFirstAttackActive &&
    firstAttacker.firstAttack.type === "poison" &&
    (secondAttacker.type !== "poison" || secondAttacker.type !== "steel") &&
    (firstAttacker.firstAttack.name === "Bomb-Beurk" ||
      firstAttacker.firstAttack.name === "Crochetvenin" ||
      firstAttacker.firstAttack.name === "Dard-Venin" ||
      firstAttacker.firstAttack.name === "Détricanon" ||
      firstAttacker.firstAttack.name === "Détritus" ||
      firstAttacker.firstAttack.name === "Direct Toxik") &&
    isStatusValidForPoisoned(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 100) {
      secondAttacker.primaryStatut = "poisoned";
      addStatusAnimations(secondAttacker);
      openDialogueWhenPokemonHasPoisonedStatut(secondAttacker);
    }
  }
}

export function poisonedStatut40PercentProbabililityForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  if (
    isFirstAttackActive &&
    firstAttacker.firstAttack.type === "poison" &&
    (secondAttacker.type !== "poison" || secondAttacker.type !== "steel") &&
    firstAttacker.firstAttack.name === "Puredpois" &&
    isStatusValidForPoisoned(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 40) {
      secondAttacker.primaryStatut = "poisoned";
      addStatusAnimations(secondAttacker);
      openDialogueWhenPokemonHasPoisonedStatut(secondAttacker);
    }
  }
}

export function poisonedStatut100PercentProbabililityForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  if (
    isFirstAttackActive &&
    firstAttacker.firstAttack.type === "poison" &&
    (secondAttacker.type !== "poison" || secondAttacker.type !== "steel") &&
    (firstAttacker.firstAttack.name === "Gaz Toxik" ||
      firstAttacker.firstAttack.name === "Toxik") &&
    isStatusValidForPoisoned(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 100) {
      secondAttacker.primaryStatut = "poisoned";
      addStatusAnimations(secondAttacker);
      openDialogueWhenPokemonHasPoisonedStatut(secondAttacker);
    }
  }
}
