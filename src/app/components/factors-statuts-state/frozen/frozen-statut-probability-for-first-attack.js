import { openDialogueWhenPokemonHasFrozenStatut } from "../../battle-dialogues/dialogues/dialogue-battle.js";

export const frozenStatut10PercentProbabililityForFirstAttack =
  function frozenStatut10PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive,
    firstAttackType
  ) {
    if (
      isFirstAttackActive &&
      (firstAttackType === "ice" || firstAttackType === "normal") &&
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
        openDialogueWhenPokemonHasFrozenStatut(secondAttacker);
      }
    }
  };
