import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonHasParalyzedStatut(pokemon) {
  await displayDialogue(
    `${pokemon.name} est paralysé, il pourrait ne pas attaquer !`,
    2000
  );
}
