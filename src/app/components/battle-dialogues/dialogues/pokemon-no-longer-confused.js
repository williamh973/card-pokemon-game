import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonNoLongerConfused(pokemon) {
  await displayDialogue(`${pokemon.name} n'est plus confus !`, 2000);
}
