import { openDialogueWhenPokemonMakesAttackDecrease2pFactorAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-makes-attack-decrease-2p-factor-attack.dialogue.js";
import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";

export function attackDecrease2pFactorForFirstAttack(
  firstAttacker,
  secondAttacker
) {
  if (
    (firstAttacker.firstAttack.name === "Rugissement" ||
      firstAttacker.firstAttack.name === "Surpuissance") &&
    pokemonVariables.isFirstAttackActive
  ) {
    const decreasingValue = 2;
    const newdecreasingValue = (secondAttacker.stats.attack -= decreasingValue);
    openDialogueWhenPokemonMakesAttackDecrease2pFactorAttack(secondAttacker);
    return newdecreasingValue;
  }
}
