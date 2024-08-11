import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonProtectingHimself(pokemon) {
  await displayDialogue(`${pokemon.name} se protège !`, 2000);
}
