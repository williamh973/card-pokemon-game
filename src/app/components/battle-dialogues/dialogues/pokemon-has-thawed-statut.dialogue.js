import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonHasThawedStatut(pokemon) {
  await displayDialogue(
    `${pokemon.name} s'est dégelé, il peut attaquer !`,
    2000
  );
}
