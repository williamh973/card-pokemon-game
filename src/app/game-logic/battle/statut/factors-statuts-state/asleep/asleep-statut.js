import { addStatusAnimations } from "../../../animations/animations-statuts/add/add-statut-animation.js";
import { openDialogueWhenPokemonHasFallingAsleep } from "../../../../../components/battle-dialogues/dialogues/pokemon-has-falling-asleep.dialogue.js";

export async function asleepStatut(secondAttacker) {
  secondAttacker.primaryStatut = "asleep";
  await addStatusAnimations(secondAttacker);
  await openDialogueWhenPokemonHasFallingAsleep(secondAttacker);
}
