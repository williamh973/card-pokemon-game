import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy(
  attacker
) {
  await displayDialogue(`${attacker.name} est déjà boosté !`, 2000);
}
