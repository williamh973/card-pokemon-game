import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonDoesntSleep(pokemon) {
  await displayDialogue(`Mais ${pokemon.name} n'est pas endormis !`, 2000);
}
