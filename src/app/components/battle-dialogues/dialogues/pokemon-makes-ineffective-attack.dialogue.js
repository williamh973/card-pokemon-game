import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonMakesIneffectiveAttack() {
  await displayDialogue(`Sans effet !`, 2000);
}
