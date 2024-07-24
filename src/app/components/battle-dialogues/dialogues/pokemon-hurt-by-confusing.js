import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonHurtByConfusing(pokemon) {
  await displayDialogue(`${pokemon.name} est blessé par la confusion !`, 2000);
}
