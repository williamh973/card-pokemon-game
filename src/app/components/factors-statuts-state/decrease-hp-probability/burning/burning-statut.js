import { openDialogueWhenPokemonHasBurningStatut } from "../../../battle-dialogues/dialogues/pokemon-has-burning-statut.dialogue.js";

export function burningStatut(secondAttacker) {
  secondAttacker.primaryStatut = "burning";

  const decreaseValue = 2;
  secondAttacker.stats.attack = secondAttacker.stats.attack / decreaseValue;
  secondAttacker.stats.attack = Math.round(secondAttacker.stats.attack);
  openDialogueWhenPokemonHasBurningStatut(secondAttacker);
}
