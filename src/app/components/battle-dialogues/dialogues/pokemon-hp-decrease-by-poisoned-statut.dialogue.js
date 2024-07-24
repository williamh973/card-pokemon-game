import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonHpDecreaseByPoisonedStatut(
  pokemon
) {
  await displayDialogue(`${pokemon.name} souffre du poison !`, 2000);
}
