import { openDialogueWhenPokemonHasBeenKoByOneHitKnockout } from "../../dialogue-fight.js";

export const oneHitKnockoutFactorForSecondAttack =
  function oneHitKnockoutFactorForSecondAttack(
    isSecondAttackActive,
    secondAttackerType,
    firstAttacker,
    secondAttacker,
  ) {
    if (
      isSecondAttackActive &&
      secondAttackerType !== "spectrum" &&
      (firstAttacker.secondAttack.name === "Guillotine" ||
        firstAttacker.secondAttack.name === "Empal'Korne")
    ) {
      secondAttacker.stats.hp = 0;
      openDialogueWhenPokemonHasBeenKoByOneHitKnockout(secondAttacker);
      return 1;
    } else if (
      isSecondAttackActive &&
      secondAttackerType === "spectrum" &&
      (firstAttacker.secondAttack.name === "Guillotine" ||
        firstAttacker.secondAttack.name === "Empal'Korne")
    ) {
      return 0;
    } else {
      return 1;
    }
  };
