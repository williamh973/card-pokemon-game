import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonHasFrozenStatut(pokemon) {
  await displayDialogue(`${pokemon.name} est gelé !`, 2000);
}
