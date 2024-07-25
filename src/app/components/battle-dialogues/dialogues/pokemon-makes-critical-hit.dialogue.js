import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonMakesCriticalHit() {
  await displayDialogue(`Coup critique !`, 2000);
}
