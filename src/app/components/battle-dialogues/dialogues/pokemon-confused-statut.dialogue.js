import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonConfusedStatut(pokemon) {
  await displayDialogue(`${pokemon.name} est confus !`, 2000);
}
