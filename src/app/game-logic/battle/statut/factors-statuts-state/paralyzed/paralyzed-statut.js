import { applyPrimaryStatusAnimations } from "../../../animations/animations-statuts/add/apply-primary-statut-class.js";
import { openDialogueWhenPokemonHasParalyzedStatut } from "../../../../../components/battle-dialogues/dialogues/pokemon-has-paralyzed-statut.dialogue.js";

export async function paralyzedStatut(secondAttacker) {
  secondAttacker.primaryStatut = "paralyzed";
  await applyPrimaryStatusAnimations(secondAttacker);

  const decreaseValue = 4;
  secondAttacker.stats.speed = secondAttacker.stats.speed / decreaseValue;
  secondAttacker.stats.speed = Math.round(secondAttacker.stats.speed);
  await openDialogueWhenPokemonHasParalyzedStatut(secondAttacker);
}
