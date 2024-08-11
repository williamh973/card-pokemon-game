import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonMakesIneffectiveAttack() {
  await displayDialogue(`Sans effet !`, 2000);
}
