import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonMakesCriticalHit() {
  console.log("avant coup critique");
  await displayDialogue(`Coup critique !`, 2000);
  console.log("après coup critique");
}
