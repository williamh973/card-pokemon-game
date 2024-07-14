import { openDialogueWhenPokemonHasBeenKoByOneHitKnockout } from "../../../../../components/battle-dialogues/dialogues/pokemon-has-been-ko-by-one-hit-knockout.dialogue.js";
import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";

export function oneHitKnockoutFactorForFirstAttack(
  firstAttacker,
  secondAttacker
) {
  if (
    pokemonVariables.isFirstAttackActive &&
    secondAttacker.type !== "spectrum" &&
    (firstAttacker.firstAttack.name === "Guillotine" ||
      firstAttacker.firstAttack.name === "Empal'Korne")
  ) {
    secondAttacker.stats.hp = 0;
    openDialogueWhenPokemonHasBeenKoByOneHitKnockout(secondAttacker);
    return 1;
  } else if (
    pokemonVariables.isFirstAttackActive &&
    secondAttacker.type === "spectrum" &&
    (firstAttacker.firstAttack.name === "Guillotine" ||
      firstAttacker.firstAttack.name === "Empal'Korne")
  ) {
    return 0;
  } else {
    return 1;
  }
}
