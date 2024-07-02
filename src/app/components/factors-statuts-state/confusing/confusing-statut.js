import { openDialogueWhenAttackConfusesPokemon } from "../../dialogue-battle.js";

export function confusingStatut(secondAttacker) {
  secondAttacker.secondaryStatut.isConfused = true;
  secondAttacker.secondaryStatut.isNormal = false;

  openDialogueWhenAttackConfusesPokemon(secondAttacker);
}
