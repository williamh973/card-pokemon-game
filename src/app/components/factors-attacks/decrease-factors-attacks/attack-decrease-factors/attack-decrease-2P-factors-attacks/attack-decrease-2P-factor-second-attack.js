import { openDialogueWhenPokemonMakesAttackDecrease2pFactorAttack } from "../../../../battle-dialogues/dialogues/dialogue-battle.js";

export const attackDecrease2pFactorForSecondAttack =
  function attackDecrease2pFactorForSecondAttack(
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
      const newdecreasingValue = (secondAttacker.stats.attack -=
        decreasingValue);
      openDialogueWhenPokemonMakesAttackDecrease2pFactorAttack(secondAttacker);
      return newdecreasingValue;
    }
  };
