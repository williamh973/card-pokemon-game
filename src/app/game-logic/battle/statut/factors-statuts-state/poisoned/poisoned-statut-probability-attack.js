import { applyPrimaryStatusAnimations } from "../../../animations/animations-statuts/add/apply-primary-statut-class.js";
import { openDialogueWhenPokemonHasPoisonedStatut } from "../../../../../components/battle-dialogues/dialogues/pokemon--has-poisoned-statut.dialogue.js";
import { isStatusValidForPoisoned } from "./status-valid-for-poisoned.js";

export async function poisonedStatut10PercentProbabililityAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = ["Queue-Poison"];
  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    firstAttackerAttack.type === "poison" &&
    (secondAttacker.type !== "poison" || secondAttacker.type !== "steel") &&
    isStatusValidForPoisoned(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 10) {
      secondAttacker.primaryStatut = "poisoned";
      await applyPrimaryStatusAnimations(secondAttacker);
      await openDialogueWhenPokemonHasPoisonedStatut(secondAttacker);
    }
  }
}

export async function poisonedStatut20PercentProbabililityAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = ["Double-Dard"];
  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    firstAttackerAttack.type === "poison" &&
    (secondAttacker.type !== "poison" || secondAttacker.type !== "steel") &&
    isStatusValidForPoisoned(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 20) {
      secondAttacker.primaryStatut = "poisoned";
      await applyPrimaryStatusAnimations(secondAttacker);
      await openDialogueWhenPokemonHasPoisonedStatut(secondAttacker);
    }
  }
}

export async function poisonedStatut30PercentProbabililityAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = [
    "Bomb-Beurk",
    "Crochetvenin",
    "Dard-Venin",
    "Détricanon",
    "Détritus",
    "Direct Toxik",
  ];
  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    firstAttackerAttack.type === "poison" &&
    (secondAttacker.type !== "poison" || secondAttacker.type !== "steel") &&
    isStatusValidForPoisoned(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 30) {
      secondAttacker.primaryStatut = "poisoned";
      await applyPrimaryStatusAnimations(secondAttacker);
      await openDialogueWhenPokemonHasPoisonedStatut(secondAttacker);
    }
  }
}

export async function poisonedStatut40PercentProbabililityAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = ["Puredpois"];
  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    firstAttackerAttack.type === "poison" &&
    (secondAttacker.type !== "poison" || secondAttacker.type !== "steel") &&
    isStatusValidForPoisoned(secondAttacker)
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 40) {
      secondAttacker.primaryStatut = "poisoned";
      await applyPrimaryStatusAnimations(secondAttacker);
      await openDialogueWhenPokemonHasPoisonedStatut(secondAttacker);
    }
  }
}

export async function poisonedStatut100PercentProbabililityAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = ["Gaz Toxik", "Toxik"];
  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    firstAttackerAttack.type === "poison" &&
    (secondAttacker.type !== "poison" || secondAttacker.type !== "steel") &&
    isStatusValidForPoisoned(secondAttacker)
  ) {
    secondAttacker.primaryStatut = "poisoned";
    await applyPrimaryStatusAnimations(secondAttacker);
    await openDialogueWhenPokemonHasPoisonedStatut(secondAttacker);
  }
}
