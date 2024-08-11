import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonMakesCriticalHit() {
  await displayDialogue(`Coup critique !`, 2000);
}
