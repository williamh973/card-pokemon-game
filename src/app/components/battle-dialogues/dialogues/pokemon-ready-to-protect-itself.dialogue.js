import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonReadyToProtectItself(pokemon) {
  await displayDialogue(`${pokemon.name} se tient près !`, 2000);
}
