import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonHasBurningStatut(pokemon) {
  await displayDialogue(`${pokemon.name} est brûlé !`, 2000);
}
