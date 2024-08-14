import { applyPrimaryStatusAnimations } from "../../../animations/animations-statuts/add/apply-primary-statut-class.js";
import { openDialogueWhenPokemonHasBurningStatut } from "../../../../../components/battle-dialogues/dialogues/pokemon-has-burning-statut.dialogue.js";

export async function burningStatut(secondAttacker) {
  secondAttacker.primaryStatut = "burning";
  await applyPrimaryStatusAnimations(secondAttacker);

  const decreaseValue = 2;
  secondAttacker.stats.attack = secondAttacker.stats.attack / decreaseValue;
  secondAttacker.stats.attack = Math.round(secondAttacker.stats.attack);
  await openDialogueWhenPokemonHasBurningStatut(secondAttacker);
}
