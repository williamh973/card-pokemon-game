import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonKo() {
  await displayDialogue(`Choisir un autre pokemon.`, 0);
}
