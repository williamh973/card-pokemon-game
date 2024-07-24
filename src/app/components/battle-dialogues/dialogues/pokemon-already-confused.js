import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonAlreadyConfused(pokemon) {
  await displayDialogue(`Mais ${pokemon.name} est déjà confus !`, 2000);
}
