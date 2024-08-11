import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonWakeUp(pokemon) {
  await displayDialogue(`${pokemon.name} se réveille !`, 2000);
}
