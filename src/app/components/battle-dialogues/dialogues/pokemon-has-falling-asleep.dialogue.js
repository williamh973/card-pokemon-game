import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonHasFallingAsleep(pokemon) {
  await displayDialogue(`${pokemon.name} s'endort !`, 2000);
}
