import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonMakesWeaknessAttack() {
  await displayDialogue(`C'est super efficace !`, 2000);
}
