import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonWakeUp(pokemon) {
  await displayDialogue(`${pokemon.name} se réveille !`, 2000);
}
