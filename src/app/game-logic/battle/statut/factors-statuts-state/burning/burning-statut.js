import { addStatusAnimations } from "../../../animations/animations-statuts/add-statut-animation.js";
import { openDialogueWhenPokemonHasBurningStatut } from "../../../../../components/battle-dialogues/dialogues/pokemon-has-burning-statut.dialogue.js";

export async function burningStatut(secondAttacker) {
  secondAttacker.primaryStatut = "burning";
  addStatusAnimations(secondAttacker);

  const decreaseValue = 2;
  secondAttacker.stats.attack = secondAttacker.stats.attack / decreaseValue;
  secondAttacker.stats.attack = Math.round(secondAttacker.stats.attack);
  await openDialogueWhenPokemonHasBurningStatut(secondAttacker);
}
