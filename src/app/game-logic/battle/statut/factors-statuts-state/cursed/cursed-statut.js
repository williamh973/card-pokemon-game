import { openDialogueWhenPokemonCursedStatut } from "../../../../../components/battle-dialogues/dialogues/pokemon-cursed-statut.js";
import { firstAttackerDecrease50PercentHp } from "./cursed-statut-probability.js";

export async function cursedStatut(firstAttacker, secondAttacker) {
  secondAttacker.secondaryStatut.isCursed = true;
  secondAttacker.secondaryStatut.isNormal = false;

  await openDialogueWhenPokemonCursedStatut(secondAttacker);

  const newDecreaseValue = firstAttackerDecrease50PercentHp(firstAttacker);
  firstAttacker.stats.hp -= newDecreaseValue;
  return firstAttacker.stats.hp;
}
