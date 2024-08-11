import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonHurtByConfusing(pokemon) {
  await displayDialogue(`${pokemon.name} est blessé par la confusion !`, 2000);
}
