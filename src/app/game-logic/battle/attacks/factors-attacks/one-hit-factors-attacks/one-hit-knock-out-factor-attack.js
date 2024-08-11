import { openDialogueWhenPokemonHasBeenKoByOneHitKnockout } from "../../../../../components/battle-dialogues/dialogues/pokemon-has-been-ko-by-one-hit-knockout.dialogue.js";
import { openDialogueWhenPokemonMakesIneffectiveAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-ineffective-attack.dialogue.js";
import { handleDelayAnimationAttack } from "../../damages-attacks/pokemon-makes-attack/calculate-damages-attacks/check-animation-possible/handle-delay-attack.js";

export async function oneHitKnockoutFactorAttack(
  firstAttacker,
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
