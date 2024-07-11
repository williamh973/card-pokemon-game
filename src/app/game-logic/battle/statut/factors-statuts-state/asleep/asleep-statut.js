import { addStatusAnimations } from "../../../animations/animations-statuts/add-statut-animation.js";
import { openDialogueWhenPokemonHasFallingAsleep } from "../../../../../components/battle-dialogues/dialogues/pokemon-has-falling-asleep.dialogue.js";

export function asleepStatut(secondAttacker) {
  secondAttacker.primaryStatut = "asleep";
  addStatusAnimations(secondAttacker);
  openDialogueWhenPokemonHasFallingAsleep(secondAttacker);
}
