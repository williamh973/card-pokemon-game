import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonCursedStatut(pokemon) {
  await displayDialogue(`${pokemon.name} est maudit !`, 2000);
}
