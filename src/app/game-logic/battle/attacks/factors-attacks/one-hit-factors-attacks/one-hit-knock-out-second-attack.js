import { openDialogueWhenPokemonHasBeenKoByOneHitKnockout } from "../../../../../components/battle-dialogues/dialogues/pokemon-has-been-ko-by-one-hit-knockout.dialogue.js";

export function oneHitKnockoutFactorForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  if (
    isSecondAttackActive &&
    secondAttacker.type !== "spectrum" &&
    (firstAttacker.secondAttack.name === "Guillotine" ||
      firstAttacker.secondAttack.name === "Empal'Korne")
  ) {
    secondAttacker.stats.hp = 0;
    openDialogueWhenPokemonHasBeenKoByOneHitKnockout(secondAttacker);
    return 1;
  } else if (
    isSecondAttackActive &&
    secondAttacker.type === "spectrum" &&
    (firstAttacker.secondAttack.name === "Guillotine" ||
      firstAttacker.secondAttack.name === "Empal'Korne")
  ) {
    return 0;
  } else {
    return 1;
  }
}
