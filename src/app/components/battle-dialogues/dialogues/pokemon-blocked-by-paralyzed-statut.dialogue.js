import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonBlockedByParalyzedStatut(pokemon) {
  await displayDialogue(
    `La paralysie empêche ${pokemon.name} d'attaquer !`,
    2000
  );
}
