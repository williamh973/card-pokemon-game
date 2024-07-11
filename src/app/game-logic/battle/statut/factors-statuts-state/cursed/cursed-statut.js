import { openDialogueWhenPokemonCursedStatut } from "../../../../../components/battle-dialogues/dialogues/pokemon-cursed-statut.js";

export function cursedStatut(firstAttacker, secondAttacker) {
  secondAttacker.secondaryStatut.isCursed = true;
  secondAttacker.secondaryStatut.isNormal = false;

  openDialogueWhenPokemonCursedStatut(secondAttacker);

  let percentage = 50;
  let decreaseValue = (percentage / 100) * firstAttacker.stats.hpMax;
  const newDecreaseValue = Math.round(decreaseValue);
  firstAttacker.stats.hp -= newDecreaseValue;
  return firstAttacker.stats.hp;
}
