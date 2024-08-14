import { applyPrimaryStatusAnimations } from "../../../animations/animations-statuts/add/apply-primary-statut-class.js";
import { openDialogueWhenPokemonHasFrozenStatut } from "../../../../../components/battle-dialogues/dialogues/pokemon-has-frozen-statut.dialogue.js";

export async function frozenStatut10PercentProbabililityAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = [
    "Blizzard",
    "Crocs Givre",
    "Laser Glace",
    "Poinglace",
    "Poudreuse",
    "Triplattaque",
  ];

  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    (firstAttackerAttack.type === "ice" ||
      firstAttackerAttack.type === "normal") &&
    secondAttacker.primaryStatut !== "burning" &&
    secondAttacker.primaryStatut !== "paralyzed" &&
    secondAttacker.primaryStatut !== "asleep" &&
    secondAttacker.primaryStatut !== "poisoned" &&
    secondAttacker.primaryStatut !== "frozen"
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 10) {
      secondAttacker.primaryStatut = "frozen";
      await applyPrimaryStatusAnimations(secondAttacker);
      await openDialogueWhenPokemonHasFrozenStatut(secondAttacker);
    }
  }
}
