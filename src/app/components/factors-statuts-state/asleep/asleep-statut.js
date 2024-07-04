import { addStatusAnimations } from "../../../game-logic/battle/animations/animations-statuts/add-statut-animation.js";
import { openDialogueWhenPokemonHasFallingAsleep } from "../../battle-dialogues/dialogues/pokemon-has-falling-asleep.dialogue.js";

export function asleepStatut(secondAttacker) {
  secondAttacker.primaryStatut = "asleep";
  addStatusAnimations(secondAttacker);
  openDialogueWhenPokemonHasFallingAsleep(secondAttacker);
}
