import { openDialogueWhenPokemonHasFallingAsleep } from "../../battle-dialogues/dialogues/pokemon-has-falling-asleep.dialogue.js";

export function asleepStatut(secondAttacker) {
  secondAttacker.primaryStatut = "asleep";
  openDialogueWhenPokemonHasFallingAsleep(secondAttacker);
}
