import { openDialogueWhenPokemonMakesAttackDecrease2pFactorAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-makes-attack-decrease-2p-factor-attack.dialogue.js";

export function attackDecrease2pFactorForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  if (
    (firstAttacker.secondAttack.name === "Rugissement" ||
      firstAttacker.secondAttack.name === "Surpuissance") &&
    isSecondAttackActive
  ) {
    const decreasingValue = 2;
    const newdecreasingValue = (secondAttacker.stats.attack -= decreasingValue);
    openDialogueWhenPokemonMakesAttackDecrease2pFactorAttack(secondAttacker);
    return newdecreasingValue;
  }
}
