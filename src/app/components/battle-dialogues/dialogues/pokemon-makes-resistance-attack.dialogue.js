import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonMakesResistanceAttack() {
  await displayDialogue(`Ce n'est pas très efficace !`, 2000);
}
