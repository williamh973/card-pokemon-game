import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonHasBeenKoByOneHitKnockout(
  pokemon
) {
  await displayDialogue(`${pokemon.name} est KO en un coup !`, 2000);
}
