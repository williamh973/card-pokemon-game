import { handleDelayAnimationAttack } from "../../../attacks/damages-attacks/pokemon-makes-attack/calculate-damages-attacks/check-animation-possible/handle-delay-attack.js";
import { confusingStatut } from "./confusing-statut.js";
import { openDialogueWhenPokemonAlreadyConfused } from "../../../../../components/battle-dialogues/dialogues/pokemon-already-confused.js";

export async function confusingStatut10PercentProbabililityAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = ["Choc Mental", "Rafale Psy"];
  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
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
    !secondAttacker.secondaryStatut.isConfused
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 20) {
      await confusingStatut(secondAttacker);
    }
  }
}

export async function confusingStatut100PercentProbabililityAttack(
  firstAttacker,
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
    !secondAttacker.secondaryStatut.isConfused
  ) {
    await handleDelayAnimationAttack(firstAttacker, secondAttacker);
    await confusingStatut(secondAttacker);
  } else if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    secondAttacker.secondaryStatut.isConfused
  ) {
    await openDialogueWhenPokemonAlreadyConfused(secondAttacker);
  }
}
