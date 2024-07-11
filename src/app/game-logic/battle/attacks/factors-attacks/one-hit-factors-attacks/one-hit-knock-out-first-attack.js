import { openDialogueWhenPokemonHasBeenKoByOneHitKnockout } from "../../battle-dialogues/dialogues/pokemon-has-been-ko-by-one-hit-knockout.dialogue.js";

export function oneHitKnockoutFactorForFirstAttack(
  isFirstAttackActive,
  secondAttackerType,
  firstAttacker,
  secondAttacker
) {
  if (
    isFirstAttackActive &&
    secondAttackerType !== "spectrum" &&
    (firstAttacker.firstAttack.name === "Guillotine" ||
      firstAttacker.firstAttack.name === "Empal'Korne")
  ) {
    secondAttacker.stats.hp = 0;
    openDialogueWhenPokemonHasBeenKoByOneHitKnockout(secondAttacker);
    return 1;
  } else if (
    isFirstAttackActive &&
    secondAttackerType === "spectrum" &&
    (firstAttacker.firstAttack.name === "Guillotine" ||
      firstAttacker.firstAttack.name === "Empal'Korne")
  ) {
    return 0;
  } else {
    return 1;
  }
}
