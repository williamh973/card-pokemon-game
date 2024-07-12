import { openDialogueWhenPokemonMakesIneffectiveAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-ineffective-attack.dialogue.js";

export const ineffectiveFactorForSecondAttack =
  function ineffectiveFactorForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive
  ) {
    if (
      (isSecondAttackActive &&
        secondAttacker.type === "spectrum" &&
        firstAttacker.secondAttack.type === "normal") ||
      (secondAttacker.type === "spectrum" &&
        firstAttacker.secondAttack.type === "fight") ||
      (secondAttacker.type === "steel" &&
        firstAttacker.secondAttack.type === "poison") ||
      (secondAttacker.type === "flight" &&
        firstAttacker.secondAttack.type === "ground") ||
      (secondAttacker.type === "plant" &&
        firstAttacker.secondAttack.type === "water") ||
      (secondAttacker.type === "normal" &&
        firstAttacker.secondAttack.type === "spectrum") ||
      (secondAttacker.type === "dark" &&
        firstAttacker.secondAttack.type === "psy") ||
      (secondAttacker.type === "fairy" &&
        firstAttacker.secondAttack.type === "dragon") ||
      (secondAttacker.type === "rock" &&
        firstAttacker.secondAttack.type === "electric") ||
      (secondAttacker.type === "rock" &&
        secondAttacker.secondaryType === "ground" &&
        firstAttacker.secondAttack.type === "electric") ||
      (secondAttacker.type === "normal" &&
        secondAttacker.secondaryType === "flight" &&
        firstAttacker.secondAttack.type === "ground") ||
      (secondAttacker.type === "normal" &&
        secondAttacker.secondaryType === "flight" &&
        firstAttacker.secondAttack.type === "spectrum")
    ) {
      openDialogueWhenPokemonMakesIneffectiveAttack();
      return 0;
    } else {
      return 1;
    }
  };
