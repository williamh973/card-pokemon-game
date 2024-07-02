import { openDialogueWhenPokemonCursed } from "../../../dialogue-battle.js";

export const cursedStatut = function cursedStatut(
  firstAttacker,
  secondAttacker
) {
  secondAttacker.secondaryStatut.isCursed = true;
  secondAttacker.secondaryStatut.isNormal = false;

  openDialogueWhenPokemonCursed(secondAttacker);

  let percentage = 50;
  let decreaseValue = (percentage / 100) * firstAttacker.stats.hpMax;
  const newDecreaseValue = Math.round(decreaseValue);
  firstAttacker.stats.hp -= newDecreaseValue;
  return firstAttacker.stats.hp;
};
