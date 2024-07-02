import { openDialogueWhenPokemonHasFallingAsleep } from "../../dialogue-battle.js";

export function asleepStatut(secondAttacker) {
  secondAttacker.primaryStatut = "asleep";
  openDialogueWhenPokemonHasFallingAsleep(secondAttacker);
}
