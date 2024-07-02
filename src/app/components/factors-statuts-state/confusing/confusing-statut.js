import { openDialogueWhenAttackConfusesPokemon } from "../../battle-dialogues/dialogues/dialogue-battle.js";

export function confusingStatut(secondAttacker) {
  secondAttacker.secondaryStatut.isConfused = true;
  secondAttacker.secondaryStatut.isNormal = false;

  openDialogueWhenAttackConfusesPokemon(secondAttacker);
}
