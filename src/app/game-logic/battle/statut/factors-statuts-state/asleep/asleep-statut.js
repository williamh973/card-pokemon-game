import { applyPrimaryStatusAnimations } from "../../../animations/animations-statuts/add/apply-primary-statut-class.js";
import { openDialogueWhenPokemonHasFallingAsleep } from "../../../../../components/battle-dialogues/dialogues/pokemon-has-falling-asleep.dialogue.js";

export async function asleepStatut(secondAttacker) {
  secondAttacker.primaryStatut = "asleep";
  await applyPrimaryStatusAnimations(secondAttacker);
  await openDialogueWhenPokemonHasFallingAsleep(secondAttacker);
}
