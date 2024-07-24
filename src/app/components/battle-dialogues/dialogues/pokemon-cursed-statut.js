import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonCursedStatut(pokemon) {
  await displayDialogue(`${pokemon.name} est maudit !`, 2000);
}
