import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonNoLongerConfused(pokemon) {
  await displayDialogue(`${pokemon.name} n'est plus confus !`, 2000);
}
