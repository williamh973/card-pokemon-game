import { openDialogueWhenPokemonBeingConfused } from "../../../../../components/battle-dialogues/dialogues/pokemon-being-confused.dialogue.js";

export function confusingStatut(secondAttacker) {
  secondAttacker.secondaryStatut.isConfused = true;
  secondAttacker.secondaryStatut.isNormal = false;

  openDialogueWhenPokemonBeingConfused(secondAttacker);
}
