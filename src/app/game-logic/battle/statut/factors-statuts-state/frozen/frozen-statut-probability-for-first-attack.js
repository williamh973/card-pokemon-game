import { addStatusAnimations } from "../../../animations/animations-statuts/add-statut-animation.js";
import { openDialogueWhenPokemonHasFrozenStatut } from "../../../../../components/battle-dialogues/dialogues/pokemon-has-frozen-statut.dialogue.js";
import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";

export function frozenStatut10PercentProbabililityForFirstAttack(
  firstAttacker,
  secondAttacker
) {
  if (
    pokemonVariables.isFirstAttackActive &&
    (firstAttacker.firstAttack.type === "ice" ||
      firstAttacker.firstAttack.type === "normal") &&
    (firstAttacker.firstAttack.name === "Blizzard" ||
      firstAttacker.firstAttack.name === "Crocs Givre" ||
      firstAttacker.firstAttack.name === "Laser Glace" ||
      firstAttacker.firstAttack.name === "Poinglace" ||
      firstAttacker.firstAttack.name === "Poudreuse" ||
      firstAttacker.firstAttack.name === "Triplattaque") &&
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
