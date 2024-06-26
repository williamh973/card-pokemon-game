import { openDialogueWhenAttackConfusesPokemon } from "../../dialogue-fight.js";

export const confusingStatut = function confusingStatut(secondAttacker) {
  secondAttacker.secondaryStatut.isConfused = true;
  secondAttacker.secondaryStatut.isNormal = false;

  openDialogueWhenAttackConfusesPokemon(secondAttacker);
};
