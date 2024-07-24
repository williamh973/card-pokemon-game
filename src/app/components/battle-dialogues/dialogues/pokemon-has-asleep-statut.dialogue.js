import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonIsAsleepStatut(pokemon) {
  await displayDialogue(`${pokemon.name} dort !`, 2000);
}
