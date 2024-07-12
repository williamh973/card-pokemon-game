import { addStatusAnimations } from "../../../animations/animations-statuts/add-statut-animation.js";
import { openDialogueWhenPokemonHasFrozenStatut } from "../../../../../components/battle-dialogues/dialogues/pokemon-has-frozen-statut.dialogue.js";

export function frozenStatut10PercentProbabililityForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  if (
    isSecondAttackActive &&
    (firstAttacker.secondAttack.type === "ice" ||
      firstAttacker.secondAttack.type === "normal") &&
    (firstAttacker.secondAttack.name === "Blizzard" ||
      firstAttacker.secondAttack.name === "Crocs Givre" ||
      firstAttacker.secondAttack.name === "Laser Glace" ||
      firstAttacker.secondAttack.name === "Poinglace" ||
      firstAttacker.secondAttack.name === "Poudreuse" ||
      firstAttacker.secondAttack.name === "Triplattaque") &&
    secondAttacker.primaryStatut !== "burning" &&
    secondAttacker.primaryStatut !== "paralyzed" &&
    secondAttacker.primaryStatut !== "asleep" &&
    secondAttacker.primaryStatut !== "poisoned" &&
    secondAttacker.primaryStatut !== "frozen"
  ) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 10) {
      secondAttacker.primaryStatut = "frozen";
      addStatusAnimations(secondAttacker);
      openDialogueWhenPokemonHasFrozenStatut(secondAttacker);
    }
  }
}
