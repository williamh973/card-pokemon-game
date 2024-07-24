import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonMakesWeaknessAttack() {
  await displayDialogue(`C'est super efficace !`, 2000);
}
