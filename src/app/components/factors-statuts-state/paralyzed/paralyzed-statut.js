import { addStatusAnimations } from "../../../game-logic/battle/animations/animations-statuts/add-statut-animation.js";
import { openDialogueWhenPokemonHasParalyzedStatut } from "../../battle-dialogues/dialogues/pokemon-has-paralyzed-statut.dialogue.js";

export function paralyzedStatut(secondAttacker) {
  secondAttacker.primaryStatut = "paralyzed";
  addStatusAnimations(secondAttacker);

  const decreaseValue = 4;
  secondAttacker.stats.speed = secondAttacker.stats.speed / decreaseValue;
  secondAttacker.stats.speed = Math.round(secondAttacker.stats.speed);
  openDialogueWhenPokemonHasParalyzedStatut(secondAttacker);
}
