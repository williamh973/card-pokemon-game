import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialoguePokemonAlreadyCursed(pokemon) {
  await displayDialogue(`Mais ${pokemon.name} est déjà maudit !`, 2000);
}
