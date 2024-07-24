import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonBeingConfused(pokemon) {
  await displayDialogue(`Cela rend ${pokemon.name} confus !`, 2000);
}
