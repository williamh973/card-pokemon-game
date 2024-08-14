import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonScared(pokemon) {
  await displayDialogue(`${pokemon.name} a la trouille !`, 2000);
}
