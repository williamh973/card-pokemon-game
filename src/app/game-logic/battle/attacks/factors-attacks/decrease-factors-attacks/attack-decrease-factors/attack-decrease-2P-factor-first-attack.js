import { openDialogueWhenPokemonMakesAttackDecrease2pFactorAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-makes-attack-decrease-2p-factor-attack.dialogue.js";

const possibleAttacksList = ["Rugissement", "Surpuissance"];

export function attackDecrease2pFactorAttack(
  secondAttacker,
  firstAttackerAttack
) {
  if (possibleAttacksList.includes(firstAttackerAttack.name)) {
    const decreasingValue = 2;
    const newdecreasingValue = (secondAttacker.stats.attack -= decreasingValue);
    openDialogueWhenPokemonMakesAttackDecrease2pFactorAttack(secondAttacker);
    return newdecreasingValue;
  }
}
