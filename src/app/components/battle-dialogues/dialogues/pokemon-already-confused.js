import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonAlreadyConfused(pokemon) {
  await displayDialogue(`Mais ${pokemon.name} est déjà confus !`, 2000);
}
