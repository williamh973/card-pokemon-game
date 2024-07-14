import { openDialogueWhenPokemonHasBeenKoByOneHitKnockout } from "../../../../../components/battle-dialogues/dialogues/pokemon-has-been-ko-by-one-hit-knockout.dialogue.js";
import { openDialogueWhenPokemonMakesIneffectiveAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-ineffective-attack.dialogue.js";
import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";

export function oneHitKnockoutFactorAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = ["Guillotine", "Empal'Korne"];

  if (
    secondAttacker.type !== "spectrum" &&
    possibleAttacksList.includes(firstAttackerAttack.name)
  ) {
    secondAttacker.stats.hp = 0;
    openDialogueWhenPokemonHasBeenKoByOneHitKnockout(secondAttacker);
    return 1;
  } else if (
    secondAttacker.type === "spectrum" &&
    possibleAttacksList.includes(firstAttackerAttack.name)
  ) {
    openDialogueWhenPokemonMakesIneffectiveAttack();
    return 0;
  } else {
    return 1;
  }
}
