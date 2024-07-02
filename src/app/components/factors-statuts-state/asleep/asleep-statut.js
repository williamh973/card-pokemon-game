import { openDialogueWhenPokemonHasFallingAsleep } from "../../battle-dialogues/dialogues/dialogue-battle.js";

export function asleepStatut(secondAttacker) {
  secondAttacker.primaryStatut = "asleep";
  openDialogueWhenPokemonHasFallingAsleep(secondAttacker);
}
