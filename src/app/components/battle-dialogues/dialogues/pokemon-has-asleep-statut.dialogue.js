import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonIsAsleepStatut(pokemon) {
  await displayDialogue(`${pokemon.name} dort !`, 2000);
}
