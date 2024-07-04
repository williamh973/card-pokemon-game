import { addStatusAnimations } from "../../../../game-logic/battle/animations/animations-statuts/add-statut-animation.js";
import { openDialogueWhenPokemonHasBurningStatut } from "../../../battle-dialogues/dialogues/pokemon-has-burning-statut.dialogue.js";

export function burningStatut(secondAttacker) {
  secondAttacker.primaryStatut = "burning";
  addStatusAnimations(secondAttacker);

  const decreaseValue = 2;
  secondAttacker.stats.attack = secondAttacker.stats.attack / decreaseValue;
  secondAttacker.stats.attack = Math.round(secondAttacker.stats.attack);
  openDialogueWhenPokemonHasBurningStatut(secondAttacker);
}
