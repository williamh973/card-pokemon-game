import { openDialogueWhenPokemonHasFallingAsleep } from "../../dialogue-fight.js";

export function asleepStatut(secondAttacker) {
  secondAttacker.primaryStatut = "asleep";
  openDialogueWhenPokemonHasFallingAsleep(secondAttacker);
}
