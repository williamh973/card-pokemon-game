import { addStatusAnimations } from "../../../animations/animations-statuts/add-statut-animation.js";
import { openDialogueWhenPokemonHasFallingAsleep } from "../../../../../components/battle-dialogues/dialogues/pokemon-has-falling-asleep.dialogue.js";

export async function asleepStatut(secondAttacker) {
  secondAttacker.primaryStatut = "asleep";
  "statut de ", secondAttacker.name, " : ", secondAttacker.primaryStatut;
  addStatusAnimations(secondAttacker);
  await openDialogueWhenPokemonHasFallingAsleep(secondAttacker);
}
