import { openDialogueWhenPokemonMakesIneffectiveAttack } from "../../dialogue-fight.js";

export const ineffectiveFactorForSecondAttack =
  function ineffectiveFactorForSecondAttack(
    secondAttackType,
    secondAttackerType,
    secondAttackerSecondaryType,
    isSecondAttackActive,
  ) {
    if (
      (isSecondAttackActive &&
        secondAttackerType === "spectrum" &&
        secondAttackType === "normal") ||
      (secondAttackerType === "spectrum" && secondAttackType === "fight") ||
      (secondAttackerType === "steel" && secondAttackType === "poison") ||
      (secondAttackerType === "flight" && secondAttackType === "ground") ||
      (secondAttackerType === "plant" && secondAttackType === "water") ||
      (secondAttackerType === "normal" && secondAttackType === "spectrum") ||
      (secondAttackerType === "dark" && secondAttackType === "psy") ||
      (secondAttackerType === "fairy" && secondAttackType === "dragon") ||
      (secondAttackerType === "rock" && secondAttackType === "electric") ||
      (secondAttackerType === "rock" &&
        secondAttackerSecondaryType === "ground" &&
        secondAttackType === "electric") ||
      (secondAttackerType === "normal" &&
        secondAttackerSecondaryType === "flight" &&
        secondAttackType === "ground") ||
      (secondAttackerType === "normal" &&
        secondAttackerSecondaryType === "flight" &&
        secondAttackType === "spectrum")
    ) {
      openDialogueWhenPokemonMakesIneffectiveAttack();
      return 0;
    } else {
      return 1;
    }
  };
