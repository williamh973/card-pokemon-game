import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonHpDecreaseByBurningStatut(
  pokemon
) {
  await displayDialogue(`${pokemon.name} souffre de sa brûlure !`, 2000);
}
