import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonHasParalyzedStatut(pokemon) {
  await displayDialogue(
    `${pokemon.name} est paralysé, il pourrait ne pas attaquer !`,
    2000
  );
}
