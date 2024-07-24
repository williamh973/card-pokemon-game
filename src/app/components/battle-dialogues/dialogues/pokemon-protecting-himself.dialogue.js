import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonProtectingHimself(pokemon) {
  await displayDialogue(`${pokemon.name} se protège !`, 2000);
}
