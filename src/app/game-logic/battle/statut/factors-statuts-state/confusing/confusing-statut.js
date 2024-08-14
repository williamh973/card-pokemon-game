import { openDialogueWhenPokemonBeingConfused } from "../../../../../components/battle-dialogues/dialogues/pokemon-being-confused.dialogue.js";
import { applySecondaryStatusAnimations } from "../../../animations/animations-statuts/add/apply-secondary-statut-class.js";

export async function confusingStatut(secondAttacker) {
  secondAttacker.secondaryStatut.isConfused = true;
  secondAttacker.secondaryStatut.isNormal = false;

  await openDialogueWhenPokemonBeingConfused(secondAttacker);
  await applySecondaryStatusAnimations(secondAttacker);
}
