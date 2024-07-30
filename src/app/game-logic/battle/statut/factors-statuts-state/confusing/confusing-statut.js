import { openDialogueWhenPokemonBeingConfused } from "../../../../../components/battle-dialogues/dialogues/pokemon-being-confused.dialogue.js";
import { addStatusAnimations } from "../../../animations/animations-statuts/add-statut-animation.js";

export async function confusingStatut(secondAttacker) {
  secondAttacker.secondaryStatut.isConfused = true;
  secondAttacker.secondaryStatut.isNormal = false;

  await openDialogueWhenPokemonBeingConfused(secondAttacker);
  await addStatusAnimations(secondAttacker);
}
