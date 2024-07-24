import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy(
  attacker
) {
  await displayDialogue(`${attacker.name} se gonfle !`, 2000);
}
