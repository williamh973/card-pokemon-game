import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonBeingConfused(pokemon) {
  await displayDialogue(`Cela rend ${pokemon.name} confus !`, 2000);
}
