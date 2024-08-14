import { openDialogueWhenPokemonCursedStatut } from "../../../../../components/battle-dialogues/dialogues/pokemon-cursed-statut.js";
import { applySecondaryStatusAnimations } from "../../../animations/animations-statuts/add/apply-secondary-statut-class.js";
import { firstAttackerDecrease50PercentHp } from "./cursed-statut-probability.js";

export async function cursedStatut(firstAttacker, secondAttacker) {
  secondAttacker.secondaryStatut.isCursed = true;
  secondAttacker.secondaryStatut.isNormal = false;

  await openDialogueWhenPokemonCursedStatut(secondAttacker);
  await applySecondaryStatusAnimations(secondAttacker);
  const newDecreaseValue = firstAttackerDecrease50PercentHp(firstAttacker);
  firstAttacker.stats.hp -= newDecreaseValue;
  return firstAttacker.stats.hp;
}
