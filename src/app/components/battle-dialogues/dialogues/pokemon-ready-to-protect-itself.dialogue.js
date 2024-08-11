import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonReadyToProtectItself(pokemon) {
  await displayDialogue(`${pokemon.name} se tient près !`, 2000);
}
