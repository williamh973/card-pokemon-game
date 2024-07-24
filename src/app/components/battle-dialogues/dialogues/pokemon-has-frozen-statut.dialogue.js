import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonHasFrozenStatut(pokemon) {
  await displayDialogue(`${pokemon.name} est gelé !`, 2000);
}
