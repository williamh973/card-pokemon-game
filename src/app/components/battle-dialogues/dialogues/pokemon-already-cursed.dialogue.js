import { displayDialogue } from "./display-dialogue.js";

export async function openDialoguePokemonAlreadyCursed(pokemon) {
  await displayDialogue(`Mais ${pokemon.name} est déjà maudit !`, 2000);
}
