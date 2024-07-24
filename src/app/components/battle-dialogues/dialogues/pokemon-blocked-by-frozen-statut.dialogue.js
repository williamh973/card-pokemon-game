import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonBlockedByFrozenStatut(pokemon) {
  await displayDialogue(`Le gel empêche ${pokemon.name} d'attaquer !`, 2000);
}
