import { openDialogueWhenPokemonMakesAttackDecrease2pFactorAttack } from "../../../../battle-dialogues/dialogues/dialogue-battle.js";

export const attackDecrease2pFactorForFirstAttack =
  function attackDecrease2pFactorForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive
  ) {
    if (
      (firstAttacker.firstAttack.name === "Rugissement" ||
        firstAttacker.firstAttack.name === "Surpuissance") &&
      isFirstAttackActive
    ) {
      const decreasingValue = 2;
      const newdecreasingValue = (secondAttacker.stats.attack -=
        decreasingValue);
      openDialogueWhenPokemonMakesAttackDecrease2pFactorAttack(secondAttacker);
      return newdecreasingValue;
    }
  };
