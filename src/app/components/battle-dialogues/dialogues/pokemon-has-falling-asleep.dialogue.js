import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonHasFallingAsleep(pokemon) {
  await displayDialogue(`${pokemon.name} s'endort !`, 2000);
}
