import { openDialogueWhenPokemonHasBurningStatut } from "../../../battle-dialogues/dialogues/dialogue-battle.js";

export const burningStatut = function burningStatut(secondAttacker) {
  secondAttacker.primaryStatut = "burning";

  const decreaseValue = 2;
  secondAttacker.stats.attack = secondAttacker.stats.attack / decreaseValue;
  secondAttacker.stats.attack = Math.round(secondAttacker.stats.attack);
  openDialogueWhenPokemonHasBurningStatut(secondAttacker);
};
