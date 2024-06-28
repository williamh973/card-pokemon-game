import { openDialogueWhenAttackConfusesPokemon } from "../../dialogue-fight.js";

export function confusingStatut(secondAttacker) {
  secondAttacker.secondaryStatut.isConfused = true;
  secondAttacker.secondaryStatut.isNormal = false;

  openDialogueWhenAttackConfusesPokemon(secondAttacker);
}
