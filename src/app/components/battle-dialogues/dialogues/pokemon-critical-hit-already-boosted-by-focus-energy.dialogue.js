import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy(
  attacker
) {
  await displayDialogue(`${attacker.name} est déjà boosté !`, 2000);
}
