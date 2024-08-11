import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonKo() {
  await displayDialogue(`Choisir un autre pokemon.`, 0);
}
