import { openDialogueWhenPokemonHasFallingAsleep } from "../../dialogue-fight.js";

export const asleepStatut = function asleepStatut(secondAttacker) {
  secondAttacker.primaryStatut = "asleep";
  openDialogueWhenPokemonHasFallingAsleep(secondAttacker);
};
