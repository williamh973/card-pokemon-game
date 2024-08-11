import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonHasPoisonedStatut(pokemon) {
  await displayDialogue(`${pokemon.name} est empoisoné !`, 2000);
}
