import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonHasBeenKoByOneHitKnockout(
  pokemon
) {
  await displayDialogue(`${pokemon.name} est KO en un coup !`, 2000);
}
