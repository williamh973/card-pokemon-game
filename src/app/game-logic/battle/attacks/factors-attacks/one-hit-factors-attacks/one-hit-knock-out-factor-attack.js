import { openDialogueWhenPokemonHasBeenKoByOneHitKnockout } from "../../../../../components/battle-dialogues/dialogues/pokemon-has-been-ko-by-one-hit-knockout.dialogue.js";
import { openDialogueWhenPokemonMakesIneffectiveAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-ineffective-attack.dialogue.js";
import { handleDelayAnimationAttack } from "../../../animations/animations-attacks/handle-animation-for-dream-eater-attack.js";

export async function oneHitKnockoutFactorAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = ["Guillotine", "Empal'Korne"];

  if (
    secondAttacker.type !== "spectrum" &&
    possibleAttacksList.includes(firstAttackerAttack.name)
  ) {
    secondAttacker.stats.hp = 0;
    await handleDelayAnimationAttack(firstAttacker, secondAttacker);
    await openDialogueWhenPokemonHasBeenKoByOneHitKnockout(secondAttacker);
    return 1;
  } else if (
    secondAttacker.type === "spectrum" &&
    possibleAttacksList.includes(firstAttackerAttack.name)
  ) {
    await openDialogueWhenPokemonMakesIneffectiveAttack();
    return 0;
  } else {
    return 1;
  }
}
