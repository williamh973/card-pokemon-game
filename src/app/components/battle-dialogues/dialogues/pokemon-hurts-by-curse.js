import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonHurtsByCurse(pokemon) {
  await displayDialogue(
    `${pokemon.name} est touché par la malédiction !`,
    2000
  );
}
