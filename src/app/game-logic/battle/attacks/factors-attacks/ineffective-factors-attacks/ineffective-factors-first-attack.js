import { openDialogueWhenPokemonMakesIneffectiveAttack } from "../../battle-dialogues/dialogues/pokemon-makes-ineffective-attack.dialogue.js";

export const ineffectiveFactorForFirstAttack =
  function ineffectiveFactorForFirstAttack(
    firstAttackType,
    secondAttackerType,
    secondAttackerSecondaryType,
    isFirstAttackActive
  ) {
    if (
      (isFirstAttackActive &&
        secondAttackerType === "spectrum" &&
        firstAttackType === "normal") ||
      (secondAttackerType === "spectrum" && firstAttackType === "fight") ||
      (secondAttackerType === "steel" && firstAttackType === "poison") ||
      (secondAttackerType === "flight" && firstAttackType === "ground") ||
      (secondAttackerType === "plant" && firstAttackType === "water") ||
      (secondAttackerType === "normal" && firstAttackType === "spectrum") ||
      (secondAttackerType === "dark" && firstAttackType === "psy") ||
      (secondAttackerType === "fairy" && firstAttackType === "dragon") ||
      (secondAttackerType === "rock" && firstAttackType === "electric") ||
      (secondAttackerType === "rock" &&
        secondAttackerSecondaryType === "ground" &&
        firstAttackType === "electric") ||
      (secondAttackerType === "normal" &&
        secondAttackerSecondaryType === "flight" &&
        firstAttackType === "ground") ||
      (secondAttackerType === "normal" &&
        secondAttackerSecondaryType === "flight" &&
        firstAttackType === "spectrum")
    ) {
      openDialogueWhenPokemonMakesIneffectiveAttack();
      return 0;
    } else {
      return 1;
    }
  };
